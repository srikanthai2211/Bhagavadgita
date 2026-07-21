import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { Plugin } from 'vite';

// Dev-server middleware that routes /api/* requests to the serverless
// handlers in the `api/` directory. Without this, Vite's SPA fallback
// returns index.html for /api/tts and /api/chat, so the frontend fetches
// get a 200 with HTML instead of audio/JSON and silently fail.
function apiRoutesPlugin(): Plugin {
  const collectBody = (req: any): Promise<Buffer> =>
    new Promise((resolve, reject) => {
      const chunks: Buffer[] = [];
      req.on('data', (c: Buffer) => chunks.push(c));
      req.on('end', () => resolve(Buffer.concat(chunks)));
      req.on('error', reject);
    });

  const setup = (server: any) => {
    server.middlewares.use(async (req: any, res: any, next: any) => {
      if (!req.url?.startsWith('/api/')) return next();

      const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
      let modulePath: string | null = null;
      if (url.pathname === '/api/tts') modulePath = '/api/tts.ts';
      else if (url.pathname === '/api/chat') modulePath = '/api/chat.ts';
      else return next();

      try {
        const mod = await server.ssrLoadModule(modulePath);
        const handler = mod.default;
        const bodyBuffer = await collectBody(req);

        const headers = new Headers();
        for (const [key, value] of Object.entries(req.headers)) {
          if (Array.isArray(value)) value.forEach((v) => headers.append(key, v));
          else if (value != null) headers.set(key, String(value));
        }

        const request = new Request(url, {
          method: req.method || 'GET',
          headers,
          body: bodyBuffer.length > 0 ? bodyBuffer : undefined,
          // @ts-ignore
          duplex: 'half',
        });

        const response: Response = await handler(request);

        res.statusCode = response.status;
        response.headers.forEach((v, k) => res.setHeader(k, v));
        res.end(Buffer.from(await response.arrayBuffer()));
      } catch (err) {
        console.error('[api-routes] Error:', err);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Internal server error' }));
      }
    });
  };

  return {
    name: 'api-routes-dev',
    configureServer: setup,
    configurePreviewServer: setup,
  };
}

export default defineConfig({
  plugins: [react(), apiRoutesPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

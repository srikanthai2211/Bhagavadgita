// vite.config.ts
import path from "node:path";
import fs from "node:fs";
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
var __vite_injected_original_dirname = "/home/project";
function loadDotEnv() {
  const envPath = path.resolve(__vite_injected_original_dirname, ".env");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (value.startsWith('"') && value.endsWith('"') || value.startsWith("'") && value.endsWith("'")) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}
loadDotEnv();
function apiRoutesPlugin() {
  const collectBody = (req) => new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
  const setup = (server) => {
    server.middlewares.use(async (req, res, next) => {
      if (!req.url?.startsWith("/api/")) return next();
      const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
      let modulePath = null;
      if (url.pathname === "/api/tts") modulePath = "/api/tts.ts";
      else if (url.pathname === "/api/chat") modulePath = "/api/chat.ts";
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
          method: req.method || "GET",
          headers,
          body: bodyBuffer.length > 0 ? bodyBuffer : void 0,
          // @ts-ignore
          duplex: "half"
        });
        const response = await handler(request);
        res.statusCode = response.status;
        response.headers.forEach((v, k) => res.setHeader(k, v));
        res.end(Buffer.from(await response.arrayBuffer()));
      } catch (err) {
        console.error("[api-routes] Error:", err);
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "Internal server error" }));
      }
    });
  };
  return {
    name: "api-routes-dev",
    configureServer: setup,
    configurePreviewServer: setup
  };
}
var vite_config_default = defineConfig({
  plugins: [react(), apiRoutesPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  optimizeDeps: {
    exclude: ["lucide-react"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBQbHVnaW4gfSBmcm9tICd2aXRlJztcblxuLy8gVml0ZSdzIGNsaWVudC1zaWRlIGBpbXBvcnQubWV0YS5lbnZgIGhhbmRsaW5nIGRvZXNuJ3QgcHV0IHBsYWluIChub25cbi8vIFZJVEVfLXByZWZpeGVkKSAuZW52IHZhcnMgb250byBgcHJvY2Vzcy5lbnZgIGZvciBvdXIgb3duIGRldi1zZXJ2ZXJcbi8vIG1pZGRsZXdhcmUgLyBhcGkvKi50cyBoYW5kbGVycy4gTG9hZCAuZW52IG1hbnVhbGx5IHNvIE9QRU5BSV9BUElfS0VZIGV0Yy5cbi8vIGFyZSBhdmFpbGFibGUgdG8gYHByb2Nlc3MuZW52YCBpbnNpZGUgdGhlIHNlcnZlcmxlc3MgZnVuY3Rpb24gaGFuZGxlcnMuXG5mdW5jdGlvbiBsb2FkRG90RW52KCkge1xuICBjb25zdCBlbnZQYXRoID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy5lbnYnKTtcbiAgaWYgKCFmcy5leGlzdHNTeW5jKGVudlBhdGgpKSByZXR1cm47XG4gIGZvciAoY29uc3QgbGluZSBvZiBmcy5yZWFkRmlsZVN5bmMoZW52UGF0aCwgJ3V0Zi04Jykuc3BsaXQoJ1xcbicpKSB7XG4gICAgY29uc3QgdHJpbW1lZCA9IGxpbmUudHJpbSgpO1xuICAgIGlmICghdHJpbW1lZCB8fCB0cmltbWVkLnN0YXJ0c1dpdGgoJyMnKSkgY29udGludWU7XG4gICAgY29uc3QgZXEgPSB0cmltbWVkLmluZGV4T2YoJz0nKTtcbiAgICBpZiAoZXEgPT09IC0xKSBjb250aW51ZTtcbiAgICBjb25zdCBrZXkgPSB0cmltbWVkLnNsaWNlKDAsIGVxKS50cmltKCk7XG4gICAgbGV0IHZhbHVlID0gdHJpbW1lZC5zbGljZShlcSArIDEpLnRyaW0oKTtcbiAgICBpZiAoKHZhbHVlLnN0YXJ0c1dpdGgoJ1wiJykgJiYgdmFsdWUuZW5kc1dpdGgoJ1wiJykpIHx8ICh2YWx1ZS5zdGFydHNXaXRoKFwiJ1wiKSAmJiB2YWx1ZS5lbmRzV2l0aChcIidcIikpKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDEsIC0xKTtcbiAgICB9XG4gICAgaWYgKCEoa2V5IGluIHByb2Nlc3MuZW52KSkgcHJvY2Vzcy5lbnZba2V5XSA9IHZhbHVlO1xuICB9XG59XG5sb2FkRG90RW52KCk7XG5cbi8vIERldi1zZXJ2ZXIgbWlkZGxld2FyZSB0aGF0IHJvdXRlcyAvYXBpLyogcmVxdWVzdHMgdG8gdGhlIHNlcnZlcmxlc3Ncbi8vIGhhbmRsZXJzIGluIHRoZSBgYXBpL2AgZGlyZWN0b3J5LiBXaXRob3V0IHRoaXMsIFZpdGUncyBTUEEgZmFsbGJhY2tcbi8vIHJldHVybnMgaW5kZXguaHRtbCBmb3IgL2FwaS90dHMgYW5kIC9hcGkvY2hhdCwgc28gdGhlIGZyb250ZW5kIGZldGNoZXNcbi8vIGdldCBhIDIwMCB3aXRoIEhUTUwgaW5zdGVhZCBvZiBhdWRpby9KU09OIGFuZCBzaWxlbnRseSBmYWlsLlxuZnVuY3Rpb24gYXBpUm91dGVzUGx1Z2luKCk6IFBsdWdpbiB7XG4gIGNvbnN0IGNvbGxlY3RCb2R5ID0gKHJlcTogYW55KTogUHJvbWlzZTxCdWZmZXI+ID0+XG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgY2h1bmtzOiBCdWZmZXJbXSA9IFtdO1xuICAgICAgcmVxLm9uKCdkYXRhJywgKGM6IEJ1ZmZlcikgPT4gY2h1bmtzLnB1c2goYykpO1xuICAgICAgcmVxLm9uKCdlbmQnLCAoKSA9PiByZXNvbHZlKEJ1ZmZlci5jb25jYXQoY2h1bmtzKSkpO1xuICAgICAgcmVxLm9uKCdlcnJvcicsIHJlamVjdCk7XG4gICAgfSk7XG5cbiAgY29uc3Qgc2V0dXAgPSAoc2VydmVyOiBhbnkpID0+IHtcbiAgICBzZXJ2ZXIubWlkZGxld2FyZXMudXNlKGFzeW5jIChyZXE6IGFueSwgcmVzOiBhbnksIG5leHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKCFyZXEudXJsPy5zdGFydHNXaXRoKCcvYXBpLycpKSByZXR1cm4gbmV4dCgpO1xuXG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcS51cmwsIGBodHRwOi8vJHtyZXEuaGVhZGVycy5ob3N0IHx8ICdsb2NhbGhvc3QnfWApO1xuICAgICAgbGV0IG1vZHVsZVBhdGg6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgICAgaWYgKHVybC5wYXRobmFtZSA9PT0gJy9hcGkvdHRzJykgbW9kdWxlUGF0aCA9ICcvYXBpL3R0cy50cyc7XG4gICAgICBlbHNlIGlmICh1cmwucGF0aG5hbWUgPT09ICcvYXBpL2NoYXQnKSBtb2R1bGVQYXRoID0gJy9hcGkvY2hhdC50cyc7XG4gICAgICBlbHNlIHJldHVybiBuZXh0KCk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG1vZCA9IGF3YWl0IHNlcnZlci5zc3JMb2FkTW9kdWxlKG1vZHVsZVBhdGgpO1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gbW9kLmRlZmF1bHQ7XG4gICAgICAgIGNvbnN0IGJvZHlCdWZmZXIgPSBhd2FpdCBjb2xsZWN0Qm9keShyZXEpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhyZXEuaGVhZGVycykpIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlLmZvckVhY2goKHYpID0+IGhlYWRlcnMuYXBwZW5kKGtleSwgdikpO1xuICAgICAgICAgIGVsc2UgaWYgKHZhbHVlICE9IG51bGwpIGhlYWRlcnMuc2V0KGtleSwgU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiByZXEubWV0aG9kIHx8ICdHRVQnLFxuICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgYm9keTogYm9keUJ1ZmZlci5sZW5ndGggPiAwID8gYm9keUJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgZHVwbGV4OiAnaGFsZicsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIocmVxdWVzdCk7XG5cbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSByZXNwb25zZS5zdGF0dXM7XG4gICAgICAgIHJlc3BvbnNlLmhlYWRlcnMuZm9yRWFjaCgodiwgaykgPT4gcmVzLnNldEhlYWRlcihrLCB2KSk7XG4gICAgICAgIHJlcy5lbmQoQnVmZmVyLmZyb20oYXdhaXQgcmVzcG9uc2UuYXJyYXlCdWZmZXIoKSkpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1thcGktcm91dGVzXSBFcnJvcjonLCBlcnIpO1xuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7IGVycm9yOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnYXBpLXJvdXRlcy1kZXYnLFxuICAgIGNvbmZpZ3VyZVNlcnZlcjogc2V0dXAsXG4gICAgY29uZmlndXJlUHJldmlld1NlcnZlcjogc2V0dXAsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBhcGlSb3V0ZXNQbHVnaW4oKV0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcbiAgICB9LFxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBleGNsdWRlOiBbJ2x1Y2lkZS1yZWFjdCddLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLE9BQU8sVUFBVTtBQUMxTyxPQUFPLFFBQVE7QUFDZixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFIbEIsSUFBTSxtQ0FBbUM7QUFVekMsU0FBUyxhQUFhO0FBQ3BCLFFBQU0sVUFBVSxLQUFLLFFBQVEsa0NBQVcsTUFBTTtBQUM5QyxNQUFJLENBQUMsR0FBRyxXQUFXLE9BQU8sRUFBRztBQUM3QixhQUFXLFFBQVEsR0FBRyxhQUFhLFNBQVMsT0FBTyxFQUFFLE1BQU0sSUFBSSxHQUFHO0FBQ2hFLFVBQU0sVUFBVSxLQUFLLEtBQUs7QUFDMUIsUUFBSSxDQUFDLFdBQVcsUUFBUSxXQUFXLEdBQUcsRUFBRztBQUN6QyxVQUFNLEtBQUssUUFBUSxRQUFRLEdBQUc7QUFDOUIsUUFBSSxPQUFPLEdBQUk7QUFDZixVQUFNLE1BQU0sUUFBUSxNQUFNLEdBQUcsRUFBRSxFQUFFLEtBQUs7QUFDdEMsUUFBSSxRQUFRLFFBQVEsTUFBTSxLQUFLLENBQUMsRUFBRSxLQUFLO0FBQ3ZDLFFB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

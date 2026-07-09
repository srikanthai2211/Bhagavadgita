import { useLocalStorage } from './useLocalStorage';
import type { LanguageMode, ThemeMode } from '../data/types';

export function useTheme() {
  const [theme, setTheme] = useLocalStorage<ThemeMode>('bgym_theme', 'light');

  const toggle = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return { theme, setTheme, toggle };
}

export function useLanguageMode() {
  const [mode, setMode] = useLocalStorage<LanguageMode>('bgym_lang', 'both');
  return { mode, setMode };
}

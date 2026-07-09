import { Search, X } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
}

export function SearchBar({ value, onChange, placeholder = 'Search verses, chapters, themes...', autoFocus }: SearchBarProps) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) ref.current?.focus();
  }, [autoFocus]);

  return (
    <div className="relative w-full">
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400 pointer-events-none" />
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-700 text-sm text-ink-800 dark:text-ink-100 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent transition-all"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full hover:bg-ink-100 dark:hover:bg-ink-800 flex items-center justify-center"
          aria-label="Clear search"
        >
          <X className="h-3.5 w-3.5 text-ink-400" />
        </button>
      )}
    </div>
  );
}

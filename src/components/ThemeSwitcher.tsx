// src/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from './ThemeProvider';
import IconPalette from './icons/IconPalette';

// Define the available themes in an array for easy management.
const themes = [
  { value: 'dark-slate', label: 'Dark Slate' },
  { value: 'pastel-lavender', label: 'Pastel Lavender' },
  { value: 'midnight-blue', label: 'Midnight Blue' },
  { value: 'forest-green', label: 'Forest Green' },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-3">
      <IconPalette size={20} className="text-[var(--color-text-muted)]" />
      <div className="relative">
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="appearance-none w-full bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] border border-[var(--color-border-primary)] rounded-md py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-primary)]"
          aria-label="Select a theme"
        >
          {themes.map(t => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[var(--color-text-muted)]">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
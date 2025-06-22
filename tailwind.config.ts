// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  // The 'content' array tells Tailwind which files to scan
  // for class names. This is crucial for production builds.
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  // The 'theme' object is where you would customize your
  // color palette, fonts, spacing, etc.
  theme: {
    extend: {},
  },
  
  // The 'plugins' array is where we add extra functionality,
  // like the typography plugin.
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
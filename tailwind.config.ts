import type { Config } from 'tailwindcss';
// We need the defaultTheme to extend it, not replace it.
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  // --- FIX 1: Corrected content paths to look inside the 'src' directory ---
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontWeight: {
        avenirThin: '100',
        avenirLight: '300',
        avenirRegular: '400',
        avenirMedium: '500',
        avenirDemi: '600',
        avenirBold: '700',
        avenirHeavy: '800',
      },
      fontFamily: {
          avenir: ["Avenir", 'sans-serif'],
          geometric: ['Geometric', "sans-serif"],
      },
    },
  },
  plugins: [
  ],
};

export default config;

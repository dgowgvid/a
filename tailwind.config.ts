import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'sf-blue': '#007AFF',
        'sf-red': '#FF3B30',
        'sf-orange': '#FF9500',
        'sf-green': '#34C759',
        'sf-purple': '#AF52DE',
        'sf-gray': {
          50: '#F5F5F7',
          100: '#E5E5EA',
          200: '#D1D1D6',
          300: '#C7C7CC',
        }
      },
      fontFamily: {
        'sf': ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', 'system-ui', 'sans-serif'],
        'sf-mono': ['"SF Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;

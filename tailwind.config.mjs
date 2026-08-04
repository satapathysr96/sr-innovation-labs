/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          brand: {
            50: '#f0fdf4',
            100: '#dcfce7',
            500: '#22c55e',
            600: '#16a34a',
            900: '#14532d',
          },
          dark: {
            bg: '#0a0a0c',
            card: '#121216',
            border: '#22222a',
          },
          light: {
+           bg: '#ffffff',
+           card: '#f8fafc',
+           border: '#e2e8f0',
+         }
        },
      },
    },
    plugins: [],
  };

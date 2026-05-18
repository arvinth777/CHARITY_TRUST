/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#C2410C',
        'primary-dark': '#9A3412',
        'primary-light': '#FFF7ED',
        secondary: '#1E3A8A',
        'secondary-light': '#EFF6FF',
        text: '#1C1917',
        'text-muted': '#6B7280',
        bg: '#FFFFFF',
        'bg-alt': '#F9FAFB',
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Lato', 'Noto Sans Tamil', 'sans-serif'],
        display: ['Playfair Display', 'Noto Serif Tamil', 'serif'],
        tamil: ['Noto Sans Tamil', 'sans-serif'],
      },
      maxWidth: {
        site: '1200px',
      },
    },
  },
  plugins: [],
};

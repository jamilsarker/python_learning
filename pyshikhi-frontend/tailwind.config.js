/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'bengali': ['Hind Siliguri', 'Noto Sans Bengali', 'sans-serif'],
        'mono': ['Fira Code', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}

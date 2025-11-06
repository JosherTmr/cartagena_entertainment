/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#211916',
        keppel: '#59b4a3',
        'keppel-light': '#57aa80',
        'glass-background': 'rgba(33, 25, 22, 0.5)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
        'text-light': '#f0f0f0',
        'text-dark': '#1a1a1a',
      },
      fontFamily: {
        display: ['BuckwheatTCSans-Painted', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
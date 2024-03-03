/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-cyan': '#cde2e8',
        'neon-green': '#51ffa8',
        'grayish-blue': '#4e5c73',
        'dark-grayish-blue': '#313a48',
        'dark-blue': '#1f2632',
      },
    },
  },
  plugins: [],
}


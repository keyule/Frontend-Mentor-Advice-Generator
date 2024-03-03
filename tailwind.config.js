/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      '1': '0em',
      '2': '0.025em',
      '3': '0.05em',
      '4': '0.1em',
      '5': '0.2em',
    },
    extend: {
      colors: {
        'light-cyan': '#cde2e8',
        'neon-green': '#51ffa8',
        'grayish-blue': '#4e5c73',
        'dark-grayish-blue': '#313a48',
        'dark-blue': '#1f2632',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      translate: {
        '22': '5.5rem',
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
}


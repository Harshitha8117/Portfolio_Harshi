/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // Enable dark mode via class strategy for next-themes
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      colors: {
        primary: '#0070f3',
        accent: '#448aff',
        darkBg: '#0a0a0a',
        cardGlass: 'rgba(255, 255, 255, 0.08)',
      },
      backgroundImage: {
        blueGradient: 'linear-gradient(135deg, #004e92, #000428, #1e3c72, #2a5298)',
      },
      animation: {
        gradient: 'gradientShiftBlue 15s ease infinite',
      },
      keyframes: {
        gradientShiftBlue: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};

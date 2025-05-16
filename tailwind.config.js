/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#000000',
          darker: '#111111',
        },
        primary: {
          blue: '#4472C4',
          blueDark: '#2954A3',
          blueLight: '#6690D9',
        },
        secondary: {
          green: '#00FF00',
          greenDark: '#00CC00',
          greenLight: '#66FF66',
        },
        accent: {
          purple: '#A777E3',
          purpleDark: '#8A5DD6',
          purpleLight: '#C4A6ED',
        },
        text: {
          light: '#EEEEEE',
          gray: '#808080',
          dark: '#333333',
        }
      },
      fontFamily: {
        exo: ['"Exo 2"', 'sans-serif'],
      },
      boxShadow: {
        'neon-blue': '0 0 5px #4472C4, 0 0 10px #4472C4',
        'neon-green': '0 0 5px #00FF00, 0 0 10px #00FF00',
        'neon-purple': '0 0 5px #A777E3, 0 0 10px #A777E3',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'cyber-grid': "url('/images/cyber-grid.png')",
        'circuit': "url('/images/circuit-pattern.png')",
      },
    },
  },
  plugins: [],
};
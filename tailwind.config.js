/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3949ab',
          light: '#6f74dd',
          dark: '#00227b',
        },
        secondary: {
          DEFAULT: '#6c63ff',
          light: '#9d94ff',
          dark: '#3a35cc',
        },
        accent: {
          DEFAULT: '#ff5252',
          light: '#ff867f',
          dark: '#c50e29',
        },
        success: {
          DEFAULT: '#4caf50',
          light: '#80e27e',
          dark: '#087f23',
        },
        warning: {
          DEFAULT: '#ff9800',
          light: '#ffc947',
          dark: '#c66900',
        },
        error: {
          DEFAULT: '#f44336',
          light: '#ff7961',
          dark: '#ba000d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
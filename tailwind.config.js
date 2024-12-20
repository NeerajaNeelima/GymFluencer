/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      animation: {
        'border-pulse': 'border-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'border-pulse': {
          '0%, 100%': {
            borderWidth: '2px', 
          },
          '50%': {
            borderWidth: '8px',
          },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


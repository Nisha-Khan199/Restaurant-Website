/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    animation: {
      'fade-in-down': 'fadeInDown 1s ease-out forwards',  // Define the custom animation
    },
    keyframes: {
      fadeInDown: {  // Define the keyframes for the animation
        '0%': { 
          opacity: '0', 
          transform: 'translateY(-50px)' 
        },
        '100%': { 
          opacity: '1', 
          transform: 'translateY(0)' 
        },
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /grid-cols-./,
    }
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width'
      },
    },
    fontFamily: {
      'open-sans': ['Open Sans', 'sans-serif'],
      pacifico: ['Pacifico', 'cursive']
    },
  },
  plugins: [],
}


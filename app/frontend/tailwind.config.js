/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'delete': "url('/src/images/delete.png')",
        'edit': "url('/src/images/edit.png')",
        'save': "url('/src/images/save.png')",
        'close': "url('/src/images/closeIcon.png')"
      }
    },
  },
  variants: {
    extend: {
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus']
    },
    },
  plugins: [],
}

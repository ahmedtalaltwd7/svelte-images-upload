/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {}
  },
  plugins: [],
   plugins: [require("daisyui")],
};
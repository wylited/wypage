module.exports = {
  content: ["./src/**/*.{html,js,svelte}"],  theme: {
  extend: {  fontFamily: {
    'Montserrat': ["'Montserrat'", 'sans-serif'],
    'Oswald': ["'Oswald'" ,'sans-serif'],
  },},
},
plugins: [require("daisyui")],
}
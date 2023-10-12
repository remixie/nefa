module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      sans: ['Orbitron', 'sans-serif'],
      serif: ['Poppins', 'sans-serif']
    },
    extend: {},
  },
  plugins: ['@tailwindcss/forms', '@tailwindcss/aspect-ratio'],
}

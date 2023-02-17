/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  theme: {},
    content: ["./src/**/*.{html,ts}"],
    // These options are passed through directly to PurgeCSS
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
};

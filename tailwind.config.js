/** @type {import('tailwindcss').Config} */
console.log("✅ DaisyUI plugin loaded");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],  // you can customize or remove this line
    darkTheme: "dark",          // set default dark theme
  },
};
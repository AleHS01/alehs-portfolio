/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          inverted: "--color-text-inverted",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          "button-accent": "var(--button-accent)",
          "button-accent-hover": "var(--button-accent-hover)",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#1462a0",
        circus: "#cb3032",
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};

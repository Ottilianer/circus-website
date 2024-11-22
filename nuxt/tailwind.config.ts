import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        primary: "#1462a0",
        circus: "#cb3032",
      },
    },
  },
  content: [],
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;

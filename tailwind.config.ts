import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fcf6f0",
          100: "#faeddb",
          200: "#f5dbb6",
          300: "#f0c791",
          400: "#eba46c",
          500: "#e68147",
          600: "#ce622e",
          700: "#a54b24",
          800: "#7c371c",
          900: "#562615",
          950: "#36170d",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

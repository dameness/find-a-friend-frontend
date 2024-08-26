/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          50: "#F75F64",
          100: "#F15156",
          200: "#E44449",
        },
        yellow: "#F4D35E",
        orange: "#F27006",
        green: "#3CDC8C",
        blue: {
          100: "#114A80",
          200: "#0D3B66",
        },
        input: {
          100: "#F5F8FA",
          200: "#D3E2E5",
        },
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};

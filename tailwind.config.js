/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        jumiayellow: "#FF9900",
        jumiayellowlight: "#FF9900bc",
      },
      gridTemplateColumns: {
        slider: "15% 67% 15%",
        products: "repeat(20, 15rem)"
      }
    },
  },
  plugins: [],
};

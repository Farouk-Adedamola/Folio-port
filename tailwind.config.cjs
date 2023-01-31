/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        fullscreen: "1728px",
      },
      colors: {
        // primary: "#613583",
        primary: "#a51d2d",
        "fade-red": "rgba(165, 29, 45, 1)",
        blue: "#1a5fb4",
        background: "#e0e0e0",
        green: "#26a269",
        yellow: "#e5a50a",
        purple: "#613583",
        gray: "#636363",
        darkblack: "#1d1027",
      },
      fontFamily: {
        Poppins: "Poppins, sans-serif",
      },
    },
  },
  plugins: [],
};

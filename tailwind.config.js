/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: false,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mintGreen: "#00DBDB",
        Yellow: "#F6BD60",
        LilacWhite: "#EAE8FF",
        Black: "#001313",
        deepGreen: "#334242",
        White: "#FAFAFA",
      },
    },
  },
  plugins: [
    // other plugins...
    function ({ addUtilities }) {
      addUtilities({
        ".object-top-left": {
          "object-position": "top left",
        },
        ".object-top-right": {
          "object-position": "top right",
        },
        ".object-bottom-left": {
          "object-position": "bottom left",
        },
        ".object-bottom-right": {
          "object-position": "bottom right",
        },
      });
    },
  ],
};

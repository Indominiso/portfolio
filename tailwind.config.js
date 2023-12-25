/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        metroregular: ["Metro-Sans-Regular"],
        metrobold: ["Metro-Sans-Bold"],
      },
    },
  },
  variants: {
    extend: {
      translate: ["hover", "focus", "active"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
    require("tailwind-scrollbar-hide"),
  ],
};

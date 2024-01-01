/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#1f1d2b",
        white: "#fff",
        "gray-6": "#f2f2f2",
        "gray-3": "#828282",
        lightgray: "#d7d7d7",
        gainsboro: "#e2e2e2",
        silver: "#bcbcbc",
        darkorchid: "#9b51e0",
        "gray-5": "#e0e0e0",
        deepskyblue: "#18b2de",
        fuchsia: "#fb37ff",
      },
      spacing: {},
      fontFamily: {
        "heading-text-h2-poppins-48-medium": "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      "5xl": "24px",
      "29xl": "48px",
      "21xl": "40px",
      base: "16px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkorange: "#ff8a00",
        white: "#fff",
        black: "#000",
        slategray: "#6b7280",
        dimgray: "#4d5761",
        gainsboro: "#e5e7eb",
        gray: {
          "100": "#1a1a1a",
          "200": "#090a11",
          "300": "rgba(255, 255, 255, 0)",
        },
        lightgray: {
          "100": "#d2d6db",
          "200": "#d1d5db",
        },
        whitesmoke: "#efefef",
        darkgray: "#9ca3af",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "space-grotesk": "'Space Grotesk'",
      },
      borderRadius: {
        "11xl": "30px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      sm: "14px",
      lg: "18px",
      "5xl": "24px",
      "13xl": "32px",
      "53xl": "72px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

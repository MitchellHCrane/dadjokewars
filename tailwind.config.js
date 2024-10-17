/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // orange
        cta: "#e76f51",
        // light orange
        lightCta: "#f4a360",
        // blue green
        accent: "#2a9d8f",
        // dark blue
        dark: "#264653",
      },
    },
  },
  plugins: [],
};

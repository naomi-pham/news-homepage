const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "hsl(var(--color-primary) / 1)",
      secondary: "hsl(var(--color-secondary) / 1)",
      light: "hsl(var(--color-light) / 1)",
      accent_light: "hsl(var(--color-accent-light) / 1)",
      dark: "hsl(var(--color-dark) / 1)",
      accent_dark: "hsl(var(--color-accent-dark) / 1)",
    },
  },
  plugins: [],
};

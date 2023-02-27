/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#6ee7b7",
          default: "#10b981",
          dark: "#047857",
        },
        secondary: {
          light: "#f9a8d4",
          default: "#ec4899",
          dark: "#be185d",
        },
        success: {
          light: "#86efac",
          default: "#22c55e",
          dark: "#15803d",
        },
        danger: {
          light: "#fca5a5",
          default: "#ef4444",
          dark: "#b91c1c",
        },
        warning: {
          light: "#fde047",
          default: "#eab308",
          dark: "#a16207",
        },
        normal: {
          light: "#f8fafc",
          default: "#e2e8f0",
          dark: "#94a3b8",
        },
      },
    },
  },
  plugins: [],
};

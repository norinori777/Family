/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#51bcff",
          default: "#1ea7fd",
          dark: "#1a93dd",
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
        lightPrimary: {
          light: "#d9eefc",
          default: "#c7e6f9",
          dark: "#b0dffc",
        },
        lightSecondary: {
          light: "#fff2f9",
          default: "#fce3f0",
          dark: "#fcd9eb",
        },
        lightSuccess: {
          light: "#d9fce5",
          default: "c5f7d7",
          dark: "#b5e2c6",
        },
        lightDanger: {
          light: "#f9e8e8",
          default: "#f9e0e0",
          dark: "#fce0e0",
        },
        lightWarning: {
          light: "#fcf8e3",
          default: "#fcf5d4",
          dark: "#fff7d1",
        },
        lightNormal: {
          light: "#eff5fc",
          default: "#e5effc",
          dark: "#deebfc",
        },
      },
    },
  },
  plugins: [],
};

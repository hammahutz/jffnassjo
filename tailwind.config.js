/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      pop: "#CB9542",
      brown: "#5E3914",
      lightBrown: "#7F6b3699",
      beige: "#E9E2D0",
      gray: "E0E0E0",
      grayTransparent: "#E5E4E1",
    },
    extend: {
      padding: {
        smallScreen: "2rem",
        largeScreen: "10rem",
        extraLargeScreen: "20rem",
      },
      fontFamily: {
        serif: ["Roboto Serif", "serif"],
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "base-content": "#5E3914",
          ".gradient": {
            "background-image": "linear-gradient(to bottom left, #CB9542, #E5D9B6)",
          },
          ".footer-background": {
            "background-color": "#dddddd",
          },
          ".text-primary": {
            color: "#CB9542",
            "font-weight": "bold",
          },
          ".btn": {
            "background-color": "#CB9542",
            color: "white",
            border: "none",
            "max-width": "8rem",
            "box-shadow": "4px 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.2s, box-shadow 0.2s, transform 0.2s",
          },
          "h1": { "font-size": "2.5rem" },
          "h2": { "font-size": "1.5rem" },
          "h3": { "font-size": "1.2rem" },
          ".btn:hover": {
            "background-color": "#8B4513",
            "box-shadow": "6px 6px 12px rgba(0, 0, 0, 0.2)",
            transform: "scale(1.05)",
          },
        },
      },
      {
        coffee: {
          ...require("daisyui/src/theming/themes")["coffee"],
          ".gradient": {
            "background-image": "linear-gradient(to bottom left, #4B3D61, #2A2D3B)",
          },
          ".footer-background": {
            "background-color": "#2A2D3B",
          },
          ".card-text": {
            "color": "#5E3914"
          }
        },
      },
    ],
  },
}

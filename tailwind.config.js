/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        pop: "#CB9542",
        brown: "#5E3914",
        beige: "#E9E2D0",
        gray: "E0E0E0",
        grayTransparent: "#E5E4E1",
        fontFamily: {
          serif: ["Roboto Serif", "serif"],
          sans: ["Roboto", "sans-serif"],
        },
        // padding: {
        //   smallScreen: "2rem",
        //   largeScreen: "10rem",
        //   extraLargeScreen: "20rem",
        // },
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          ".gradient": {
            "background-image": "linear-gradient(to bottom left, #CB9542, #E5D9B6)",
          },
          ".btn": {
            "background-color": "#CB9542",
            color: "white",
            border: "none",
            "max-width": "8rem",
            "box-shadow": "4px 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.2s, box-shadow 0.2s, transform 0.2s",
          },

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
        },
      },
    ],
  },
};

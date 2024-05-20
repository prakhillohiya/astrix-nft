/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

const fontFamily = defaultTheme.fontFamily;
fontFamily["sans"] = ["Afacad", "Roboto", "system-ui"];

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: fontFamily,
    extend: {
      animation: {
        "infinite-scroll-up": "infinite-scroll-up 30s linear infinite",
        "scroll-items":
          "scroll-items 8s cubic-bezier(0.37, 0, 0.63, 1) infinite",
      },
      keyframes: {
        "infinite-scroll-up": {
          "0%": { transform: "translateX(100)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "scroll-items": {
          "0%, 12.5%": { transform: "translateX(50%)" },
          "25%, 37.5%": { transform: "translateX(-50%)" },
          "50%, 62.5%": { transform: "translateX(-150%)" },
          "75%, 87.5%": { transform: "translateX(-250%)" },
          "100%": { transform: "translateX(50%)" },
        },
      },
    },
    screens: {
      'mobile': '1024px',
      // => @media (min-width: 640px) { ... }

      // 'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      // 'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};

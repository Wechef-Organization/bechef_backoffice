import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lightp: ["Montserrat-Light"],
        regularp: ["Montserrat-Regular"],
        mediump: ["Montserrat-Medium"],
        semiboldp: ["Montserrat-SemiBold"],
        boldp: ["Montserrat-Bold"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",

        black: colors.black,
        white: colors.white,

        green0: "#3cb844",
        green1: "#1e9422",
        green2: "#006f00",
        green3: "#0D894F",
        green4: "#00B386",
        green5: "#D7FFF5",
        green6: "#E7F4EE",

        red1: "#ff3b25",
        red2: "#d31e13",
        red3: "#a60000",
        red4: "#FFE1E1",
        red5: "#EA0000",

        blue1: "#026ae3",
        blue2: "#014cbd",
        blue3: "#002e97",

        yellow1: "#f3b70d",
        yellow2: "#f9db49",
        yellow3: "#ffff84",

        primarycolor: "#3BB6FC",
        secondarycolor: "#EAF7FF",
        tertiarycolor: "#FFF8EE",
        quaternarycolor: "#AFA763",

        grey0: "#D7D7D7",
        grey1: "#D8D8D8",
        grey2: "#000000A6",
        grey3: "#A0A0A0",
        grey4: "#3C3C43B8",
        grey5: "#787486",
        grey6: "#8F959E",
        grey7: "#6A6A6A",
        grey8: "#F9F9FC",
      },
    },
  },
  plugins: [],
} satisfies Config;

const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: {
          transparent: "#fcfcfc00",
          DEFAULT: "#fcfcfc",
        },
        primary: {
          DEFAULT: "#1F938F",
          100: "#E9F6F5",
          200: "#BDE3E2",
          300: "#91D1CF",
          400: "#64BFBC",
          500: "#38ACA9",
          600: "#22A39F",
          700: "#1B827F",
          800: "#14625F",
          900: "#115250",
        },
        secondary: {
          DEFAULT: "#464660",
          100: "#EDEDEF",
          200: "#C8C8CF",
          300: "#A3A3B0",
          400: "#7E7E90",
          500: "#595970",
          600: "#3F3F56",
          700: "#313143",
          800: "#232330",
          900: "#15151D",
        },
        alternative: {
          DEFAULT: "#FD841F",
          100: "#FFF3E9",
          200: "#FFE6D2",
          300: "#FEDABC",
          400: "#FEC28F",
          500: "#FEB579",
          600: "#FEA962",
          700: "#FD9D4C",
          800: "#FD9035",
          900: "#E4771C",
        },
        extra: {
          DEFAULT: "#C5A47E",
          100: "#F9F6F2",
          200: "#EEE4D8",
          300: "#E2D2BF",
          400: "#D6BFA5",
          500: "#CBAD8B",
          600: "#B19471",
          700: "#8A7358",
          800: "#63523F",
          900: "#3B3126",
        },
        black: {
          DEFAULT: "#222222",
          100: "#ECECEC",
          200: "#D9D9D9",
          300: "#B4B3B3",
          400: "#A1A1A1",
          500: "#7B7B7B",
          600: "#696868",
          700: "#565555",
          800: "#434242",
          900: "#363535",
        },
        red: {
          DEFAULT: "#CF0A0A",
          100: "#fae7e7",
          200: "#f1b6b6",
          300: "#e78585",
          400: "#dd5454",
          500: "#d42323",
          600: "#a60808",
          700: "#7c0606",
          800: "#530404",
          900: "#290202",
        },
        green: {
          DEFAULT: "#5BB318",
          100: "#eff7e8",
          200: "#cee8ba",
          300: "#add98c",
          400: "#8cca5d",
          500: "#6bbb2f",
          600: "#498f13",
          700: "#407d11",
          800: "#2e5a0c",
          900: "#1b3607",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ['"Libre Caslon Text"', "ui-serif", "Georgia"],
        body: ["Inter", '"Open Sans"'],
      },
      width: {
        arrowCTA: "calc(50% - 200px)",
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: 0, transform: "translateX(200px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        enterFromLeft: {
          from: { opacity: 0, transform: "translateX(-200px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        exitToRight: {
          from: { opacity: 1, transform: "translateX(0)" },
          to: { opacity: 0, transform: "translateX(200px)" },
        },
        exitToLeft: {
          from: { opacity: 1, transform: "translateX(0)" },
          to: { opacity: 0, transform: "translateX(-200px)" },
        },
        scaleIn: {
          from: { opacity: 0, transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
          to: { opacity: 0, transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
      backgroundImage: {
        "header-graditent":
          "radial-gradient(100% 100% at 0% 0%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%),radial-gradient(100% 100% at 100% 0%,var(--tw-gradient-stops))",
      },
      animation: {
        scaleIn: "scaleIn 200ms ease",
        scaleOut: "scaleOut 200ms ease",
        fadeIn: "fadeIn 200ms ease",
        fadeOut: "fadeOut 200ms ease",
        enterFromLeft: "enterFromLeft 250ms ease",
        enterFromRight: "enterFromRight 250ms ease",
        exitToLeft: "exitToLeft 250ms ease",
        exitToRight: "exitToRight 250ms ease",
      },
    },
  },
  // plugins: [
  //   plugin(({ matchUtilities }) => {
  //     matchUtilities({
  //       perspective: (value) => ({
  //         perspective: value,
  //       }),
  //     });
  //   }),
  // ],
};

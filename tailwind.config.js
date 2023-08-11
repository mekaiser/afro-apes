/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero_bg:
          "linear-gradient(90deg, #171627  0%, #0B0D43 65%, #0300339E 100%)",
        hero_bg_2:
          "linear-gradient(180deg, #171627  0%, #0B0D43 70%, #0300339E 100%)",
        hero_left_starting_title:
          "linear-gradient(107deg, #FF7991  0%, #FC57FF 50%, #4E55FF 100%)",
        hero_right_title:
          "linear-gradient(180deg, #B2AEFF  0%, #FFF3FAEB 100%)",
      },
      boxShadow: {
        pink: "0px 10px 25px 0px #EF3DFF66",
        purple: "0px 10px 25px 0px #635BFF66",
        green: "0px 10px 25px 0px #6AFFF666",
        gray: "0px 4px 39px 0px #0000001C",
        white_purple: "0px 3.14px 27px 0px #FFFFFFB8",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        gesrics: ["var(--font-gesrics-font)"],
        jost: ["Jost", "sans-serif"],
      },
      keyframes: {
        blink_1: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        float_y: {
          "0%": { transform: "translateY(-20px)" },
          "50%": { transform: "translateY(-2px)" },
          "100%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        blink_1: "blink_1 2s linear infinite",
        blink_2: "blink_1 1.5s linear infinite",
        blink_3: "blink_1 1s linear infinite",
        blink_4: "blink_1 2.5s linear infinite",
        float_y: "float_y 3s alternate infinite",
      },
      backgroundSize: {
        size_200: "200% 200%",
      },
      backgroundPosition: {
        pos_0: "0% 0%",
        pos_100: "100% 100%",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        hero_bg:
          "linear-gradient(90deg, #171627  0%, #0B0D43 70%, #0300339E 100%)",
        hero_left_starting_title:
          "linear-gradient(107deg, #FF7991  0%, #FC57FF 50%, #4E55FF 100%)",
        hero_right_title: "linear-gradient(180deg, #B2AEFF  0%, #FFF3FAEB 100%)"
      },
      boxShadow: {
        purple: "0px 10px 25px 0px #635BFF66",
        gray: "0px 4px 39px 0px #0000001C",
        white_purple: "0px 3.14px 27px 0px #FFFFFFB8"
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        gesrics: ["var(--font-gesrics-font)"],
      },
    },
  },
  plugins: [],
};

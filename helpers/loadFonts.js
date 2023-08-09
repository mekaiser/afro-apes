import localFont from "next/font/local";

const gesricsFont = localFont({
  src: [
    {
      path: "../public/fonts/gesrics-futuristic-font/Gesrics.woff2",
      style: "normal",
    },
  ],
  variable: "--font-gesrics-font",
});

export default gesricsFont;
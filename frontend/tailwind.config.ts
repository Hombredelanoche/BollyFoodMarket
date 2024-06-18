import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primaryColor: "#70a377",
        primaryLight: "#C4CCC1",
        SecondaryColor: "#fbf4e7",
        brownColor: "#A58B5A",
        blueColor: "#2F507A",
        greyColor: "#E6EFFA",
      },
    },
  },
  plugins: [],
};
export default config;

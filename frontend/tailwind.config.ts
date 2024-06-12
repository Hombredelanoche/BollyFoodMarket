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
        "color-primary": "#70a377",
        "color-secondary": "#fbf4e7",
        "color-brown": "#A58B5A",
        "color-break": "#2F507A",
        "color-grey": "#E6EFFA",
      },
    },
  },
  plugins: [],
};
export default config;

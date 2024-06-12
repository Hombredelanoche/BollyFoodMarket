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
        "color-yellow": "#F2DDA4",
        "color-break": "#06038D",
      },
    },
  },
  plugins: [],
};
export default config;

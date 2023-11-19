import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greylight: "#c3c3c3",
        greybody: "#F5F5F5",
        normalblue: "#1A8FE6",
        boxgrey: "#D8D8D8"
      },
    },
  },
  plugins: [],
};
export default config;

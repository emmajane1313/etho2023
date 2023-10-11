import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        offBlack: "#1111313",
        naran: "#FF9147",
        amar: "#FFD86D",
        azul: "#A9E7FF",
        offWhite: "#EFEFEF",
        viol: "#D07BF7",
        quemo: "#363636",
        zana: "#FBDB86",
        vela: "#71D526",
        mar: "#1A08F1",
        suelo: "#0091FF"
      },
      fontFamily: {
        dog: "Dogica",
        vcr: "Vcr",
        gam: "Gamer",
        net: "Network",
      },
      fontSize: {
        xxs: "0.6rem",
      },
    },
  },
  plugins: [],
};
export default config;

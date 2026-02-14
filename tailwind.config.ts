import type { Config } from "tailwindcss";
const svgToDataUri = require("mini-svg-data-uri");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",        // App folder
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",      // Pages folder (agar ho)
        "./components/**/*.{js,ts,jsx,tsx,mdx}", // 👈 Ye line SABSE IMPORTANT hai
        "./lib/**/*.{js,ts,jsx,tsx,mdx}",        // Lib folder
    ],
    darkMode: "class",
    theme: {
    extend: {
      // 1. Custom Colors (Jo aapne mange) 👇
      colors: {
        black: '#000212', // Deep space black (Ab bg-black ye color ban jayega)
        neon: '#00f0ff',  // Cyberpunk cyan (Naya color)
      },

      // 2. Fonts (Jo humne pehle dale the)
      fontFamily: {
        sans: ["var(--font-inter)"],
        orbitron: ["var(--font-orbitron)"], 
      },

      // 3. Animations (Spotlight wali)
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
    plugins: [
        function ({ matchUtilities, theme }: any) {
            matchUtilities(
                {
                    "bg-grid": (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`,
                    }),
                },
                { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
            );
        },
    ],
};
export default config;
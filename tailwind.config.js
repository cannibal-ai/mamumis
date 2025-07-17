/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        prompt: ["Prompt", "sans-serif"],
        noto: ["Noto Sans Thai", "sans-serif"],
      },
      keyframes: {
        softBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        softBounce: "softBounce 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

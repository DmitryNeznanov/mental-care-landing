import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "24px",
        md: "67px",
        "2xl": "140px",
      },
    },
    extend: {
      colors: {
        white: "var(--white)",
        black: "var(--black)",
        green: "var(--green)",
        gray: "var(--gray)",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        inter: "var(--font-inter)",
        roboto: "var(--font-roboto)",
      },
      boxShadow: {
        xl: "10.37px 10.37px 22.69px 0px rgba(0,0,0,9%)",
      },
    },
  },
  plugins: [],
} satisfies Config

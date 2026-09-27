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
        primary: {
          DEFAULT: "#0F3CD7",
          50: "#E6ECFA",
          100: "#DCE2FA",
          200: "#B5C3F2",
          300: "#8aa4ec",
          400: "#5c7fe0",
          500: "#0F3CD7",
          600: "#0F3CD7",
          700: "#0D37C1",
          800: "#0C30AB",
          900: "#0C2DA1",
          950: "#05144B",
        },
        brandOrange: {
          DEFAULT: "#FF9E21",
          50: "#FFF5E9",
          100: "#FFEFDF",
          200: "#FFE1BB",
          500: "#FF9E21",
          600: "#E58E1D",
          700: "#CC7E1A",
          800: "#C07718",
          900: "#996013",
          950: "#59370A",
        },
        brandGreen: {
          DEFAULT: "#4BC40F",
          50: "#EDF8E7",
          100: "#E4F6DC",
          200: "#C7EDB4",
          500: "#4BC40F",
          600: "#44B00D",
          700: "#3B9D0C",
          800: "#38930A",
          900: "#2C7509",
          950: "#1B4505",
        },
        brandRed: {
          DEFAULT: "#F62441",
          50: "#FEEAEC",
          100: "#FEDEE3",
          200: "#FDBBC5",
          500: "#F62441",
          600: "#DD213A",
          700: "#C51D34",
          800: "#B91C31",
          900: "#951627",
          950: "#560D16",
        },
        brandCyan: {
          DEFAULT: "#6AD2EF",
          50: "#F0FAFC",
          100: "#E9F8FD",
          200: "#D1F2FB",
          500: "#6AD2EF",
          600: "#5EBCD6",
          700: "#55A7BF",
          800: "#519DB4",
          900: "#407D8F",
          950: "#254955",
        },
        brandGrey: {
          DEFAULT: "#1E1E1E",
          50: "#E9E9E9",
          100: "#DDDDDD",
          200: "#B9B9B9",
          300: "#8A8A8A",
          400: "#545454",
          500: "#1E1E1E",
          600: "#1B1B1B",
          700: "#181818",
          800: "#171717",
          900: "#121212",
          950: "#0B0B0B",
        },
        brandNavy: {
          DEFAULT: "#0A1F4A",
          50: "#E8E9ED",
          100: "#DADDE4",
          200: "#B3B9C7",
          500: "#0A1F4A",
          600: "#0A1C44",
          700: "#09193B",
          800: "#081738",
          900: "#07132D",
          950: "#040B1B",
        },
      },

      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },

      fontSize: {
        // Bold (700)
        "b-56": ["56px", { lineHeight: "64px", fontWeight: "700" }],
        "b-48": ["48px", { lineHeight: "56px", fontWeight: "700" }],
        "b-40": ["40px", { lineHeight: "48px", fontWeight: "700" }],
        "b-32": ["32px", { lineHeight: "48px", fontWeight: "700" }],
        "b-24": ["24px", { lineHeight: "36px", fontWeight: "700" }],
        "b-20": ["20px", { lineHeight: "30px", fontWeight: "700" }],
        "b-18": ["18px", { lineHeight: "27px", fontWeight: "700" }],
        "b-16": ["16px", { lineHeight: "24px", fontWeight: "700" }],
        "b-14": ["14px", { lineHeight: "21px", fontWeight: "700" }],

        // Regular (400)
        "r-24": ["24px", { lineHeight: "36px", fontWeight: "400" }],
        "r-18": ["18px", { lineHeight: "27px", fontWeight: "400" }],
        "r-16": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "r-14": ["14px", { lineHeight: "21px", fontWeight: "400" }],
        "r-12": ["12px", { lineHeight: "18px", fontWeight: "400" }],
        "r-10": ["10px", { lineHeight: "15px", fontWeight: "400" }],

        // Medium (500)
        "m-24": ["24px", { lineHeight: "36px", fontWeight: "500" }],
        "m-18": ["18px", { lineHeight: "27px", fontWeight: "500" }],
        "m-16": ["16px", { lineHeight: "24px", fontWeight: "500" }],
        "m-14": ["14px", { lineHeight: "21px", fontWeight: "500" }],
        "m-12": ["12px", { lineHeight: "18px", fontWeight: "500" }],
        "m-10": ["10px", { lineHeight: "15px", fontWeight: "500" }],
      },

      borderRadius: {
        btn: "12px",
        chip: "16px",
        card: "16px",
        "card-sm": "12px",
        modal: "16px",
      },

      boxShadow: {
        card: "-1px 4px 10px 0 rgba(30, 30, 30, 0.08)",
        "card-hover": "-1px 6px 16px 0 rgba(30, 30, 30, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
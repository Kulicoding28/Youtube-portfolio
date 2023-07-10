/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dribble: "#ea4c89",
        instagram: "#e4405f",
        twitter: "#1da1f2",
        linkedin: "#0a66c2",
      },
    },
  },
  plugins: [],
};

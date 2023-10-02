/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "guide-font": "2rem",
      },
      colors: {
        "guide-purple": "hsl(259, 100%, 65%)",
        "guide-light-red": "hsl(0, 100%, 67%)",
        "guide-white": "hsl(0, 0%, 100%)",
        "guide-off-white": "hsl(0, 0%, 94%)",
        "guide-light-grey": "hsl(0, 0%, 86%)",
        "guide-smokey-grey": "hsl(0, 1%, 44%)",
        "guide-off-black": "hsl(0, 0%, 8%)",
      },

      fontFamily: {
        poppins: ["Poppins"],
      },
      fontWeight: {
        regular: 400,
        bold: 700,
        "extra-bold": 800,
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#441C53",
        secondary: "#7B5EA2",
      },
      fontFamily: {
        inter: "Inter",
        roboto: "Roboto",
        mulish: "Mulish"
      },
      backgroundImage: {
        'banner': "url('/banner-sexshop.png')"
      },
    },
  },
  plugins: [],
};

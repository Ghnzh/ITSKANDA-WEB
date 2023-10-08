/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      viga: ["Viga"],
      sf: ["SF Pro Display"],
      inter: ["Inter"],
      acumin: ["Acumin Pro"],
      founder: ["FoundersGrotesk"]
    },
    extend: {
      backgroundImage: {
        login: "url(/login-img.jpg)",
      },
      colors: {
        ijo: "#2F4E37",
        cream: "#FCE8BD",
        kuning: "#ffd550",
        nav: "#faf3e6",
        abu: "#dfdfdf",
        primary: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" },
      },
    },
  },
  plugins: [],
}

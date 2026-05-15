/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#2563FF",
        secondary: "#0F172A",

        success: "#16C784",
        danger: "#EA3943",

        congoBlue: "#2563EB",
        congoRed: "#EF4444",
        congoYellow: "#FACC15",

        softBg: "#F5F7FB",
        cardBg: "#FFFFFF",
      },

      boxShadow: {
        premium: "0 10px 40px rgba(0,0,0,0.08)",
      },

      borderRadius: {
        premium: "32px",
      },
    },
  },

  plugins: [],
}
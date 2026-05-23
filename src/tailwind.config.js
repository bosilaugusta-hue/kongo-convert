/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      // 1. On garde tes superbes couleurs d'origine
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

      // 2. On garde tes ombres premium
      boxShadow: {
        premium: "0 10px 40px rgba(0,0,0,0.08)",
      },

      // 3. On garde tes arrondis premium
      borderRadius: {
        premium: "32px",
      },

      // 4. ON RAJOUTE LES ANIMATIONS SANS RIEN CASSER
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },

  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["Syne", "system-ui", "sans-serif"],
      },
      colors: {
        cmu: "#C41230",
        maroon: "#990000",
        cream: "#F8F6F3",
        ink: "#2C3539",
        line: "#E5E7EB",
        soft: "#F4F4F6",
      },
      boxShadow: {
        lift: "0 20px 50px rgba(44, 53, 57, 0.12)",
        card: "0 12px 40px rgba(44, 53, 57, 0.1)",
      },
      backgroundImage: {
        "hero-stripes":
          "repeating-linear-gradient(-32deg, #ececef 0 12px, #f8f8fa 12px 24px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(-4deg)" },
          "50%": { transform: "translateY(-8px) rotate(-4deg)" },
        },
        "float-alt": {
          "0%, 100%": { transform: "translateY(0) rotate(3deg)" },
          "50%": { transform: "translateY(-6px) rotate(3deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.65s ease-out both",
        "float-slow": "float 6s ease-in-out infinite",
        "float-slow-alt": "float-alt 5.5s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
      },
    },
  },
  plugins: [],
};

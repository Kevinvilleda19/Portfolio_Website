module.exports = {
  darkMode: ["class"], // Enable dark mode using the "class" strategy
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all source files
    "./public/**/*.html", // Include public HTML files
    "./components/**/*.{js,jsx,ts,tsx}", // Include React components
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px", // Max width for 2XL screens
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#9b87f5",
          dark: "#6E59A5",
          light: "#D4C2FC",
        },
        secondary: {
          DEFAULT: "#1A1F2C",
          light: "#F1F0FB",
          dark: "#0E131B",
        },
        gray: {
          100: "#f3f4f6",
          300: "#d1d5db",
          600: "#4b5563",
          900: "#111827",
        },
        accent: "#FF6F61", // Add an optional accent color
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        bounceIn: {
          "0%, 20%, 50%, 80%, 100%": {
            transform: "translateY(0)",
          },
          "40%": {
            transform: "translateY(-30px)",
          },
          "60%": {
            transform: "translateY(-15px)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        fadeIn: "fadeIn 1s ease-in-out",
        bounceIn: "bounceIn 1.5s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

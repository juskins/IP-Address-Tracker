/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Custom colors
        marineBlue: "hsl(213, 96%, 18%)",
        purplishBlue: "hsl(243, 100%, 62%)",
        pastelBlue: "hsl(228, 100%, 84%)",
        lightBlue: "hsl(206, 94%, 87%)",
        strawberryRed: "hsl(354, 84%, 57%)",

        // Neutral colors
        coolGray: "hsl(231, 11%, 63%)",
        lightGray: "hsl(229, 24%, 87%)",
        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
        mywhite: "hsl(0, 0%, 100%)",
      },
      fontSize: {
        paragraph: "16px",
      },
      backgroundImage: {
        "desktop-bg": "url('/src/assets/images/pattern-bg-desktop.png')",
        "mobile-svg": "url('/src/assets/images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};


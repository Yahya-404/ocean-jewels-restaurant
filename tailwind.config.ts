import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], // يعطل تأثير الوضع الداكن بناءً على إعدادات النظام
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Poppins", "sans-serif"],
        custom: ["Playfair Display", "serif"],
      },

      backgroundImage: {
        "navbar-btn": "linear-gradient(145deg, #dcdcdc, #ffffff)",
        "text-shadow":
          "linear-gradient(0deg, rgb(13 13 37 / 8%), rgb(13 13 37 / 8%))",
        "menu-card": "linear-gradient(145deg, #ececec, #ffffff)",
        "cart-btn": "linear-gradient(145deg, #ffc954, #ffbc00)",
        "cart-btn-hover": "linear-gradient(145deg, #e3a92b, #ffc933)",
        "menu-tap": "linear-gradient(145deg, #ececec, #ffffff)",
        "filter-active": "linear-gradient(145deg, #e3a92b, #ffc933)",
        "chef-card": "linear-gradient(145deg, #ececec, #ffffff)",
        "social-icons": "linear-gradient(145deg, #e6e6e6, #ffffff)",
        testimonials: "linear-gradient(145deg, #ececec, #ffffff",
        "swiper-pagination": "linear-gradient(145deg, #ececec, #ffffff)",
        blogs: "linear-gradient(145deg, #ececec, #fdfdfd)",
        "newsletter-form": "linear-gradient(145deg, #e4e4e4, #f9f9f9)",
        "newsletter-btn": "linear-gradient(145deg, #e26a2c, #ff8243)",
        "newsletter-btn-hover": "linear-gradient(145deg, #0c0c21, #0e0e28)",
      },

      colors: {
        "main-bg": "var(--background)",
        background: "var(--background)",
        "primary-100": "#0d0d25",
        "primary-200": "#212529",
        accent: "#ff8243",
        primary: "#00c6ff",
        dark: "#0f172a",
        light: "#f8f9fa",
      },

      boxShadow: {
        "inset-navbar-links":
          "inset 8px 8px 12px #e2e2e2, inset -8px -8px 12px #ffffff",
        "inset-navbar-btn":
          "inset 6px 6px 7px #dadada, inset -6px -6px 7px #ffffff",
        "inset-primary-btn":
          "inset 9px 9px 12px #cccccc, inset -9px -9px 12px #ffffff",
        "inset-cart-btn":
          "inset 4px 4px 8px #d6a029, inset -4px -4px 8px #ffd837",
        "inset-blog-date":
          "inset 5px 5px 10px #e2e2e2, inset -5px -5px 10px #e8e8e8",
        "inset-swiper-btn":
          "inset 5px 5px 20px #d4d4d4, inset -5px -5px 20px #ffffff",
        navbar: "0px 10px 55px #d4d4d4",
        "navbar-btn": "20px 20px 60px #cfcfd0, -20px -20px 60px #ffffff",
        "primary-btn": "9px 9px 12px #b2b2b3, -9px -9px 12px #ffffff",
        "hero-banner-img": "0 0px 20px rgba(36, 39, 37, 0.3)",
        "sec-name": "9px 9px 12px #e4e4e4, -9px -9px 12px #ffffff",
        social: "4px 4px 8px #d0d0d0, -4px -4px 8px #ffffff",
        "newsletter-btn": "4px 4px 8px #9e9e9e, -4px -4px 8px #ffffff",
        "blog-sec": "30px 30px 50px #dcdcdc, -30px -30px 50px #ffffff",
        testimonials: "28px 28px 45px #e6e6e6, -28px -28px 45px #ffffff",
        card: "28px 28px 45px #d4d4d4, -28px -28px 45px #ffffff",
        filter: "28px 28px 55px #d4d4d4, -28px -28px 55px #ffffff",
        "play-btn": "inset 9px 9px 12px #cccccc, inset -9px -9px 12px #ffffff",
        "circle-btn": "9px 9px 12px #b2b2b3, -9px -9px 12px #ffffff",
        "chef-card": "28px 28px 45px #e6e6e6, -28px -28px 45px #ffffff",

        "swiper-btn": "-20px 20px 60px #d4d4d4, 20px -20px 60px #ffffff",
        "swiper-pagination": "25px 28px 55px #d4d4d4, -28px -28px 55px #ffffff",
      },

      animation: {
        jelly: "jelly 4.5s linear infinite alternate",
      },
      keyframes: {
        jelly: {
          "0%": {
            borderRadius: "48% 52% 57% 43% / 34% 44% 56% 66%",
          },
          "25%": {
            borderRadius: "62% 38% 64% 36% / 34% 55% 45% 66%",
          },
          "50%": {
            borderRadius: "43% 57% 51% 49% / 33% 42% 58% 67%",
          },
          "100%": {
            borderRadius: "40% 60% 43% 57% / 52% 32% 68% 48%",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

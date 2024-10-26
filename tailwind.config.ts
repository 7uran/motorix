import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/featured/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        main: '#F56E21',
      },
      keyframes: {
        'road-move': {
          '0%': { transform: 'translateX(-140%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'swiper-scale': {
          '0%': { transform: 'scale(0.85)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'slideIn': {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '30%': { transform: 'translateX(100%)', opacity: '0' },
          '60%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
      },
      animation: {
        'road-move': 'road-move 2s linear infinite',
        'swiper-scale': 'swiper-scale 0.7s ease-in',
        'slideIn': 'slideIn 0.4s ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;

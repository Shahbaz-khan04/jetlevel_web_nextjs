import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('https://jetlevel.com/wp-content/uploads/2024/02/Private-jet-interior.png')",
      },
      fontFamily: {
        playfair: ['var(--font-playfair-display)', 'serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
        libre: ['var(--font-libre-baskerville)', 'serif'],
      },
      
    },
  },
  plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        headerGray: 'rgb(27,27,27)',
        headerSubmenu:'#212121',
        primary:'#1B1B1B',
        secondary:'#cbc5a1',
        lightYellow:'#cebf5f'
      }
    },
  },
  plugins: [],
};

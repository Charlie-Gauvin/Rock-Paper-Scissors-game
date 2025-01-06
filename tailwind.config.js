/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
        barlow: ['Barlow Semi Condensed', 'sans-serif'],
      },},
      backgroundImage: {
        'radial-game': 'radial-gradient(circle, hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
      },
      colors: {
        'Header-outline': 'hsl(217, 16%, 45%)',
        'text-primary': '#FFFFFF',
        'score-text' : "hsl(229, 64%, 46%)",
        'dark-text': "hsl(229, 25%, 31%)",
      },
  },
  plugins: [],
}


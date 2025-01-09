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
        'scissors-gradient': 'linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
        'rock-gradient': 'linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
      },
      colors: {
        'Header-outline': 'hsl(217, 16%, 45%)',
        'text-primary': '#E1E1E1',
        'paper': '#5572F2',
        "scissors": '#EBA824',
        "rock":'#D93D5B',
        'score-text' : "hsl(229, 64%, 46%)",
        'dark-text': "hsl(229, 25%, 31%)",
      },
  },
  plugins: [],
}


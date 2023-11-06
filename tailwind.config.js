/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "chats-background": "url('./src/assets/bg-chat-tile-dark.jpg')",
      },
    },
  },
  plugins: [],
};


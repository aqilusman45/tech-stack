module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins', sans-serif"],
      },
      colors: {
        black: "#31343F",
        "gray-100": "#4D535E",
        "gray-200": "#727A8C",
        "gray-300": "#9CA6B9",
        "gray-400": "#CCD5E4",
        "gray-500": "#E4E9F1",
        "gray-600": "#EEF1F5",
        "light-gray-bg": "#F7F8F9",
        white: "#fff",
        "primary-blue-100": "#EAF3FF",
        "primary-blue-200": "#C4DCFE",
        "primary-blue-medium": "#7EB7FF",
        "primary-blue": "#2D81FD",
        "primary-dark-blue-100": "#266CD5",
        "primary-dark-blue-200": "#1F58AC",
        "additional-light-red": "#FEEAE8",
        "additional-red": "#F52419",
        "additional-light-green": "#E6F6ED",
        "additional-green": "#00A344",
        "status-skyblue": "#2D9CDB",
        "status-orange": "#F2994A",
        "status-red": "#EB5757",
        "status-green": "#27AE60",
      },
      transitionProperty: {
        width: "width",
        height: "height",
      },
    },
  },
  plugins: [],
};

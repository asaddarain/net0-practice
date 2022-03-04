const colors = require("tailwindcss/colors");

module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: {
          400: "#f2f4fa",
          500: "#3dd598",
        },
      },
    },
  },
  plugins: [],
};

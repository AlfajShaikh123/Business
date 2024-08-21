const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-dark': 'rgba(27, 27, 27, 0.91)',
        'card_color':'rgba(48, 48, 48, 1)',
        'footer-bg':'rgba(24, 24, 24, 0.9)'
      }
    },
  },
  plugins: [],
});
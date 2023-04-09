const flowbite = require('flowbite');

module.exports = {
  purge: [
    './node_modules/flowbite/dist/*.css'
  ],
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
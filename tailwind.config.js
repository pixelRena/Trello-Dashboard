module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          'active-color': '#2C3EDC'
        },
        backgroundImage: {
          'primary-color': 'linear-gradient(134.07deg, rgba(108, 102, 174, 0.55) 23.13%, rgba(196, 73, 158, 0.55) 122.17%)'
        },
        boxShadow: {
          'primary': '0px 0px 4px 1px rgba(0, 0, 0, 0.4)',
        },
        dropShadow: {
          'primary': '0px 0px 15px rgba(0, 0, 0, 0.25)',
        }
      }
    }
};
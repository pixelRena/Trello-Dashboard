module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    plugins: [
      require('@tailwindcss/forms'),
    ],
    theme: {
      extend: {
        colors: {
          'active-color': '#2C3EDC',
          'success': '#71EB84'
        },
        backgroundImage: {
          'primary-color': 'linear-gradient(134.07deg, rgba(108, 102, 174, 0.55) 23.13%, rgba(196, 73, 158, 0.55) 122.17%)',
          'primary-color-full': 'linear-gradient(134.07deg, rgba(108, 102, 174, 1) 23.13%, rgba(196, 73, 158, 1) 122.17%)',
          "urgent":  'rgba(255, 255, 255, 0.54)',
        },
        boxShadow: {
          'primary': '0px 0px 4px 1px rgba(0, 0, 0, 0.3)',
        },
        dropShadow: {
          'primary': '0px 0px 15px rgba(0, 0, 0, 0.25)',
        }
      }
    }
};
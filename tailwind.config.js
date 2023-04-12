import plugin from 'tailwindcss/plugin';

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      dropShadow: {
        header: '0px 2px 2px rgba(0, 0, 0, 0.05)',
        card: '0px 2px 4px rgba(0, 0, 0, 0.05)',
      },
      colors: {
        primary: '#2F80ED',
        gray: {
          light: '#F2F2F2',
          dark: '#828282',
          label: '#4F4F4F',
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.no-tap-highlight': {
          'tap-highlight-color': 'transparent',
          '-webkit-tap-highlight-color': 'transparent',
        },
      });
    }),
  ],
};

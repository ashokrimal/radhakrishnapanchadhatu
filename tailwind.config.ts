module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: '#F7F5F0',
        gold: '#B08A45',
        ink: '#25231F',
        muted: '#77736B',
        line: '#E9E5DC',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(37, 35, 31, 0.08)',
      },
    },
  },
  plugins: [],
};

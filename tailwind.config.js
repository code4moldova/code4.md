module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx,json}',
    './components/**/*.{js,ts,jsx,tsx,json}',
    './blocks/**/*.{js,ts,jsx,tsx,json}',
    './data/**/*.{js,ts,jsx,tsx,json}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

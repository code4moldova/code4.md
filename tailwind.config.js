module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx,json,md}',
    './components/**/*.{js,ts,jsx,tsx,json,md}',
    './blocks/**/*.{js,ts,jsx,tsx,json,md}',
    './data/**/*.{js,ts,jsx,tsx,json,md}',
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

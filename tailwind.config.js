module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        mono: ['Montserrat'],
        display: ['Montserrat'],
        body: ['Montserrat'],
        raleway: ['Raleway', 'sans-serif']
      },
      backgroundImage: {
        'armero': "url('/img/armero.jpg')",
        'cristales': "url('/img/cañocristales.jpg')",
        'cristalesdesktop': "url('/img/cristalesdesktop.jpg')",
        'choachi': "url('/img/choachi.jpg')",
        'macheta': "url('/img/macheta.jpg')",
        'medallo': "url('/img/medallo.jpg')",
        'tatacoa': "url('/img/tatacaohuila.jpg')",
        'tunja': "url('/img/tunja.jpg')",
        'villavicencio': "url('/img/villavicencio.jpg')",
      },
      backgroundColor: theme => (
        {
          ...theme('colors'),
          'primary': '#CCFBF1',
          'secondary': '#FAFAFA',
          'terciary': '#1F2937',
          'fourth': '#14B8A6',
          'fifth': '#FACC15',
        }
      ),
      textColor: {
        'black': '#171717',
        'gray': '#9ca3af',
      },
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    extend: {   
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

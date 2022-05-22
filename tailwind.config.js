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
        'pattern': "url('/img/pattern.png')",
        'uvas': "url('/img/uvas.jpg')",
        'mora': "url('/img/mora.jpg')",
        'naranja': "url('/img/naranja.jpg')",
        'manzana': "url('/img/manzana.jpg')",
        'papaya': "url('/img/papaya.jpg')",
        'sandia': "url('/img/sandia.jpg')",
        'fresa': "url('/img/fresa.jpg')",
        'banano': "url('/img/banano.jpg')",
        'pimenton': "url('/img/pimenton.jpg')",
        'pepino': "url('/img/pepino.jpg')",
        'zanahoria': "url('/img/zanahoria.jpg')",
        'aguacate': "url('/img/aguacate.jpg')",
        'cebolla': "url('/img/cebolla.jpg')",
        'lechuga': "url('/img/lechuga.jpg')",
        'remolacha': "url('/img/remolacha.jpg')",
        'tomate': "url('/img/tomate.jpg')",
        'menta': "url('/img/menta.jpg')",
        'cactus': "url('/img/cactus.jpg')",
        'perejil': "url('/img/perejil.jpg')",
        'manzanilla': "url('/img/manzanilla.jpg')",
        'marihuana': "url('/img/marihuana.jpg')",
        'aloe': "url('/img/aloe.jpg')",
        'bromelia': "url('/img/bromelia.jpg')",
        'romero': "url('/img/romero.jpg')",

      },
      backgroundColor: theme => (
        {
          ...theme('colors'),
          'primary': '#1F2937',
          'secondary': '#FAFAFA',
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

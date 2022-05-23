<template class="dark">
    <header class="w-full h-auto font-Montserrat lg:h-3/5">
      <nav class="w-full h-14 hidden bg-zinc-50 lg:flex justify-between items-center fixed z-50">
        <div class="h-auto w-auto">
          <h1 class="text-3xl text-slate-800 font-bold p-4">Moto Travel</h1>
        </div>
        <div class="flex space-x-8">
          <a class="font-bold text-md text-slate-800" href="#home">Inicio</a>
          <a class="font-bold text-md text-slate-800" href="#recommended">Recomendados</a>
          <a class="font-bold text-md text-slate-800" href="#featured_rentals">Destacados</a>
          <a class="font-bold text-md text-slate-800" href="#faqs">FAQS</a>
          <a class="font-bold text-md text-slate-800" href="#footer">Sobre nosotros</a>
        </div>
        <div class="flex space-x-4 mr-4">
          <a href="#">
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-slate-800" d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
          </a>
          <button>
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-slate-800" d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"/></svg>
          </button>
          <a href="">
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-slate-800" d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg>
          </a>
        </div>
      </nav>
      <div id="home">
        <div class="w-full h-3/4">
          <div
            class="
            w-full
            h-full
            flex flex-col
            absolute
            space-y-20
            py-4
            items-center

            lg:space-y-0
            lg:items-start
            lg:pt-28
            lg:justify-start
          "
        >
          <input
            class="w-11/12 h-12 rounded-3xl outline-none text-center shadow-sm transition duration-300 focus-within:shadow-sm focus:ring-3 focus:w-11/12 lg:hidden"
            placeholder="Caño Cristales (Villavicencio)"
            type="search"
            name=""
            id=""
          />
          <div class="hidden lg:h-auto lg:w-2/5 lg:flex lg:pb-6">
            <p class="text-4xl ml-16 font-bold text-zinc-50">Encuentra más ubicaiones cómo está</p>
          </div>
          <button
            class="
              w-32
              h-12
              bg-primary
              text-white text-lg
              font-semibold
              p-1
              rounded-full
              transition-all
              duration-500
              ease-in-out
              hover:bg-secondary
              hover:-transalate-y-1
              hover:scale-110
              hover:text-slate-800
              lg:ml-16
            "
          >
            Explorar
          </button>
        </div>
        <div class="w-full h-full lg:h-96 lg:bg-cristalesdesktop lg:bg-cover lg:bg-center">
          <img class="lg:hidden" src="/img/cañocristales.jpg" alt="" />
        </div>
      </div>
    </div>
  </header>

  <main class="p-6 bg-secondary" id="recommended">
    <p class="font-semibold font-Montserrat text-3xl w-2 h-3 text-slate-800">Recomendados</p>
    <section class="w-auto h-72 items-center mt-12 overflow-x-auto overscroll-x-contain flex space-x-6 overflow-y-hidden">
        <div class="card">
          <div class="card-img bg-medallo bg-cover"></div>
          <div class="w-full h-2/5 bg-terciary">
            <p class="text-white font-bold text-lg text-center py-4">Medallo</p>
            <p class="text-white text-md text-center">Medellín</p>
          </div>
        </div>
        <div class="card">
          <div class="card-img bg-tatacoa bg-cover"></div>
          <div class="w-full h-2/5 bg-secondary ">
            <p class="text-slate-800 font-bold text-lg text-center py-4">Tatacoa</p>
            <p class="text-slate-800 text-md text-center">Huila</p>
          </div>
        </div>
        <div class="card">
          <div class="card-img bg-armero bg-cover"></div>
          <div class="w-full h-2/5 bg-terciary">
            <p class="text-white font-bold text-lg text-center py-4">Armero</p>
            <p class="text-white text-md text-center">Armero</p>
          </div>
        </div>
        <div class="card">
          <div class="card-img bg-macheta bg-cover"></div>
          <div class="w-full h-2/5 bg-secondary">
            <p class="text-slate-800 font-bold text-lg text-center py-4">Machetá</p>
            <p class="text-slate-800 text-md text-center">Machetá</p>
          </div>
        </div>
        <div class="card">
          <div class="card-img bg-choachi bg-cover"></div>
          <div class="w-full h-2/5 bg-terciary">
            <p class="text-white font-bold text-lg text-center py-4">Choachí</p>
            <p class="text-white text-md text-center">Choachí</p>
          </div>
        </div>
        <div class="card">
          <div class="card-img bg-tunja bg-cover"></div>
          <div class="w-full h-2/5 bg-secondary">
            <p class="text-slate-800 font-bold text-lg text-center py-4">Tunja</p>
            <p class="text-slate-800 text-md text-center">Tunja</p>
          </div>
        </div>
        <div class="card">
          <div class="card-img bg-villavicencio bg-cover"></div>
          <div class="w-full h-2/5 bg-terciary">
            <p class="text-white font-bold text-lg text-center py-4">Villavicencio</p>
            <p class="text-white text-md text-center">Villavicencio</p>
          </div>
        </div>
    </section>

    <section class="mt-6 h-full w-full font-Montserrat lg:px-6" id="featured_rentals">
      <p class="text-3xl text-slate-800 font-semibold pb-6">Lugares destacados</p>
      <div class="w-full h-full flex flex-col items-center justify-center lg:w-full lg:h-full lg:space-x-6 lg:items-center lg:flex-row">
        <div class="w-full h-96 bg-tatacoa bg-cover rounded-xl mb-8 bg-center">
          <p class="card-featured--title text-slate-800">Tatacao</p>
          <p class="text-lg pl-8 text-slate-800 mr-24 ">Tatacoa</p>
        </div>

        <div class="w-full h-96 bg-tunja bg-cover rounded-xl mb-8 bg-center">
            <p class="card-featured--title text-slate-800">Tunja</p>
            <p class="text-lg pl-8 text-slate-800 mr-24">Tunja</p>
        </div>


          <div class="w-full h-96 bg-macheta bg-cover rounded-xl mb-8 bg-center">
            <p class="card-featured--title text-zinc-50">Machetá</p>
            <p class="text-lg pl-8 text-zinc-100 mr-24">Machetá</p>
          </div>

          <div class="w-full h-96 bg-choachi bg-cover rounded-xl mb-8 bg-center">
            <p class="card-featured--title text-zinc-50">Choachí</p>
            <p class="text-lg pl-8 text-zinc-50 mr-24">Choachí</p>
          </div>

      </div>
    </section>

    <section class="w-full h-full font-Montserrat" id="faqs">
      <div class="w-full h-full px-6 flex flex-col space-y-4">
        <p class="text-3xl text-slate-800 font-semibold mt-6">FAQS</p>
        <div>
          <p class="text-xl font-md text-slate-800">Politica de cancelación</p>
          <p class="text-md pt-2">Aceptamos VISA, MasterCard, American Express, Paypal y Binance</p>
        </div>
        <div>
          <p class="text-xl font-md text-slate-800">Métodos de pago</p>
          <p class="text-md pt-2">Aceptamos VISA, MasterCard, American Express, Paypal y Binance</p>
        </div>
        <div>
          <p class="text-xl font-md text-slate-800">Largos viajes</p>
          <p class="text-md pt-2">Ofrecemos viajes por Colombia cortos, como lo es caños cristales, Guatape, Desierto del tatacoa, Armero. Entre otros</p>
        </div>
        <div>
          <p class="text-xl font-md text-slate-800">Cortos vaijes</p>
          <p class="text-md pt-2">Ofrecemos viajes por Colombia cortos, como lo es machetá, chinauta, Tominé, Choachi. Entre otros</p>
        </div>
        <div>
          <p class="text-xl font-md text-slate-800">Cilindrajes</p>
          <p class="text-md pt-2">Aceptamos todo tipo de cilindraje, tanto bajo como alto, vamos en grupos, diviertete con las demas peersonas y pasa un momento agradable.</p>
        </div>
      </div>
    </section>
  </main>


  <footer class="w-full h-80 bg-slate-800 font-Montserrat p-6 space-y-2" id="footer">
    <p class="text-lg text-zinc-100">Sobre nosotros</p>
    <ul>
      <li class="footer-menu">
        <a class="text-sm text-zinc-50 hover:transform hover:scale-50" href="#">Inverstors</a>
      </li>
      <li class="footer-menu">
        <a class="text-sm text-zinc-50" href="#">Jobs</a>
      </li>
      <li class="footer-menu">
        <a class="text-sm text-zinc-50" href="#">Privacy policy</a>
      </li>
      <li class="footer-menu">
        <a class="text-sm text-zinc-50" href="#">Terms and condictions</a>
      </li>
      <li class="footer-menu">
        <a class="text-sm text-zinc-50" href="#">MotoTravel</a>
      </li>
      <li class="footer-menu">
        <a class="text-sm text-zinc-50" href="#">Follow Us</a>
      </li>
      <li class="footer-menu">
        <a class="" href="#">
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-zinc-50" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
        </a>
      </li>
      <li class="footer-menu">
        <a href="#">
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-zinc-50" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
        </a>
      </li>
    </ul>
  </footer>

  <div class="w-full h-12 bg-zinc-50 fixed left-0 bottom-0 shadow-md flex space-x-8 items-center justify-center lg:hidden" id="tab_bar">
    <a href="#home">
      <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-slate-800" d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.6 483.2 483.9 512 448.5 512H128.1C92.75 512 64.09 483.3 64.09 448V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5H575.8zM288 160C252.7 160 224 188.7 224 224C224 259.3 252.7 288 288 288C323.3 288 352 259.3 352 224C352 188.7 323.3 160 288 160zM256 320C211.8 320 176 355.8 176 400C176 408.8 183.2 416 192 416H384C392.8 416 400 408.8 400 400C400 355.8 364.2 320 320 320H256z"/></svg>
    </a>
    <a href="#recommended">
      <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-slate-800" d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
    </a>
    <a href="#featured_rentals">
     <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-slate-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
    </a>
    <button href="">
     <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-slate-800" d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"/></svg>
    </button>
    <a href="#">
     <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-slate-800" d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  head(){
    return {
      title: 'Travel',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://toppng.com/uploads/preview/motorcycle-icon-11562943268vracxoczhd.png' }
      ]
    }
  },
  setup() {

  },
})
</script>

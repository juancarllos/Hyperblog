<template>
    <header class="w-full h-auto font-Montserrat lg:h-1/6" id="home">
      <nav class="w-full h-14 bg-zinc-50 shadow-md flex justify-between items-center lg:fixed lg:z-50">
        <div class="h-auto w-auto p-2 lg:hidden">
            <a class="" href="#">
                <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-green-900" d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
            </a>
        </div>
        <div class="flex space-x-8 p-2">
            <a href="#home">
                <h1 class="text-lg text-green-900 font-bold md:text-xl px-2">Supermarket Aldana</h1>
            </a>
        </div>
        <div class="hidden lg:flex space-x-8 text-green-900 text-lg font-semibold">
            <a href="#destacados">Destacados</a>
            <a href="#verduras">Verduras</a>
            <a href="#frutas">Frutas</a>
            <a href="#plantas">Plantas</a>
            <a href="#faqs">FAQS</a>
            <a href="#footer">Sobre nosotros</a>
        </div>
        <div class="flex space-x-4 mr-4">
          <a href="">
              <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-green-900" d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"/></svg>
          </a>
        </div>
      </nav>
    </header>

    <main class="w-full h-auto bg-pattern font-Montserrat lg:my-32">
        <article class="w-full h-5 mt-4 flex justify-center lg:w-full" id="search">
            <input class="w-4/5 h-8 text-center text-black rounded-lg outline-none shadow-lg lg:w-2/5" type="text" placeholder="Buscar">
        </article>
        <article class="w-full h-5 my-8 text-black lg:hidden">
            <ul class="w-full h-auto flex justify-center text-sm space-x-1 md:space-x-6">
                <li class="bg-white shadow-md p-2 rounded-xl hover:bg-green-900 hover:text-zinc-50">
                    <a href="#destacados">Destacados</a>
                </li>
                <li class="bg-white shadow-md p-2 rounded-xl hover:bg-green-900 hover:text-zinc-50">
                    <a href="#verduras">Verduras</a>
                </li>
                <li class="bg-white shadow-md p-2 rounded-xl hover:bg-green-900 hover:text-zinc-50">
                    <a href="#frutas">Frutas</a>
                </li>
                <li class="bg-white shadow-md p-2 rounded-xl hover:bg-green-900 hover:text-zinc-50">
                    <a href="#plantas">Plantas</a>
                </li>
                <ul class="hidden md:flex md:space-x-6">
                    <li class="bg-white shadow-md p-2 rounded-xl hover:bg-green-900 hover:text-zinc-50">
                        <a href="#faqs">FAQS</a>
                    </li>
                    <li class="bg-white shadow-md p-2 rounded-xl hover:bg-green-900 hover:text-zinc-50">
                        <a href="#footer">Sobre nosotros</a>
                    </li>
                </ul>

            </ul>
        </article>

        <article class="w-full h-auto mt-8 p-6" id="destacados">
            <p class="text-3xl text-black font-semibold w-full">Productos destacados</p>
            <section class="w-auto h-auto items-center flex flex-col mt-8 space-y-6 md:flex-row md:overflow-x-auto md:overscroll-x-contain md:overflow-y-hidden md:space-x-6 md:h-72">
                 <div class="shadow-md shadow-black w-48 h-48 bg-manzana bg-center bg-contain bg-no-repeat rounded-xl flex-none md:hover:transform md:transition-all md:hover:-translate-y-4 md:hover:shadow-xl md:mt-6">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold ">
                        <span>Manzana</span>
                        <span>$ 1.000</span>
                    </div>
                </div>
                 <div class="shadow-md shadow-black w-48 h-48 bg-uvas bg-center bg-contain bg-no-repeat rounded-xl flex-none md:hover:transform md:transition-all md:hover:-translate-y-4 md:hover:shadow-xl">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span>Uvas</span>
                        <span>$ 10.000</span>
                    </div>
                </div>
                 <div class="shadow-md shadow-neutral-500 w-48 h-48 bg-sandia bg-contain bg-center bg-no-repeat rounded-xl flex-none md:hover:transform md:transition-all md:hover:-translate-y-4 md:hover:shadow-xl">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span>Sandia</span>
                        <span>$ 12.000</span>
                    </div>
                </div>
                 <div class="shadow-md shadow-black w-48 h-48 bg-naranja bg-contain bg-no-repeat bg-center rounded-xl flex-none md:hover:transform md:transition-all md:hover:-translate-y-4 md:hover:shadow-xl">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span>Naranja</span>
                        <span>$ 3.000</span>
                    </div>
                </div>
                 <div class="shadow-md shadow-black w-48 h-48 bg-marihuana bg-center bg-contain bg-no-repeat rounded-xl flex-none md:hover:transform md:transition-all md:hover:-translate-y-4 md:hover:shadow-xl">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span>Marihuana</span>
                        <span>$ 100.000</span>
                    </div>
                </div>
                 <div class="shadow-md shadow-black w-48 h-48 bg-romero bg-center bg-contain bg-no-repeat rounded-xl flex-none md:hover:transform md:transition-all md:hover:-translate-y-4 md:hover:shadow-xl">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span>Romero</span>
                        <span>$ 1.000</span>
                    </div>
                </div>
                 <div class="shadow-md shadow-black w-48 h-48 bg-manzanilla bg-center bg-contain bg-no-repeat rounded-xl flex-none md:hover:transform md:transition-all md:hover:-translate-y-4 md:hover:shadow-xl">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <p >Manzanilla</p>
                        <span>$ 24.000</span>
                    </div>
                </div>
            </section>
        </article>

        <article class="w-full h-auto p-6" id="verduras">
            <div class="w-full h-12 flex items-center justify-between">
                <p class="text-3xl text-black font-semibold w-auto">Verduras</p>
                <a class="text-sm text-black hover:text-green-900" href="#">Ver todo</a>
            </div>
            <section class="w-auto h-72 items-center flex space-x-6 overflow-x-auto overscroll-x-contain overflow-y-hidden">
                <div class="card-supermarket bg-zanahoria bg-contain bg-center bg-no-repeat">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-100 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span>Zanahoria</span>
                        <span>$ 10.000</span>
                    </div>
                </div>
                 <div class="card-supermarket bg-tomate bg-contain bg-center bg-no-repeat">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span>Tomate</span>
                        <span>$ 19.000</span>
                    </div>
                </div>
                 <div class="card-supermarket bg-cebolla bg-center bg-contain bg-no-repeat">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span>Cebolla</span>
                        <span>$ 1.550</span>
                    </div>
                </div>
                 <div class="card-supermarket bg-pepino bg-contain bg-center bg-no-repeat">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span>Pepino</span>
                        <span>$ 1.000</span>
                    </div>
                </div>
                 <div class="card-supermarket bg-pimenton bg-contain bg-center bg-no-repeat">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span>Pimentón</span>
                        <span>$ 500</span>
                    </div>
                </div>
                 <div class="card-supermarket bg-lechuga bg-contain bg-center bg-no-repeat">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span>Lechuga</span>
                        <span>$ 15.000</span>
                    </div>
                </div>
                 <div class="card-supermarket bg-remolacha bg-contain bg-center bg-no-repeat">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span>Remolacha</span>
                        <span>$ 1.200</span>
                    </div>
                </div>
                 <div class="card-supermarket bg-aguacate bg-contain bg-center bg-no-repeat">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <p >Aguacate</p>
                        <span>$ 1.000</span>
                    </div>
                </div>
            </section>
        </article>

        <article class="w-full h-auto p-6" id="frutas">
           <div class="w-full h-12 flex items-center justify-between">
                <p class="text-3xl text-black font-semibold w-auto">Frutas</p>
                <a class="text-sm text-black hover:text-green-900" href="">Ver todo</a>
            </div>
            <section class="w-auto h-72 items-center flex space-x-6 overflow-x-auto overscroll-x-contain overflow-y-hidden">
                <div class="card-supermarket bg-uvas bg-center bg-contain bg-no-repeat">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-100 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span class="">Uvas</span>
                        <span>$ 10.000</span>
                    </div>
                </div>
                 <div class="card-supermarket bg-naranja bg-center bg-contain bg-no-repeat">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span>Naranja</span>
                        <span>$ 3.000</span>
                    </div>
                </div>
                 <div class="card-supermarket bg-fresa bg-center bg-contain bg-no-repeat">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span>Fresas</span>
                        <span>$ 300</span>
                    </div>
                </div>
                 <div class="card-supermarket bg-papaya bg-center bg-contain bg-no-repeat">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span>Papaya</span>
                        <span>$ 5.000</span>
                    </div>
                </div>
                 <div class="card-supermarket bg-mora bg-contain bg-center bg-no-repeat ">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span>Mora</span>
                        <span>$ 1.000</span>
                    </div>
                </div>
                 <div class="card-supermarket bg-sandia bg-center bg-contain bg-no-repeat">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span>Sandía</span>
                        <span>$ 12.000</span>
                    </div>
                </div>
                 <div class="card-supermarket bg-banano bg-center bg-no-repeat bg-contain">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-900" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span>Banano</span>
                        <span>$ 800</span>
                    </div>
                </div>
                 <div class="card-supermarket bg-manzana bg-center bg-contain bg-no-repeat">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <p >Manzana</p>
                        <span>$ 1.000</span>
                    </div>
                </div>
            </section>
        </article>

        <article class="w-full h-auto p-6" id="plantas">
            <div class="w-full h-12 flex items-center justify-between">
                <p class="text-3xl text-black font-semibold w-auto">Plantas</p>
                <a class="text-sm text-black hover:text-green-900"  href="">Ver todo</a>
            </div>
            <section class="w-auto h-72 items-center flex space-x-6 overflow-x-auto overscroll-x-contain overflow-y-hidden">
                <div class="card-supermarket bg-marihuana bg-center bg-contain bg-no-repeat">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-100 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span class="">Marihuana</span>
                        <span>$ 100.000</span>
                    </div>
                </div>
                 <div class="card-supermarket bg-manzanilla bg-center bg-contain bg-no-repeat">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span>Manzanilla</span>
                        <span>$ 24.000</span>
                    </div>
                </div>
                 <div class="card-supermarket bg-cactus bg-center bg-contain bg-no-repeat">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span>Cactus</span>
                        <span>$ 112.000</span>
                    </div>
                </div>
                 <div class="card-supermarket bg-bromelia bg-center bg-contain bg-no-repeat">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span>Bromelia</span>
                        <span>$ 19.990</span>
                    </div>
                </div>
                 <div class="card-supermarket bg-romero bg-center bg-contain bg-no-repeat">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span>Romero</span>
                        <span>$ 1.000</span>
                    </div>
                </div>
                 <div class="card-supermarket bg-menta bg-center bg-contain bg-no-repeat">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span>Menta</span>
                        <span>$ 15.000</span>
                    </div>
                </div>
                 <div class="card-supermarket bg-perejil bg-center bg-contain bg-no-repeat">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <span>Perejil</span>
                        <span>$ 19.990</span>
                    </div>
                </div>
                 <div class="card-supermarket bg-aloe bg-center bg-contain bg-no-repeat">
                    <div class="flex justify-between p-2 h-4/5">
                        <span class="text-green-900">8%</span>
                        <span>
                             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-red-800" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                        </span>
                    </div>
                    <div class="flex justify-between p-2 bg-zinc-50 z-50 rounded-b-xl items-center text-green-900 font-semibold">
                        <p >Aloe Vera</p>
                        <span>$ 9000</span>
                    </div>
                </div>
            </section>
        </article>

        <article class="w-full h-full font-Montserrat mb-8" id="faqs">
            <section class="w-full h-full px-6 flex flex-col space-y-4">
                <p class="text-3xl text-black font-semibold mt-6">FAQS</p>
                <div>
                    <p class="text-xl font-md text-green-900">Politica de cancelación</p>
                    <p class="text-md pt-2">Aceptamos VISA, MasterCard, American Express, Paypal y Binance</p>
                </div>
                <div>
                    <p class="text-xl font-md text-green-900">Métodos de pago</p>
                    <p class="text-md pt-2">Aceptamos VISA, MasterCard, American Express, Paypal y Binance</p>
                </div>
                <div>
                    <p class="text-xl font-md text-green-900">Tiendas</p>
                    <p class="text-md pt-2">Ubicación cide</p>
                </div>
                <div>
                    <p class="text-xl font-md text-green-900">Envios</p>
                    <p class="text-md pt-2">Ofrecemos envios a toda parte del país</p>
                </div>
                <div>
                    <p class="text-xl font-md text-green-900">Email</p>
                    <p class="text-md pt-2">Puedes comunicarte a este email.</p>
                </div>
            </section>
        </article>
    </main>

    <footer class="w-full h-80 bg-green-900 font-Montserrat p-6 space-y-2" id="footer">
        <p class="text-lg text-zinc-100">Sobre nosotros</p>
        <ul>
            <li class="footer-menu">
                <a class="text-sm text-zinc-50 hover:transform hover:scale-50" href="#">Politicas y terminos de condiciones</a>
            </li>
            <li class="footer-menu">
                <a class="text-sm text-zinc-50" href="#">Trabajos</a>
            </li>
            <li class="footer-menu">
                <a class="text-sm text-zinc-50" href="#">Contacto</a>
            </li>
            <li class="footer-menu">
                <a class="text-sm text-zinc-50" href="#">Email</a>
            </li>
            <li class="footer-menu">
                <a class="text-sm text-zinc-50" href="#">Métodos de pago</a>
            </li>
            <li class="footer-menu">
                <a class="text-sm text-zinc-50" href="#">Envios</a>
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
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-green-900" d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.6 483.2 483.9 512 448.5 512H128.1C92.75 512 64.09 483.3 64.09 448V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5H575.8zM288 160C252.7 160 224 188.7 224 224C224 259.3 252.7 288 288 288C323.3 288 352 259.3 352 224C352 188.7 323.3 160 288 160zM256 320C211.8 320 176 355.8 176 400C176 408.8 183.2 416 192 416H384C392.8 416 400 408.8 400 400C400 355.8 364.2 320 320 320H256z"/></svg>
        </a>
        <a href="#search">
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-green-900" d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
        </a>
        <a href="#destacados">
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-green-900" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
        </a>
        <a href="#">
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-green-900" d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"/></svg>
        </a>
        <a href="#">
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="fill-current text-green-900" d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg>
        </a>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  head(){
    return {
      title: 'Supermarket',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://toppng.com/public/uploads/thumbnail/groceries-icon-supermarket-icon-11553511751hv6qadim3c.png' }
      ]
    }
  },
  setup() {

  },
})
</script>

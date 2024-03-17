<template>
  <myHeader />
  <main v-if="!mainChange === false" class="flex flex-col h-screen">
    <section class="h-fit w-full p-6 mt-[4.5rem]">
      <h1 class="text-white font-semibold text-lg md:text-lg xl:text-xl 2xl:text-xl">Bienvenido, ${USUARIO_NOMBRE}</h1>
    </section>
    <section class="w-full h-full flex justify-center items-center z-30">
      <div class="p-10 h-full w-full max-w-md md:max-w-md lg:max-w-2xl xl:max-w-2xl
        2xl:max-w-2xl flex flex-col justify-center items-center">
        <article class="w-full h-full flex flex-col justify-center items-start">
          <h1 class="text-center text-2xl md:text-2xl xl:text-4xl 2xl:text-4xl font-bold mb-5 text-white">
            Sin Sorteos
          </h1>
          <h2 class="text-center text-xl md:text-xl xl:text-3xl 2xl:text-3xl font-semibold mb-5 text-white">
            Por favor cree un sorteo
          </h2>
        </article>
        <h2 class="text-center text-xl md:text-xl xl:text-3xl 2xl:text-3xl font-semibold mb-5 text-white">
          No hay ningun sorteo disponible
        </h2>
        <myButton text="Crear Sorteo" />
      </div>
    </section>
  </main>
  <main v-else class="flex flex-col h-screen">
    <section class="h-fit w-full p-6 mt-[4.5rem] gap-5 inline-flex justify-between flex-wrap">
      <div class="h-fit w-fit flex flex-col">
        <h1 class="text-white font-semibold text-lg md:text-lg xl:text-xl 2xl:text-xl">
          Bienvenido, ${USUARIO_NOMBRE}
        </h1>
        <h2 class="text-white font-semibold text-lg md:text-lg xl:text-xl 2xl:text-xl">
          Sus sorteos
        </h2>
      </div>
    </section>
    <section class="w-full h-full flex justify-center items-center relative z-30">
      <div class="gap-5 mb-5 p-2 h-full md:h-full xl:h-[90%] 2xl:h-[90%] w-full absolute overflow-auto max-w-md md:max-w-md lg:max-w-2xl xl:max-w-2xl 2xl:max-w-2xl
          grid grid-cols-1 md::grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        <article v-for="sorteosCard in sorteos"
          class="flex flex-col justify-between cursor-pointer space-y-3 text-sm rounded-xl max-w-[26rem] w-full p-4 bg-white border-l-[0.3rem] border-l-[#FC9D68]">
          <header class="flex items-center justify-between font-bold">
            <span class="uppercase text-xs text-[#401E79]">{{ sorteosCard.id }}</span>
            <span class="text-xs text-[#401E79]">{{ sorteosCard.fechaInicio }} - {{ sorteosCard.fechaFin }}</span>
          </header>
          <div class="flex flex-row items-center space-x-3">
            <figure class="flex flex-none items-center justify-center w-10 h-10 rounded-full bg-[#FC9D68] text-white">
              <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
              </svg>
            </figure>
            <p class="text-base text-[#401E79] font-semibold">{{ sorteosCard.nombre }}</p>
          </div>
          <p class="font-medium text-[#401E79]">{{ sorteosCard.descripcion }}</p>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import myHeader from '../components/header.vue'
import myButton from '../components/button.vue'

const mainChange = ref(false)

const sorteos = [
  {
    id: 1234,
    fechaInicio: "2023-11-14",
    fechaFin: "2023-12-01",
    nombre: "Sorteo de Navidad",
    descripcion: "Participa y gana un viaje para dos personas a Cancún",
  },
  {
    id: 5678,
    fechaInicio: "2023-12-05",
    fechaFin: "2023-12-31",
    nombre: "Sorteo de Fin de Año",
    descripcion: "Gana un premio de $10.000 en efectivo",
  },
  {
    id: 9012,
    fechaInicio: "2024-01-15",
    fechaFin: "2024-02-28",
    nombre: "Sorteo de San Valentín",
    descripcion: "Lleva a tu pareja a una cena romántica para dos",
  },
  {
    id: 9012,
    fechaInicio: "2024-01-15",
    fechaFin: "2024-02-28",
    nombre: "Sorteo de San Valentín",
    descripcion: "Lleva a tu pareja a una cena romántica para dos",
  },
  {
    id: 9012,
    fechaInicio: "2024-01-15",
    fechaFin: "2024-02-28",
    nombre: "Sorteo de San Valentín",
    descripcion: "Lleva a tu pareja a una cena romántica para dos",
  },
  {
    id: 9012,
    fechaInicio: "2024-01-15",
    fechaFin: "2024-02-28",
    nombre: "Sorteo de San Valentín",
    descripcion: "Lleva a tu pareja a una cena romántica para dos",
  },
  {
    id: 9012,
    fechaInicio: "2024-01-15",
    fechaFin: "2024-02-28",
    nombre: "Sorteo de San Valentín",
    descripcion: "Lleva a tu pareja a una cena romántica para dos",
  },
  {
    id: 9012,
    fechaInicio: "2024-01-15",
    fechaFin: "2024-02-28",
    nombre: "Sorteo de San Valentín",
    descripcion: "Lleva a tu pareja a una cena romántica para dos",
  },
];
</script>
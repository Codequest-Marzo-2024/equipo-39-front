<template>
  <myHeader />
  <main v-if="!raffleList.length" class="flex flex-col h-screen">
    <welcome :title="'Sin sorteos disponibles'" />
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
        <router-link class="w-full h-auto flex justify-center" to="/raffle/create">
          <myButton text="Crear Sorteo" />
        </router-link>
      </div>
    </section>
  </main>

  <main v-else class="flex flex-col h-screen">

    <welcome :title="'Sus sorteos'" />

    <section class="w-full h-full flex justify-center items-center relative z-30">
      <div class="gap-5 mb-5 p-2 h-full md:h-full xl:h-[95%] 2xl:h-[95%] w-full absolute overflow-auto max-w-md md:max-w-md lg:max-w-2xl xl:max-w-2xl 2xl:max-w-2xl
          grid grid-cols-1 md::grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        <article v-for="raffle in raffleList" :key="raffle.id" @click="goToDetail(raffle.id)"
          class="flex flex-col justify-between cursor-pointer space-y-3 text-sm rounded-xl max-w-[26rem] h-fit w-full p-4 bg-white border-l-[0.3rem] border-l-[#FC9D68]">
          <header class="flex items-center justify-between font-bold">
            <span class="uppercase text-xs text-[#401E79]">{{ raffle.id }}</span>
            <span class="text-xs text-[#401E79]">
              {{ formatDate(raffle.initialDate) }} - {{ formatDate(raffle.finalDate) }}
            </span>
          </header>
          <div class="flex flex-row items-center space-x-3">
            <figure class="flex flex-none items-center justify-center w-10 h-10 rounded-full bg-[#FC9D68] text-white">
              <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
              </svg>
            </figure>
            <p class="text-base text-[#401E79] font-semibold">{{ raffle.name }}</p>
          </div>
          <p class="font-medium text-[#401E79]">{{ raffle.description }}</p>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router';

import myHeader from '../components/header.vue'
import myButton from '../components/button.vue'
import useRaffle from '../composables/useRaffle';
import useDates from '../common/composables/useDates';
import welcome from '../components/welcome.vue';

const {
  raffleList,
  findRaffles,
} = useRaffle();

const { formatDate } = useDates();
const router = useRouter();

const goToDetail = (raffleId: number) => {
  router.push({ name: 'detailView', params: { raffleId } });
}

onMounted(() => {
  findRaffles();
})
</script>
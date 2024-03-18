<template>
  <header
    class="h-fit w-full fixed top-0 z-50 md:flex items-center px-2 lg:px-5 xl:px-8 2xl:px-8 py-5"
  > 
    <router-link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[#FC9D68]">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
         </svg>
    </router-link>
  </header>
  <main class="flex flex-col h-screen items-center justify-center">
    <article class="p-5 w-full lg:w-1/2 xl:w-1/2">
      <section
        class="w-full flex flex-col items-center justify-center z-50 bg-[#401E79] rounded-xl p-5 lg:p-10 xl:p-10"
      >
        <div
          class="w-[6.5rem] h-[6.5rem] rounded-full bottom-4 border-[3px] border-[#FC9D68] flex items-center justify-center p-4 mb-2 lg:mb-5 xl:mb-5"
        >
          <img
            class="h-[3.5rem] sm:h-[4.5] xl:h-[4.5rem] w-full flex justify-center"
            src="../assets/img/trophy.svg"
            alt="trophy"
          />
        </div>

        <h1 class="text-center text-2xl text-white mb-2 lg:mb-5 xl:mb-5">
          El Ganador es:
        </h1>

        <div
          class="w-auto border-[3px] border-[#FC9D68] p-2 rounded-xl text-white mb-5 lg:mb-10 xl:mb-10"
        >
          <label class="text-2xl">{{ participant }}</label>
        </div>
        <div class="w-full">
          <div class="flex flex-row gap-8">
            <div v-if="!winner.length" class="w-full flex justify-center">
              <myButton
                @click="onSummit"
                text="Iniciar"
                class="w-full rounded-xl font-normal"
                :disabled="isFetching"
              />
            </div>
            <div v-else class="w-full flex justify-center">
              <myButton
                @click="router.go(-1)"
                text="Salir"
                class="w-full rounded-xl font-normal"
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  </main>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import useParticipants from '../composables/useParticipants';
import myButton from '../components/button.vue';
import useDrawRaffle from '../composables/useDrawRaffle';

const route = useRoute();
const router = useRouter();
const raffleId = route.params.raffleId as string;
const { participantsName } = useParticipants();
const participant = ref('');
const winner = ref('');

if (!participantsName.value.length || !raffleId) {
  router.push({ name: 'homeView' });
}

const { getDrawRaffle, winnerList, isFetching } = useDrawRaffle();

const drawRaffle = () => {
  return setInterval(() => {
    const index = Math.floor(Math.random() * participantsName.value.length);
    participant.value = participantsName.value[index];
  }, 300);
};

const onSummit = async () => {
  isFetching.value = true;
  const interval = drawRaffle();
  await new Promise((resolve) => setTimeout(resolve, 5000));
  clearInterval(interval);
  await getDrawRaffle(+raffleId);
  participant.value = winnerList.value[0].Participant.username;
  winner.value = participant.value;
};
</script>

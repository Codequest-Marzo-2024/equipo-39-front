<template>
  <main class="flex h-screen items-center justify-center">
    <section
      v-if="isShowFormIndex == 0"
      class="p-10 w-full max-w-md mb-12 z-50 transition-all ease-in-out duration-300"
    >
      <img
        class="h-[10rem] sm:h-[12rem] xl:h-[15rem] 2xl:h-[15rem] w-full mb-5 flex justify-center"
        src="../assets/img/dt_logo.svg"
        alt="logo-Dt"
      />
      <h1 class="text-center text-2xl font-bold mb-5 text-white">
        BIENVENIDO AL SORTEO DEVTALLES
      </h1>
      <h1 class="text-center text-2xl font-normal text-white mb-5">
        Ingrese sus datos
      </h1>
      <form class="z-40" action="#" @submit.prevent="onSubmit">
        <myinput
          :type="'text'"
          :label="'Nombre de usuario'"
          v-model="participantRegisterDto.username"
          id="username"
        />
        <myinput
          :type="'text'"
          :label="'Discord Id'"
          v-model="participantRegisterDto.idPlatform"
          id="idPlatform"
        />
        <div class="w-full flex justify-center">
          <myButton :type="'submit'" :text="'Registrarse'" />
        </div>
      </form>
    </section>

    <section
      v-else-if="isShowFormIndex == 1"
      class="p-10 w-full max-w-md mb-12 z-50 transition-all ease-in-out duration-300"
    >
      <article class="flex flex-col items-center justify-center w-full">
        <img
          class="h-[10rem] sm:h-[12rem] xl:h-[15rem] 2xl:h-[15rem] w-full flex justify-center mb-20 lg:mb-5 md:mb-5 xl:mb-5"
          src="../assets/img/dt_logo.svg"
          alt="logo-Dt"
        />
        <div
          class="w-[9.5rem] h-[9.5rem] rounded-full bottom-4 border-[3px] border-[#08FF08] flex items-center justify-center mb-10 p-4"
        >
          <img
            class="h-[7.5rem] sm:h-[12rem] xl:h-[15rem] 2xl:h-[15rem] w-full flex justify-center"
            src="../assets/img/success.svg"
            alt="trophy"
          />
        </div>
        <h1 class="text-center text-2xl font-normal mb-[6rem] text-white">
          Registro exitoso <br />
          {{ raffletShort.name }}
        </h1>

        <div class="w-full flex justify-center">
          <myButton @Click="isShowFormIndex = 0" text="Volver" />
        </div>
      </article>
    </section>
    <section
      v-else-if="isShowFormIndex == 2"
      class="p-10 w-full max-w-md mb-12 z-50 transition-all ease-in-out duration-300"
    >
      <article class="flex flex-col items-center justify-center w-full">
        <img
          class="h-[10rem] sm:h-[12rem] xl:h-[15rem] 2xl:h-[15rem] w-full flex justify-center mb-20 lg:mb-5 md:mb-5 xl:mb-5"
          src="../assets/img/dt_logo.svg"
          alt="logo-Dt"
        />

        <div
          class="w-[9.5rem] h-[9.5rem] rounded-full bottom-4 border-[3px] border-[#FC9D68] flex items-center justify-center mb-10 p-4"
        >
          <img
            class="h-[7.5rem] sm:h-[12rem] xl:h-[15rem] 2xl:h-[15rem] w-full flex justify-center"
            src="../assets/img/warning.svg"
            alt="trophy"
          />
        </div>
        <h1 class="text-center text-2xl font-normal mb-[6rem] text-white">
          Registro fallido ya esta registrado <br />
          {{ raffletShort.name }}
        </h1>

        <div class="w-full flex justify-center">
          <myButton @Click="isShowFormIndex = 0" text="Volver" />
        </div>
      </article>
    </section>
    <section
      v-else-if="isShowFormIndex == 3"
      class="p-10 w-full max-w-md mb-12 z-50 transition-all ease-in-out duration-300"
    >
      <article class="flex flex-col items-center justify-center w-full">
        <img
          class="h-[10rem] sm:h-[12rem] xl:h-[15rem] 2xl:h-[15rem] w-full flex justify-center mb-20 lg:mb-5 md:mb-5 xl:mb-5"
          src="../assets/img/dt_logo.svg"
          alt="logo-Dt"
        />

        <div
          class="w-[9.5rem] h-[9.5rem] rounded-full bottom-4 border-[3px] border-[#DF1111] flex items-center justify-center mb-10 p-4"
        >
          <img
            class="h-[7.5rem] sm:h-[12rem] xl:h-[15rem] 2xl:h-[15rem] w-full flex justify-center"
            src="../assets/img/danger.svg"
            alt="trophy"
          />
        </div>
        <h1 class="text-center text-2xl font-normal mb-[6rem] text-white">
          Registro fallido datos incorrectos <br />
          {{ raffletShort.name }}
        </h1>
        <div class="w-full flex justify-center">
          <myButton @Click="isShowFormIndex = 0" text="Volver" />
        </div>
      </article>
    </section>
    <div class="absolute bottom-5 right-5 z-10">
      <div
        class="fixed bottom-0 right-0 w-[170px] h-[170px] sm:w-[190px] sm:h-[190px] md:w-[250px] md:h-[250px] lg:h-[300px] lg:w-[300px] xl:w-[380px] xl:h-[380px] 2xl:w-[400px] 2xl:h-[400px] bg-[#FC9D68] rounded-tl-full"
      ></div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import myButton from '../components/button.vue';
import myinput from '../components/input.vue';
import useParticipants from '../composables/useParticipants';
import useRaffle from '../composables/useRaffle';

const route = useRoute();
const router = useRouter();
const raffleUUID = route.params.raffleUUID as string;

if (!raffleUUID) {
  router.push({ name: 'login' });
}

const { raffletShort, findRaffleByUUID } = useRaffle();
const {
  participantRegisterDto,
  registerParticipantInRaffle,
  resetParticipantRegisterDto,
} = useParticipants();

let isShowFormIndex = ref(0);

const onSubmit = () => {
  registerParticipantInRaffle(raffleUUID)
    .then(() => {
      isShowFormIndex.value = 1;
      resetParticipantRegisterDto();
    })
    .catch((error) => {
      if (
        error.message.includes('already exists') ||
        error.message.includes('Unique constraint failed')
      ) {
        isShowFormIndex.value = 2;
      } else {
        isShowFormIndex.value = 3;
      }
    });
};

onMounted(() => {
  findRaffleByUUID(raffleUUID);
});
</script>

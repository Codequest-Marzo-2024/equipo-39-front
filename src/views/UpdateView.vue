<template>
  <myHeader />
  <section class="h-fit w-full">
    <welcome :title="'Edita tu sorteo'" />
  </section>
  <main class="flex items-start justify-center p-5">
    <section class="p-10 w-full max-w-md z-40">
      <form @submit.prevent="onSubmit()">
        <myinput
          :type="'text'"
          :label="'Nombre'"
          v-model="raffleUpdateDto.name"
        />
        <textarea
          placeholder="Descripcion"
          class="block border-2 my-5 p-1 resize-none border-[#FC9D68] bg-[#2F096E] text-white rounded-md w-full focus:outline-none focus:border-[#FC9D68]"
          rows="5"
          v-model="raffleUpdateDto.description"
        >
        </textarea>
        <div
          class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 w-full gap-3"
        >
          <myinput
            :type="'date'"
            :label="'Fecha inicio'"
            v-model="raffleUpdateDto.initialDate"
          />
          <myinput
            :type="'date'"
            :label="'Fecha fin'"
            v-model="raffleUpdateDto.finalDate"
          />
        </div>
        <div class="w-full flex justify-center">
          <myButton text="Editar Sorteo" :type="'submit'" />
        </div>
      </form>
    </section>
    <div class="absolute bottom-5 right-5 z-10">
      <div
        class="fixed bottom-0 right-0 w-[170px] h-[170px] sm:w-[190px] sm:h-[190px] md:w-[250px] md:h-[250px] lg:h-[300px] lg:w-[300px] xl:w-[380px] xl:h-[380px] 2xl:w-[400px] 2xl:h-[400px] bg-[#FC9D68] rounded-tl-full"
      ></div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

import myButton from '../components/button.vue';
import myinput from '../components/input.vue';
import myHeader from '../components/header.vue';
import useRaffle from '../composables/useRaffle';
import welcome from '../components/welcome.vue';

const router = useRouter();
const route = useRoute();

const raffleId = route.params.raffleId as string;
const {
  update,
  raffleUpdateDto,
  resetRaffleCreateDto,
  raffleDetail,
  findOneRaffle,
} = useRaffle();

const fillRaffleUpdateDto = async () => {
  await findOneRaffle(+raffleId);
  raffleUpdateDto.value.name = raffleDetail.value.name;
  raffleUpdateDto.value.description = raffleDetail.value.description;
  raffleUpdateDto.value.initialDate = raffleDetail.value.initialDate;
  raffleUpdateDto.value.finalDate = raffleDetail.value.finalDate;
};

const onSubmit = () => {
  update(+raffleId, raffleUpdateDto.value)
    .then(() => {
      resetRaffleCreateDto();
      router.push({ name: 'homeView' });
    })
    .catch((error) => {
      console.log(error);
    });
};
fillRaffleUpdateDto();
</script>

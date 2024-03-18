<template>
    <myHeader />
    <section class="h-fit w-full p-6 mt-[4.5rem]">
        <h1 class="text-white font-semibold text-lg md:text-lg xl:text-xl 2xl:text-xl">
            Nuevo Sorteo
        </h1>
    </section>
    <main class="flex items-start justify-center">
        <section class="p-10 w-full max-w-md mb-12 z-50">
            <form class="z-40 " @submit.prevent="onSubmit()">
                <myinput :type="'text'" :label="'Nombre'" v-model="raffleCreateDto.name" />
                <textarea placeholder="Descripcion"
                    class="block border-2 my-5 p-1 resize-none border-[#FC9D68] bg-[#2F096E] text-white rounded-md w-full focus:outline-none focus:border-[#FC9D68]"
                    rows="5" v-model="raffleCreateDto.description">
                </textarea>
                <div class="inline-flex w-full gap-3">
                    <myinput :type="'date'" :label="'Fecha inicio'" v-model="raffleCreateDto.initialDate" />
                    <myinput :type="'date'" :label="'Fecha fin'" v-model="raffleCreateDto.finalDate" />
                </div>
                <div class="w-full flex justify-center">
                    <myButton text="Crear Sorteo" :type="'submit'" />
                </div>
            </form>
        </section>
        <div class="absolute bottom-5 right-5 z-10">
            <div class="fixed bottom-0 right-0 w-[170px] h-[170px] sm:w-[190px] sm:h-[190px] md:w-[250px] md:h-[250px] lg:h-[300px] lg:w-[300px]
                 xl:w-[380px] xl:h-[380px] 2xl:w-[400px] 2xl:h-[400px] bg-[#FC9D68] rounded-tl-full">
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import myButton from '../components/button.vue'
import myinput from '../components/input.vue';
import myHeader from '../components/header.vue'
import useRaffle from '../composables/useRaffle';

const router = useRouter();
const { create, raffleCreateDto, resetRaffleCreateDto } = useRaffle();

const onSubmit = () => {
    create(raffleCreateDto.value).then(() => {
        resetRaffleCreateDto();
        router.push({ name: 'homeView' });
    }).catch((error) => {
        console.log(error);
    });
}


</script>
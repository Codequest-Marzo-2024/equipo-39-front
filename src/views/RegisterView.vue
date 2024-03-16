<template>
    <main class="flex h-screen items-center justify-center">
        <section v-if="isShowFormIndex == 0" class="p-10 w-full max-w-md z-50 transition-all ease-in-out duration-300">
            <img class=" h-[10rem] sm:h-[12rem] xl:h-[15rem] 2xl:h-[15rem] w-full mb-5 flex justify-center"
                src="../assets/img/dt_logo.svg" alt="logo-Dt">
            <h1 class="text-center text-2xl font-normal text-white mb-[6rem] lg:mb-5 md:mb-5 xl:mb-5">
                BIENVENIDO AL SORTEO DEVTALLES
            </h1>
            <h1 class="text-center text-2xl font-normal text-white mb-5 lg:mb-2 xl:mb-2">Ingrese sus datos</h1>
            <form class="z-40 p-8" action="#">
                <myinput :type="'text'" :label="'Nombre de usuario'" v-model="formBody.name" />
                <myinput :type="'text'" :label="'Discord Id'" v-model="formBody.discordId" />
                <div class="w-full flex justify-center">
                    <myButton @Click="isShowFormIndex = 1" text="Participar" class="p-4" />
                </div>
            </form>
        </section>
        <section v-else-if="isShowFormIndex == 1"
            class="p-10 w-full max-w-md mb-12 z-50 transition-all ease-in-out duration-300">
            <article class="flex flex-col items-center justify-center w-full">
                <img class=" h-[10rem] sm:h-[12rem] xl:h-[15rem] 2xl:h-[15rem] w-full flex justify-center mb-20 lg:mb-5 md:mb-5 xl:mb-5"
                    src="../assets/img/dt_logo.svg" alt="logo-Dt">

                <div
                    class="w-[10.5rem] h-[10.5rem] rounded-full bottom-4 border-[3px] border-[#08FF08] flex items-center justify-center mb-10 p-4">
                    <img class="h-[7.5rem] sm:h-[12rem] xl:h-[15rem] 2xl:h-[15rem] w-full flex justify-center"
                        src="../assets/img/success.svg" alt="trophy">
                </div>
                <h1 class="text-center text-3xl font-normal mb-[6rem] text-white">Registro exitoso <br>
                    ${Nombre del sorteo}</h1>

                <div class="w-full flex justify-center">
                    <myButton @Click="isShowFormIndex = 0" text="Volver" class="p-4" />
                </div>
            </article>
        </section>
        <section v-else-if="isShowFormIndex == 2"
            class="p-10 w-full max-w-md mb-12 z-50 transition-all ease-in-out duration-300">
            <article class="flex flex-col items-center justify-center w-full">
                <img class=" h-[10rem] sm:h-[12rem] xl:h-[15rem] 2xl:h-[15rem] w-full flex justify-center mb-20 lg:mb-5 md:mb-5 xl:mb-5"
                    src="../assets/img/dt_logo.svg" alt="logo-Dt">

                <div
                    class="w-[10.5rem] h-[10.5rem] rounded-full bottom-4 border-[3px] border-[#FC9D68] flex items-center justify-center mb-10 p-4">
                    <img class="h-[7.5rem] sm:h-[12rem] xl:h-[15rem] 2xl:h-[15rem] w-full flex justify-center"
                        src="../assets/img/warning.svg" alt="trophy">
                </div>
                <h1 class="text-center text-3xl font-normal mb-[6rem] text-white">Registro fallido ya esta
                    registrado <br> ${Nombre del sorteo}</h1>

                <div class="w-full flex justify-center">
                    <myButton @Click="isShowFormIndex = 0" text="Volver" class="p-4" />
                </div>
            </article>
        </section>
        <section v-else-if="isShowFormIndex == 3"
            class="p-10 w-full max-w-md mb-12 z-50 transition-all ease-in-out duration-300">
            <article class="flex flex-col items-center justify-center w-full">
                <img class=" h-[10rem] sm:h-[12rem] xl:h-[15rem] 2xl:h-[15rem] w-full flex justify-center mb-20 lg:mb-5 md:mb-5 xl:mb-5"
                    src="../assets/img/dt_logo.svg" alt="logo-Dt">

                <div
                    class="w-[10.5rem] h-[10.5rem] rounded-full bottom-4 border-[3px] border-[#DF1111] flex items-center justify-center mb-10 p-4">
                    <img class="h-[7.5rem] sm:h-[12rem] xl:h-[15rem] 2xl:h-[15rem] w-full flex justify-center"
                        src="../assets/img/danger.svg" alt="trophy">
                </div>
                <h1 class="text-center text-3xl font-normal mb-[6rem] text-white">Registro fallido datos
                    incorrectos <br> ${Nombre del sorteo}
                </h1>

                <div class="w-full flex justify-center">
                    <myButton @Click="isShowFormIndex = 0" text="Volver" class="p-4" />
                </div>
            </article>
        </section>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import myButton from '../components/button.vue'
import myinput from '../components/input.vue';

let isShowFormIndex = ref(2)

const formBody = ref({
    name: "",
    discordId: ""
});
</script>
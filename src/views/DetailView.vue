<template>
    <myHeader />


    <main class="flex flex-col h-screen">

        <welcome :title="`Detalle Sorteo #${raffleId}`" />

        <section class="w-full h-full flex justify-center items-center relative z-30">
            <div
                class="gap-5 mb-5 p-2 h-full md:h-full xl:h-[95%] 2xl:h-[95%] absolute overflow-auto w-full max-w-md md:max-w-md lg:max-w-2xl xl:max-w-2xl 2xl:max-w-2xl">
                <article
                    class="flex flex-col justify-between cursor-pointer space-y-3 h-fit text-sm rounded-xl w-full p-4 bg-white border-l-[0.3rem] border-l-[#FC9D68]">
                    <header class="flex items-center justify-between font-bold">
                        <span class="uppercase text-xs text-[#401E79]">
                            {{ formatDate(raffleDetail?.initialDate || new Date().toDateString()) }}
                            <span class="text-[#401E79]">-</span>
                            {{ formatDate(raffleDetail?.finalDate || new Date().toDateString()) }}
                        </span>

                        <span class="text-xs text-[#401E79]">Total: {{ raffleDetail?._count.Participant || 0 }}</span>
                    </header>
                    <div class="flex flex-row items-center space-x-3">
                        <figure
                            class="flex flex-none items-center justify-center w-10 h-10 rounded-full bg-[#FC9D68] text-white">
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                            </svg>
                        </figure>
                        <p class="text-base text-[#401E79] font-semibold">{{ raffleDetail?.name }}</p>
                    </div>
                    <p class="font-medium text-[#401E79]">{{ raffleDetail?.description }}</p>
                    <section class="grid grid-cols-4 w-full h-fit gap-5 px-5">
                        <div class="h-fit flex flex-col gap-3 col-span-3 ">
                            <button @click="goToChooseWinner()"
                                class="bg-[#401E79] hover:bg-[#401E79] text-white w-full rounded-md text-center font-semibold p-2">
                                Elegir Ganador
                            </button>
                            <button @click="shareUrlInClipboard()"
                                class="bg-[#401E79] hover:bg-[#401E79] text-white w-full rounded-md text-center font-semibold p-2">
                                Compartir Sorteo
                            </button>
                        </div>
                        <button
                            class="bg-[#401E79] hover:bg-[#401E79] text-white w-full rounded-md flex justify-center items-center font-semibold p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-14 h-14">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </button>
                    </section>
                </article>
                <!-- fin -->
                <h1 class="text-start text-xl md:text-2xl xl:text-2xl 2xl:text-2xl font-bold my-5 text-white">
                    Participantes Registrados
                </h1>
                <section class="h-full w-full">
                    <article v-for="participant in participantList" :key="participant.id"
                        class="inline-flex justify-start items-center cursor-pointer gap-5 py-4 my-2 h-fit text-sm rounded-xl w-full p-4 bg-white border-l-[0.3rem] border-l-[#FC9D68]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-fit h-[2.5rem]">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <header class="flex flex-col items-start font-bold gap-2">
                            <span class="uppercase text-xs text-[#401E79]">{{ participant.username }}</span>
                            <span class="text-xs text-[#401E79]">{{ participant.idPlatform }}</span>
                        </header>
                    </article>
                </section>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import myHeader from '../components/header.vue';
import useRaffle from '../composables/useRaffle';
import welcome from '../components/welcome.vue';
import useParticipants from '../composables/useParticipants';
import useDates from '../common/composables/useDates';


const route = useRoute();
const router = useRouter();
const raffleId = route.params.raffleId as string;

const { formatDate } = useDates();
const { raffleDetail, findOneRaffle, shareUrlInClipboard, } = useRaffle();
const { participantList, findParticipantsByRaffle } = useParticipants();

findOneRaffle(+raffleId);
findParticipantsByRaffle(+raffleId);

const goToChooseWinner = () => {
    router.push({ name: 'chooseView', params: { raffleId } });
}

</script>

<style scoped></style>
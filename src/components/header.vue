<template>
    <header
        class="h-fit w-full fixed top-0 z-50 bg-[#401E79] shadow md:flex justify-between items-center px-2 lg:px-5 xl:px-8 2xl:px-8 ">
        <img class="h-[4.5rem] w-auto" src="../assets/img/dt_logo.svg" alt="logo-Dt">
        <span @click="menuOpen()" class="absolute md:hidden right-6 top-5 cursor-pointer">
            <i>
                <svg v-if="!open" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    class="w-7 h-7 text-[#FC9D68]">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg v-else class="w-7 h-7 text-[#FC9D68]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                    </path>
                </svg>
            </i>
        </span>
        <ul class="md:flex md:items-center bg-[#401E79] md:px-0  md:pb-0 pb-10 md:static absolute md:w-auto w-full 
      top-[4.5rem] duration-700 ease-in px-12" :class="[open ? 'left-0' : 'left-[-100%]']">
            <li v-for="link in links" class="md:mx-4 md:my-0 my-6">
                <router-link class="text-xl text-white hover:text-[#FC9D68]" :to="link.link">{{ link.name
                    }}</router-link>
            </li>
        </ul>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let open = ref(false);

let links = [
    { name: "Inicio", link: "/" },
    { name: "Crear Sorteo", link: "/raffle/create" }
]

const menuOpen = () => {
    open.value = !open.value
}
</script>
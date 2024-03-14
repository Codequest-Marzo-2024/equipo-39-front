<template>
    <main class="flex h-screen items-center justify-center bg-[#2F096E]">
        <section class="p-10 w-full max-w-md z-50">
            <img class="h-[15rem] w-full flex justify-center" src="../assets/img/dt_logo.svg" alt="logo-Dt">
            <h1 class="text-center text-2xl font-bold mb-5 text-white">Iniciar Sesión</h1>
            <form action="#">
                <div class="mb-5 w-full">
                    <input type="email" required class="border border-gray-300 rounded-md w-full p-2"
                        placeholder="Ingrese su email">
                </div>
                <!-- <div class="mb-5 w-full">
                    <input type="password" required class="border border-gray-300 rounded-md w-full p-2"
                        placeholder="Ingrese su contraseña">
                </div> -->
                <div class="relative mb-5 w-full">
                    <input type="password"
                        class="block border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:border-blue-600 peer placeholder-transparent"
                        placeholder=" " v-model="password" />
                    <label for="floating_label"
                        class="absolute top-2 left-3 text-gray-500 transition-all transform -translate-y-2.5 scale-75 origin-left peer-placeholder-shown:translate-y-0 
        peer-placeholder-shown:scale-100 peer-focus:-translate-y-2.5 peer-focus:scale-75 peer-empty:translate-y-0 peer-empty:scale-100">
                        Texto flotante</label>
                </div>
                <div class="w-full flex justify-center">
                    <myButton text="Ingresar" />
                </div>
            </form>
        </section>
        <div class="absolute bottom-5 right-5 z-10">
            <div class="fixed bottom-0 right-0 w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[250px] md:h-[250px]
                 xl:w-[350px] xl:h-[350px] 2xl:w-[350px] 2xl:h-[350px] bg-[#FC9D68] rounded-tl-full">
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import myButton from '../components/button.vue'

let password = ref('');
</script>

<style scoped>
input:placeholder-shown:not(:focus)+label {
    transform: translate-y(2.5rem) scale(1);
}

input:not(:placeholder-shown)+label,
input:focus+label {
    transform: translate-y(0) scale(0.75);
}
</style>

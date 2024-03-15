<template>
    <main class="flex h-screen items-center justify-center">
        <section class="p-10 w-full max-w-md mb-12 z-50">
            <img class=" h-[10rem] sm:h-[12rem] xl:h-[15rem] 2xl:h-[15rem] w-full mb-5 flex justify-center"
                src="../assets/img/dt_logo.svg" alt="logo-Dt">
            <h1 class="text-center text-2xl font-bold mb-5 text-white">Iniciar Sesión</h1>
            <form class="z-40 " action="#">
                <div class="relative mb-5 w-full">
                    <input type="email"
                        class="block border-2 border-[#FC9D68] bg-[#2F096E] text-white rounded-md w-full p-3 focus:outline-none focus:border-[#FC9D68] peer placeholder-transparent"
                        v-model="bodyLogin.userName" ref="emailInput" @focus="isFocused.email = true"
                        @blur="isFocused.email = false" />
                    <label for="floating_label"
                        :class="{ 'translate-y-0 scale-100 peer-focus:bg-[#2F096E]': bodyLogin.userName === '' && !isFocused.email, '-translate-y-[1.45rem] scale-100 peer-focus:bg-[#2F096E]': bodyLogin.userName !== '' || isFocused.email }"
                        class="absolute top-3 left-3 text-white px-2 transition-all transform origin-left  bg-[#2F096E]">
                        Email</label>
                </div>
                <div class="relative mb-10 w-full">
                    <input type="password"
                        class="block border-2 border-[#FC9D68] bg-[#2F096E] text-white rounded-md w-full p-3 focus:outline-none focus:border-[#FC9D68] peer placeholder-transparent"
                        v-model="bodyLogin.password" ref="passwordInput" @focus="isFocused.password = true"
                        @blur="isFocused.password = false" />
                    <label for="floating_label"
                        :class="{ 'translate-y-0 scale-100 peer-focus:bg-[#2F096E]': bodyLogin.password === '' && !isFocused.password, '-translate-y-[1.45rem] scale-100 peer-focus:bg-[#2F096E]': bodyLogin.password !== '' || isFocused.password }"
                        class="absolute top-3 left-3 text-white px-2 transition-all transform origin-left  bg-[#2F096E]">
                        Contraseña</label>
                </div>
                <router-link class="w-full flex justify-center" to="/homeView">
                    <myButton route="/nepe" text="Ingresar" />
                </router-link>
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
import { ref } from 'vue'
import myButton from '../components/button.vue'

let isFocused = ref({ email: false, password: false });

const bodyLogin = ref({
    userName: "",
    password: ""
});
</script>
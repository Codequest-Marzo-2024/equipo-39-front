<template>
  <main class="flex h-screen items-center justify-center">
    <section class="p-10 w-full max-w-md mb-12 z-50">
      <img
        class="h-[10rem] sm:h-[12rem] xl:h-[15rem] 2xl:h-[15rem] w-full mb-5 flex justify-center"
        src="../assets/img/dt_logo.svg"
        alt="logo-Dt"
      />

      <h1 class="text-center text-2xl font-bold mb-5 text-white">
        Iniciar Sesión
      </h1>

      <form class="z-40" @submit.prevent="onSubmit">
        <myinput
          :type="'email'"
          :label="'Email'"
          v-model="loginForm.email"
          id="email"
        />

        <myinput
          :type="'password'"
          :label="'Contraseña'"
          v-model="loginForm.password"
          id="password"
        />

        <div class="w-full flex justify-center">
          <myButton text="Ingresar" :type="'submit'" />
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
import { useRouter } from 'vue-router';
import myButton from '../components/button.vue';
import myinput from '../components/input.vue';
import useAuth from '../composables/useAuth';

const router = useRouter();

const { loginForm, login, logout } = useAuth();

const onSubmit = () => {
  login().then(() => {
    router.push({ name: 'homeView' });
  });
};

logout();
</script>

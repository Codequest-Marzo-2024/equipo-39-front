<template>
    <section class="h-fit w-full p-6 mt-[4.5rem] gap-5 inline-flex justify-between flex-wrap">
        <div class="h-fit w-fit flex flex-col">
            <h1 class="text-white font-semibold text-lg md:text-lg xl:text-xl 2xl:text-xl">
                Bienvenido, {{ user.email }}
            </h1>
            <h2 class="text-white font-semibold text-lg md:text-lg xl:text-xl 2xl:text-xl">
                {{ title }}
            </h2>
        </div>
    </section>
</template>

<script setup lang="ts">
import useAuth from '../composables/useAuth';

interface Props {
    title: string;
}

defineProps<Props>();

const { user } = useAuth();
</script>

<style scoped></style>
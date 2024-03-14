<template>
    <button type="submit" class="bg-white text-[#2F096E] text-xl font-bold rounded-[5rem] w-[70%] p-2">
        {{ props.text}}</button>
</template>

<script setup lang="ts">
const props = defineProps({
    text: String,
});
</script>
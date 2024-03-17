<template>
    <button :type="type" class="bg-white text-[#2F096E] text-xl font-bold rounded-[5rem] w-[70%] p-2">
        {{ props.text }}
    </button>
</template>

<script setup lang="ts">
interface Props {
    text: string;
    type?: 'submit' | 'button';
}

const props = withDefaults(defineProps<Props>(), {
    type: 'button',
    text: 'Label'
});
</script>
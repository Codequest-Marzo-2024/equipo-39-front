<template>
    <div class="relative mb-5 w-full">
        <input :type="type"
            class="block border-2 border-[#FC9D68] bg-[#2F096E] text-white rounded-md w-full p-3 focus:outline-none focus:border-[#FC9D68] peer placeholder-transparent"
            v-model="value" ref="inputRef" @focus="isFocused = true" @blur="isFocused = false" />
        <label for="floating_label"
            :class="{ 'translate-y-0 scale-100 peer-focus:bg-[#2F096E]': value === '' && !isFocused, '-translate-y-[1.45rem] scale-100 peer-focus:bg-[#2F096E]': value !== '' || isFocused }"
            class="absolute top-3 left-3 text-white px-2 transition-all transform origin-left bg-[#2F096E] pointer-events-none">
            {{ label }}
        </label>
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect, defineProps, defineEmits } from 'vue';

const props = defineProps({
    type: String,
    label: String,
    modelValue: String,
});

const emit = defineEmits(['update:modelValue']);

const value = ref(props.modelValue);
const isFocused = ref(false);

watchEffect(() => {
    emit('update:modelValue', value.value);
});
</script>
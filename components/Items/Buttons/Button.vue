<template>
    <button class="menu-button-item" :class="{'button-primary': isPrimary}">{{ title }}</button>
</template>


<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Connexion'
    },

    isPrimary: {
        type: Boolean,
        default: false
    }
});
</script>


<style scoped>
.menu-button-item {
    @apply w-full py-4 bg-button rounded-lg flex justify-center items-center;
    @apply text-base font-semibold tracking-wide text-white;
}

.button-primary {
    @apply bg-purple;
    @apply hover:bg-hover-purple hover:transition-all hover:duration-300 transition-all duration-300;
}
</style>
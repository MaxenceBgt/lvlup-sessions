<template>
    <NuxtLink :to="link" class="menu-button-item" :class="{'menu-button-primary': isPrimary}">
        <slot></slot>
    </NuxtLink>
</template>


<script setup>
const props = defineProps({
    link: {
        type: String,
        default: '#',
    },

    isPrimary: {
        type: Boolean,
        default: false,
    }
});
</script>


<style scoped>
.menu-button-item {
    @apply max-h-10 px-4 py-2 bg-button rounded-md;
    @apply text-base font-semibold tracking-wide text-white;
}

.menu-button-primary {
    @apply bg-purple transition-all duration-300;
    @apply hover:bg-hover-purple hover:transition-all hover:duration-300;
}
</style>

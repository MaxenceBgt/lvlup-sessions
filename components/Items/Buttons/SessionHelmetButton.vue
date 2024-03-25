<template>
    <div class="helmet-button-container">
        <button class="helmet-button" :class="{'button-active': helmetSelected === 'casque1'}" @click="updateHelmetSelected()">Casque 1</button>
        <button class="helmet-button" :class="{'button-active': helmetSelected === 'casque2'}" @click="updateHelmetSelected()">Casque 2</button>
    </div>
</template>


<script setup>
const props = defineProps({
    helmetSelected: {
        type: String,
        default: 'casque1'
    }
});


const emits = defineEmits([
    'updateHelmetSelected'
]);

function updateHelmetSelected() {
    emits('updateHelmetSelected')
}
</script>


<style scoped>
.helmet-button-container {
    @apply h-[72px] p-1.5 bg-card rounded-md flex items-center gap-1.5;
    @apply w-full md:w-fit;
}

.helmet-button {
    @apply w-full md:w-fit px-5 h-full bg-transparent rounded cursor-pointer;
    @apply text-sm font-semibold tracking-wide text-white capitalize;
    @apply hover:bg-hover-purple hover:transition-all hover:duration-300 transition-all duration-300;
}


/*------- ACTIVE BUTTON -------*/
.button-active {
    @apply bg-purple pointer-events-none;
}
</style>
<template>
    <NuxtLink :to="{ path: '/session', query: { date, helmet }}" class="vr-button-session" :class="{'button-disabled': isDisabled}">
        {{ dayjs(date).format("HH:mm") }}
    </NuxtLink>
</template>


<script setup>
const dayjs = useDayjs()

const props = defineProps({
    date: {
        type: String,
        date: '1977-01-01T12:30'
    },

    helmet: {
        type: String,
        default: 'casque1'
    },

    isDisabled: {
        type: Boolean,
        default: false
    }
})
</script>


<style scoped>
.vr-button-session {
    @apply w-full h-fit py-4 md:py-8 bg-purple rounded-lg flex justify-center items-center;
    @apply text-lg font-semibold tracking-wide text-white text-center uppercase;
    @apply hover:bg-hover-purple hover:transition-all hover:duration-300 transition-all duration-300;
}

.button-disabled {
    @apply bg-card pointer-events-none;
}
</style>
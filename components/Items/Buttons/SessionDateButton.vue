<template>
    <button class="vr-session-date-button" :class="{'button-active': isActive, 'button-mobile': !isDesktop}" @click="updateDateSelected">
        <p class="session-text">{{ dayjs(sessionDate).format("dddd") }}</p>
        <p class="session-text session-date">{{ dayjs(sessionDate).format("D") }}</p>
        <p class="session-text">{{ dayjs(sessionDate).format("MMM") }}</p>
    </button>
</template>


<script setup>
const dayjs = useDayjs()
const { isDesktop } = useDevice()

const props = defineProps({
    sessionDate: {
        type: String,
        default: '01-01-1977'
    },

    isActive: {
        type: Boolean,
        default: false
    }
})

const emits = defineEmits([
    'updateDateSelected'
])


function updateDateSelected(){
    emits('updateDateSelected', props.sessionDate)
}
</script>


<style scoped>
.vr-session-date-button {
    @apply w-28 h-[72px] bg-card rounded-lg flex flex-col items-center justify-center cursor-pointer;
    @apply border-[3px] border-solid hover:border-hover-purple border-button;
}

.session-text {
    @apply text-sm font-semibold tracking-wide text-white capitalize;
}

.session-date {
    @apply text-lg leading-6 font-bold;
}


/*---------- BUTTON STATES ----------*/
.button-active {
    @apply border-[3px] border-solid border-purple pointer-events-none;
}

.button-mobile {
    @apply w-full;
}
</style>
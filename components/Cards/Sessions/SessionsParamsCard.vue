<template>
    <section class="sessions-params-card">
        <div class="sessions-dates-container" v-if="isDesktop">
            <SessionDateButton v-for="(sessionDate, n) in sessionDates" :sessionDate="sessionDate" :isActive="sessionDate === sessionDateSelected" 
            @updateDateSelected="updateDateSelected" :key="n"/>
        </div>

        <Swiper v-if="!isDesktop" class="sessions-dates-mobile"
            :modules="[SwiperFreeMode]"
            :slidesPerView="2.9"
            :spaceBetween="6"
        >
            <SwiperSlide v-for="(sessionDate, n) in sessionDates" :key="n">
                <SessionDateButton :sessionDate="sessionDate" :isActive="sessionDate === sessionDateSelected" 
                @updateDateSelected="updateDateSelected"/>
            </SwiperSlide>
        </Swiper>
        
        <SessionHelmetButton :helmetSelected="helmetSelected" @updateHelmetSelected="updateHelmetSelected" />
    </section>
</template>


<script setup>
const { isDesktop } = useDevice()

const sessionDates = ref([]) 
const sessionDateSelected = ref('01-01-1977')
const helmetSelected = ref('casque1')


const emits = defineEmits([
    'updateSessionParamsSelected'
])

onMounted(async () => {
    await $fetch('/api/getThursdays', {
        method: 'GET'
    }).then((res) => {
        sessionDates.value = res.thursdaysArray
        sessionDateSelected.value = sessionDates.value[0]
    })

    emits("updateSessionParamsSelected", sessionDateSelected.value, helmetSelected.value)
})

function updateHelmetSelected() {
    helmetSelected.value = helmetSelected.value === 'casque1' ? 'casque2' : 'casque1'
    emits("updateSessionParamsSelected", sessionDateSelected.value, helmetSelected.value)
}

function updateDateSelected(date) {
    sessionDateSelected.value = date
    emits("updateSessionParamsSelected", sessionDateSelected.value, helmetSelected.value)
}
</script>


<style scoped>
.sessions-params-card {
    @apply w-full flex items-center gap-6;
    @apply flex-col justify-end lg:flex-row lg:justify-start;
}


.sessions-dates-container {
    @apply w-fit flex items-center gap-1.5;
}


.sessions-dates-mobile {
    @apply w-full;
}
</style>
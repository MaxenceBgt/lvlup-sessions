<template>
    <div class="table-row-container">
        <p class="table-row">{{ tableRaw.users.lastname }}</p>
        <p class="table-row">{{ tableRaw.users.firstname }}</p>
        <p class="table-row">{{ tableRaw.users.email }}</p>
        <p class="table-row">{{ dayjs(tableRaw.date).format("DD MMMM YYYY - HH:mm") }}</p>
        <p class="table-row">{{ tableRaw.casque }}</p>
    </div>
</template>


<script setup>
const dayjs = useDayjs()

const props = defineProps({
    tableRaw: {
        type: Object,
        default: {users: {firstname: "Maxence", lastname: "BIGOT", email: "maxence.bigot@reseau.eseo.fr"}, date: "2024-03-28T13:00", casque: "casque1"}
    }
})
</script>


<style scoped>
.table-row-container {
    @apply w-full h-16 px-12 bg-button border-b border-solid border-card;
    @apply grid grid-cols-5 gap-3 items-center;
}


.table-row {
    @apply text-base font-semibold tracking-wide text-gray-light;
}
</style>
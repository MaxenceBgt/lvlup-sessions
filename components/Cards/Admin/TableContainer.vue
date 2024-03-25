<template>
    <section class="table-container">
            <div class="table-head-row">
                <p class="table-row">Nom</p>
                <p class="table-row">Prénom</p>
                <p class="table-row">Email</p>
                <p class="table-row">Horaire</p>
                <p class="table-row">Casque</p>
            </div>

        <slot />
    </section>
</template>


<style scoped>
.table-container {
    @apply w-full rounded-xl overflow-hidden;
}

.table-head-row {
    @apply w-full h-11 px-12 grid grid-cols-5 gap-3 bg-card items-center;
}

.table-row {
    @apply w-full text-base font-bold tracking-wide text-gray-dark text-left uppercase;
}
</style>
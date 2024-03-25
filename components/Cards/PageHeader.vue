<template>
    <section class="page-header-container">
        <div class="header-texts-container">
            <p class="header-title">Vous avez envie de tester la VR ?</p>
            <p class="header-subtitle">Venez réserver une session avec nos casques pendant 30 minutes le jeudi après-midi</p>
        </div>

        <NuxtLink to="#session" class="header-button">
            Réserver
            <i class="uil uil-arrow-right button-icon"></i>
        </NuxtLink>
    </section>
</template>


<style scoped>
.page-header-container {
    background-image: radial-gradient(#0000004D, #00000000), url('/img/HeaderBar.webp');
    @apply w-full h-[364px] pb-14 bg-cover bg-center bg-no-repeat;
    @apply flex flex-col justify-end items-center gap-11;
}


/*---------- HEADER TEXTS ----------*/
.header-texts-container {
    @apply w-full px-8 md:w-fit md:px-0 max-w-[536px] flex flex-col items-center gap-2.5;
}

.header-title {
    @apply text-4xl font-bold tracking-wide text-white text-center;
}

.header-subtitle {
    @apply text-xl font-semibold tracking-wide text-gray-light text-center;
}


/*---------- HEADER BUTTON ----------*/
.header-button {
    @apply px-7 py-3 bg-purple rounded-lg flex items-center gap-5;
    @apply hover:bg-hover-purple hover:transition-all hover:duration-300 transition-all duration-300;
    @apply text-base font-semibold tracking-wide text-white capitalize;
}

.button-icon {
    @apply text-2xl leading-6 text-white;
}
</style>
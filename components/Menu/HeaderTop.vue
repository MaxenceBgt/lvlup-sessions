<template>
    <section class="header-top-container">
        <NuxtLink to="/" class="logo-container">
            <img class="logo-image" src="/Logo.png" alt="Logo" />
            <p class="logo-title">Lvl+Up</p>
        </NuxtLink>

        <div class="header-buttons-container">
            <MenuButton link="/admin">Admin</MenuButton>
            <MenuButton link="/user/profile" v-if="user" isPrimary>Profil</MenuButton>
            <MenuButton link="/user/login" v-else isPrimary>Connexion</MenuButton>
        </div>
    </section>
</template>


<script setup>
const user = useSupabaseUser();
</script>


<style scoped>
.header-top-container {
    @apply w-full h-16 px-[3%] bg-card flex justify-between items-center;
    @apply fixed z-50 top-0 left-0;
}


/*-------- LOGO CONTAINER --------*/
.logo-container {
    @apply flex items-center gap-2;
}

.logo-image {
    @apply h-10 aspect-square rounded-full;
}

.logo-title {
    @apply text-2xl font-bold tracking-wide text-white font-fredoka;
}


/*-------- BUTTONS CONTAINER --------*/
.header-buttons-container {
    @apply flex items-center gap-3 md:gap-5;
}
</style>
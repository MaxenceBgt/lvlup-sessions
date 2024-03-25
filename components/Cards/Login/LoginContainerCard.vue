<template>
    <section class="login-container-card">
        <h1 class="login-title">{{ name }}</h1>

        <form class="login-form" @submit.prevent="handleSubmit">
            <slot />
        </form>

        <p class="login-other-method" v-if="name === 'connexion'">Pas de compte ? 
            <NuxtLink to="/user/register" class="other-method-link"> Inscrivez-vous</NuxtLink>
        </p>
        <p class="login-other-method" v-else>Déjà un compte ? 
            <NuxtLink to="/user/login" class="other-method-link"> Connectez-vous</NuxtLink>
        </p>
    </section>
</template>


<script setup>
const props = defineProps({
    name: {
        type: String,
        default: 'connexion'
    }
});

const emits = defineEmits([
    'formSubmitted'
]);

function handleSubmit() {
    emits('formSubmitted');
}
</script>


<style scoped>
.login-container-card {
    @apply p-5 bg-card rounded-lg flex flex-col items-center gap-6;
    @apply w-full md:w-[500px];
}

.login-title {
    @apply text-2xl font-semibold tracking-wide text-white text-center capitalize; 
}


/*-------- LOGIN FORM --------*/
.login-form {
    @apply w-full flex flex-col gap-4;
}


/*-------- OTHER METHOD --------*/
.login-other-method {
    @apply text-base font-semibold tracking-wide text-gray-light;
}

.other-method-link {
    @apply text-purple transition-all duration-300;
    @apply hover:text-hover-purple hover:transition-all hover:duration-300;
}
</style>
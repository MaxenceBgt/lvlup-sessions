<template>
    <section class="session-validate-container" :class="{'session-validate-mobile': !isDesktop}">
        <h2 class="session-title">Entrer vos coordonnées (Nom, Prénom)</h2>

        <form class="session-name-form" method="post" @submit.prevent="validateSession()">
            <InputItem name="Nom" type="text" v-model="prenom" placeholder="John"/>
            <InputItem name="Prénom" type="text" v-model="nom" placeholder="Doe"/>
            <Button title="Valider la session" isPrimary/>
        </form>
    </section>
</template>


<script setup>
const { isDesktop } = useDevice()
const prenom = ref('');
const nom = ref('');


const emits = defineEmits([
    'updateValidateSession'
]);

function validateSession() {
    emits('updateValidateSession', prenom.value, nom.value);
}
</script>


<style scoped>
.session-validate-container {
    @apply w-full h-full px-[22.4%] py-8 bg-card rounded-xl flex flex-col items-center gap-7;
}


.session-title {
    @apply text-xl font-semibold tracking-wide text-white text-center;
}


.session-name-form {
    @apply w-full h-full flex flex-col justify-center items-center gap-6;
}


/*-------- SESSION MOBILE --------*/
.session-validate-mobile {
    @apply px-4 py-4 items-center;
}
</style>
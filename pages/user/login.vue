<template>
    <main class="content login-page">
        <LoginContainerCard name="connexion" @formSubmitted="submitLogin">
            <InputItem name="Email" type="email" v-model="email" placeholder="prenom.nom@reseau.eseo.fr"/>
            <InputItem name="Mot de passe" v-model="password" type="password" placeholder="••••••••"/>
            <NuxtLink to="/user/password-forgot" class="forgot-password-title">Mot de passe oublié ?</NuxtLink>

            <Button title="Connexion" isPrimary/>
        </LoginContainerCard>
    </main>
</template>


<script setup>
const supabase = useSupabaseClient();
const router = useRouter();

const email = ref('');
const password = ref('');

async function submitLogin(){
    const { error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    });

    if(error) {
        alert(error.message);
    }
    else {
        router.push('/user/profile');
    }
}


/*------- METADATA AND MIDDLEWARE -------*/
useHead({
    title: 'LvlUp - ESEO | Connexion'
})

definePageMeta({
    middleware: 'login-auth'
})
</script>


<style scoped>
.login-page {
    @apply w-full h-[calc(100vh-4rem)] flex justify-center items-center;
    @apply px-4 md:px-0;
}

.forgot-password-title {
    @apply text-sm font-semibold tracking-wide text-purple text-right;
    @apply hover:text-hover-purple hover:transition-all hover:duration-300 transition-all duration-300;
}
</style>
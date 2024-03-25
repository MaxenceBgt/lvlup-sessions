<template>
    <main class="content login-page">
        <LoginContainerCard name="inscription" @formSubmitted="submitRegister">
            <InputItem name="Email" type="email" v-model="email" placeholder="prenom.nom@reseau.eseo.fr"/>
            <InputItem name="Mot de passe" v-model="password" type="password" placeholder="••••••••"/>
            <InputItem name="Confirmation Mot de passe" v-model="confirmPassword" type="password" placeholder="••••••••"/>

            <Button title="Inscription" isPrimary/>
        </LoginContainerCard>
    </main>
</template>


<script setup>
const supabase = useSupabaseClient();
const router = useRouter();

const firstname = ref('');
const lastname = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

async function submitRegister(){
    if(password.value == confirmPassword.value) {
        const fullname = `${firstname.value} ${lastname.value}`;

        const { error } = await supabase.auth.signUp({
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
    else {
        alert('Les mots de passe ne correspondent pas');
    }
}

/*------- METADATA AND MIDDLEWARE -------*/
useHead({
    title: 'LvlUp - ESEO | Inscription'
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

.form-name-container {
    @apply w-full grid grid-cols-2 gap-4;
}

.forgot-password-title {
    @apply text-sm font-semibold tracking-wide text-purple text-right;
    @apply hover:text-hover-purple hover:transition-all hover:duration-300 transition-all duration-300;
}
</style>
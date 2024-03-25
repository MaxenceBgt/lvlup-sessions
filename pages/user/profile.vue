<template>
    <main class="content">
        <p v-if="user">{{ user.email }}</p>


        <button class="px-5 py-5 bg-red rounded-md text-white" @click="signOut">Déconnexion</button>
    </main>
</template>


<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();

function signOut() {
    supabase.auth.signOut();
    router.push('/');
}


/*------- METADATA AND MIDDLEWARE -------*/
useHead({
    title: 'LvlUp - ESEO | Mon profil'
})

definePageMeta({
    middleware: 'auth'
})
</script>
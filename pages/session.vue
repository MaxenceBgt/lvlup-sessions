<template>
    <main class="content page-content session-page" :class="{'session-page-mobile': !isDesktop}">
        <SessionDetailContainer>
            <div class="sidebar-infos-container">
                <div class="session-item-container">
                    <p class="session-title">Séance du</p>
                    <p class="session-data">{{ dayjs(date).format("D MMMM YYYY - HH:mm") }}</p>
                </div>

                <div class="session-item-container">
                    <p class="session-title">Casque</p>
                    <p class="session-data">{{ helmet }}</p>
                </div>
            </div>

            <Button title="Annuler" @click="cancelSession()"></Button>
        </SessionDetailContainer>

        <SessionValidateContainer @updateValidateSession="updateValidateSession">
        </SessionValidateContainer>
    </main>
</template>


<script setup>
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const dayjs = useDayjs();
const { isDesktop } = useDevice();

const supabase = useSupabaseClient();
const user = useSupabaseUser();

const date = route.query.date;
const helmet = route.query.helmet;


onMounted(async () => {
    await supabase.from('sessions').update({selected: true}).eq('date', date).eq('casque', helmet).then();
});


/*------- FUNCTIONS -------*/
async function cancelSession() {
    await supabase.from('sessions').update({selected: false}).eq('date', date).eq('casque', helmet).then(() => {
        router.back();
    });
}

async function updateValidateSession(prenom, nom) {
    await supabase.from('sessions').update({selected: true, user: user.value.id}).eq('date', date).eq('casque', helmet).then(async() => {
        await supabase.from('users').update({firstname: prenom, lastname: nom}).eq('id', user.value.id).then(() => {
            router.push('/user/profile');
        });
    });
}


useHead({
    title: 'LvlUp - ESEO | Session ' + dayjs(date).format("D MMMM YYYY - HH:mm") + ' - ' + helmet,
});


definePageMeta({
    middleware: 'session'
})
</script>


<style scoped>
.session-page {
    @apply grid grid-cols-[276px_auto_276px] gap-11;
}

.sidebar-infos-container {
    @apply w-full flex flex-col gap-5;
}


/*------- SIDEBAR CONTENT -------*/
.session-item-container {
    @apply w-full flex flex-col gap-0.5;
}

.session-title {
    @apply text-base font-medium tracking-wide text-gray-light;
}

.session-data {
    @apply text-base font-semibold tracking-wide text-white capitalize;
}


/*------- SIDEBAR MOBILE -------*/
.session-page-mobile {
    @apply w-full flex flex-col gap-6;
}
</style>
<template>
    <div class="content">
        <PageHeader></PageHeader>

        <div class="page-content sessions-menu-container" id="session">
            <h2 class="sessions-menu-title">Nos sessions</h2>
            <SessionsParamsCard class="-mt-4" @updateSessionParamsSelected="updateSessionParamsSelected"></SessionsParamsCard>

            <section class="vr-sessions-container">
                <SessionButton v-for="(session, n) in VRSessions" :date="session.date" :helmet="session.casque" :isDisabled="session.selected" :key="n"/>
            </section>
        </div>
    </div>
</template>


<script setup>
import { getVRSessions } from '~/assets/js/getVRSessions'
const supabase = useSupabaseClient();

const VRSessions = ref([])
let channel = ref(null);


onMounted(async () => {
    channel = supabase.channel('public:sessions').on('postgres_changes',{ 
        event: '*', 
        schema: 'public', 
        table: 'sessions' 
    }, async(payload) => {
        if(payload.eventType === "UPDATE"){
            const index = VRSessions.value.findIndex((session) => session.id === payload.old.id)
            VRSessions.value[index] = payload.new
        }
        else {
            VRSessions.value = await getVRSessions(payload.new.date, payload.new.casque)
        }

    }).subscribe()
});

onUnmounted(() => {
    supabase.removeChannel(channel)
})


async function updateSessionParamsSelected(date, helmet){
    VRSessions.value = await getVRSessions(date, helmet)
}


useHead({
    title: 'LvlUp - ESEO | Réservation de sessions VR'
})
</script>


<style scoped>

/*------- SESSIONS MENU -------*/
.sessions-menu-container {
    @apply w-full flex flex-col items-start gap-7;
}

.sessions-menu-title {
    @apply text-2xl font-bold tracking-wide text-white capitalize;
}


/*---------- VR SESSIONS CONTAINER ----------*/
.vr-sessions-container {
    @apply w-full min-h-[192px] grid grid-cols-3 gap-3 md:grid-cols-5 md:gap-4;
}
</style>
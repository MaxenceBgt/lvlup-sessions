<template>
    <main class="content page-content admin-page">
        <SessionsParamsCard @updateSessionParamsSelected="updateSessionParamsSelected"></SessionsParamsCard>

        <TableContainer>
            <TableRow v-for="(VRSession, n) in VRSessions" :tableRaw="VRSession" v-if="VRSessions.length > 0" :key="n"></TableRow>
            <p class="text-empty-container" v-else>Aucune session n'a été prise pour cette date et casque</p>
        </TableContainer>
    </main>
</template>


<script setup>
import { getVRSessionsSelected } from '~/assets/js/getVRSessionsSelected'
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
            VRSessions.value = await getVRSessionsSelected(payload.new.date, payload.new.casque)
        }
        else if(payload.eventType === "DELETE"){
            const index = VRSessions.value.findIndex((session) => session.id === payload.old.id)
            VRSessions.value.splice(index, 1)
        }

        console.log(payload)
    }).subscribe()
});

onUnmounted(() => {
    supabase.removeChannel(channel)
})


async function updateSessionParamsSelected(date, helmet){
    VRSessions.value = await getVRSessionsSelected(date, helmet)
}


/*------- REFERENCEMENT -------*/
useHead({
    title: 'LvlUp - ESEO | Admin Panel'
})

definePageMeta({
    middleware: 'admin'
})
</script>


<style scoped>
.admin-page {
     @apply w-full flex flex-col gap-9;
}


.text-empty-container {
    @apply h-48 bg-button flex justify-center items-center;
    @apply text-base font-semibold tracking-wide text-gray-dark;
}
</style>
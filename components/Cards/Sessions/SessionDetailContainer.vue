<template>
    <section class="session-detail-container" :class="{'session-detail-mobile': !isDesktop}">
        <img class="session-image" src="/img/oculus.webp" v-if="isDesktop"/>

        <div class="sidebar-content">
            <slot />
        </div>
    </section>
</template>


<script setup>
const { isDesktop } = useDevice()
</script>


<style scoped>
.session-detail-container {
    @apply w-full h-full bg-card rounded-xl overflow-hidden;
    @apply flex flex-col items-center gap-3;
}

.session-detail-mobile {
    @apply h-fit;
}


/*-------- SESSION IMAGE --------*/
.session-image {
    @apply w-full aspect-video object-cover object-center;
}


/*-------- SIDEBAR CONTENT --------*/
.sidebar-content {
    @apply w-full h-full p-3 flex flex-col justify-between items-center;
}
</style>
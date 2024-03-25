<template>
    <div class="input-item-container">
        <p class="input-title">{{ name }}</p>
        <div class="input-container">
            <input class="input-item" :type="passwordType" :placeholder="placeholder" @input.prevent="updateModel" required/>

            <div v-if="type === 'password'" @click="updatePasswordState()">
                <i class="uil uil-eye input-password" v-if="passwordState"></i>
                <i class="uil uil-eye-slash input-password" v-if="!passwordState"></i>
            </div>
        </div>
    </div>
</template>


<script setup>
const model = defineModel()
const passwordState = ref(false)
const passwordType = ref('password')

const props = defineProps({
    type: {
        type: String,
        default: 'text'
    },

    name: {
        type: String,
        default: 'InputItem'
    },

    placeholder: {
        type: String,
        default: 'exemple de placeholder'
    }
});


onMounted(() => {
    passwordType.value = props.type
})

function updateModel(e) {
    model.value = e.target.value
}

function updatePasswordState(){
    passwordState.value = !passwordState.value
    passwordType.value = passwordState.value ? 'text' : 'password'
}



</script>


<style scoped>
.input-item-container {
    @apply w-full flex flex-col gap-1;
}


/*-------- INPUT TITLE --------*/
.input-title {
    @apply text-base font-semibold tracking-wide text-gray-light;
}


/*-------- INPUT ITEM--------*/
.input-container {
    @apply w-full px-5 bg-button rounded-lg;
    @apply flex justify-between items-center gap-1.5;
}

.input-item {
    @apply w-full py-4 text-base font-semibold tracking-wide text-white;
    @apply placeholder:text-gray-dark;
}


/*-------- INPUT PASSWORD ICONS --------*/
.input-password {
    @apply text-2xl text-gray-dark cursor-pointer;
}
</style>
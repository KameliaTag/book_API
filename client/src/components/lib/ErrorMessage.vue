<script setup>
const props = defineProps({
    error: String,
    default: ''
})
</script>

<template>
    <div class="px-4 py-2 text-amber-900" v-show="error">
        {{error}}
    </div>
</template>
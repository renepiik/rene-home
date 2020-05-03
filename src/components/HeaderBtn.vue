<template>
    <button class="header-btn" @click="scrollTo">
        {{ desc }}
    </button>
</template>

<script>
export default {
    name: 'HeaderBtn',
    props: {
        desc: String,
        fun: Function
    },
    methods: {
        scrollTo() {
            this.$emit('clicked')
        }
    }
}

</script>

<style>

</style>
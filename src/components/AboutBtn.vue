<template>
    <button
        @click="openLink"
        class="about-link-button"
        v-bind:class="link_class">
        <span>{{title}}</span>
    </button>
</template>

<script>
export default {
    name: 'AboutBtn',
    props: {
        title: String,
        link_class: String,
        link: String
    },
    methods: {
        openLink() {
            this.$emit('clicked')
        }
    }
}
</script>

<style scoped>

.about-link-button {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.about-link-button:hover {
    background-color: var(--tertiary-color);
}

.github-button:hover {
    background-color: #adadad;
}

.linkedin-button:hover {
    background-color: rgb(89, 151, 209);
    --shadow-strong:
        0 0px 8px rgba(89,151,209,.05), 
        0 0px 16px rgba(89,151,209,.2),
        0 0px 24px rgba(89,151,209,.2);
}
</style>
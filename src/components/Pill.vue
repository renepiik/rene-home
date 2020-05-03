<template>
    <div class="pill">{{title}}</div>
</template>

<script>
export default {
    name: 'Pill',
    props: {
        title: String
    }
}
</script>

<style scoped>
.pill {
    font-family: 'PT Mono', monospace;
    font-size: small;

    background-color: var(--primary-color);
    color: var(--paragraph-color);

    border-radius: 16px;

    padding: .5rem 1rem;
    margin: 0 .2rem;
}
</style>
<template>
    <article 
        class="project-card shadow"
        @click="openApp">
        <img 
            v-if="image_src"
            class="project-image"
            :src="image_src"
            alt="projekti pilt">
        <h2 class="project-title">
            {{title.toUpperCase()}}
        </h2>
        <span class="project-link">{{link}}</span>
        <p class="project-desc">
            {{desc}}
        </p>
        <div class="pills-container">
            <pill 
                v-for="tech in techs"
                :key="tech"
                :title="tech">
            </pill>
        </div>
    </article>
</template>

<script>
import Pill from "./Pill";

export default {
    name: 'Project',
    components: {
        Pill
    },
    props: {
        title: String,
        image_src: String,
        desc: String,
        techs: Array,
        link: String
    },
    methods: {
        openApp: function() {
            window.open(this.link);
        }
    }
}
</script>

<style scoped>
.project-card {
    border-radius: 4px;
    padding: 1rem;
    transition: all 0.3s;
    box-shadow: var(--shadow-light);
    margin: 2rem 0;
}

.project-card:hover {
    box-shadow: var(--shadow-strong);
    transition: all 0.3s;
    cursor: pointer;
}

.project-card > img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
    padding-top: 1rem; 
}

.project-title {
    font-family: 'PT Mono', monospace;
    color: var(--big-text-color);
    padding: 0 1rem;
    margin-bottom: .5rem;
}

.project-link {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: .9rem;

    padding-left: 1rem;
    text-decoration: none;
    color: var(--tertiary-color);
}

.project-desc {
    font-family: Roboto, Helvetica, sans-serif;
    color: var(--paragraph-color);
    padding-left: 1rem;
    padding-top: 1rem;
}

.pills-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    margin-top: 2rem;
    margin-left: 1rem;
}
</style>
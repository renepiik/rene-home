<template>
    <section id="projects-section">
        <h2 class="section-header">Projektid</h2>
        <Project
            v-for="project in projects"
            :key="project.title"
            :image_src="project.image_src"
            :title="project.title"
            :desc="project.desc"
            :techs="project.techs"
            :link="project.link">
        </Project>
    </section>
</template>

<script>
import Project from "./Project";
import ProjectsJSON from "../assets/projects.json"

export default {
    name: 'ProjectsSection',
    components: {
        Project
    },
    data: function() {
        return {
            projects: []
        }
    },
    created: function() {
        this.projects = ProjectsJSON.projects
    }
}
</script>

<style scoped>
#projects-section {
    margin-top: 4rem;
}
</style>
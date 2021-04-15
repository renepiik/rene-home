<template>
  <section id="projects-section">
    <h2 class="section-header">{{ $t("projects.header") }}</h2>
    <Project
      v-for="project in $t('projects.projects')"
      :key="project.title"
      :image_src="project.image_src"
      :title="project.title"
      :desc="project.desc"
      :techs="project.techs"
      :link="project.link"
    ></Project>
  </section>
</template>

<script>
import Project from "./Project";

export default {
  name: "ProjectsSection",
  components: {
    Project
  },
};
</script>

<style scoped>
#projects-section {
  margin: 2rem auto;
}
</style>
<template>
  <section id="about-section">
    <h1 class="section-header">{{ $t("about.header") }}</h1>
    <p v-for="par in $t('about.body')" v-bind:key="par" class="about-text"> {{ par }} </p>
    <div class="about-buttons">
      <AboutBtn link_class="github-button" title="GitHub" @clicked="openGithub"></AboutBtn>
      <AboutBtn link_class="linkedin-button" title="LinkedIn" @clicked="openLinkedin"></AboutBtn>
      <AboutBtn link_class="twitter-button" title="Twitter" @clicked="openTwitter"></AboutBtn>
    </div>
  </section>
</template>

<script>
import AboutBtn from "./AboutBtn.vue";

export default {
  name: "AboutSection",
  components: {
    AboutBtn
  },
  methods: {
    openGithub() {
      window.open("https://github.com/renepiik");
    },
    openLinkedin() {
      window.open("https://www.linkedin.com/in/ren%C3%A9-piik-b19092162/");
		},
    openTwitter() {
      window.open("https://twitter.com/renepiik");
    },
  }
};
</script>

<style scoped>
.about-text {
  text-align: justify;
  margin: 0.5rem 0;
}

.about-buttons {
  display: flex;
  flex-direction: row;
  align-self: flex-start;
}

#about-section {
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
}
</style>
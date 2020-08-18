<template>
  <section id="about-section">
    <h2 class="section-header">Tere</h2>
    <p class="about-text">Mina olen René. Õpin praegu Tartu Ülikoolis matemaatikat teoreetilise informaatika kallakuga.</p>
    <p
      class="about-text"
    >Vabal ajal kokkan, pildistan, loen raamatuid ja teen trenni.</p>
    <div class="about-buttons">
      <AboutBtn link_class="github-button" title="GitHub" @clicked="openGithub"></AboutBtn>
      <AboutBtn link_class="linkedin-button" title="LinkedIn" @clicked="openLinkedin"></AboutBtn>
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
    }
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
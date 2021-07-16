<template>
  <div class="about-area">
    <section id="about-section">
      <h1 class="section-header">{{ $t("about.header") }}</h1>
      <p v-for="par in $t('about.body')" v-bind:key="par" class="about-text"> {{ par }} </p>
      <div class="about-buttons">
        <AboutBtn link_class="github-button" title="GitHub" @clicked="openGithub"></AboutBtn>
        <AboutBtn link_class="linkedin-button" title="LinkedIn" @clicked="openLinkedin"></AboutBtn>
        <AboutBtn link_class="twitter-button" title="Twitter" @clicked="openTwitter"></AboutBtn>
      </div>
    </section>
    <div class="image-sidebar">
      <img v-if="$resize && $mq.above(993)" id="photo-of-me" src="../../public/me.jpeg">
      <img v-else id="small-photo-of-me" src="../../public/me-small.jpeg">
    </div>
  </div>
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

.about-area {
  display: flex;
  flex-direction: row;
}

#photo-of-me {
  max-width: 20rem;
  margin-left: 2rem;
  border-radius: 5px;
  box-shadow: var(--shadow-light);
}

#small-photo-of-me {
  max-width: 12rem;
  margin-left: 2rem;
  border-radius: 5px;
  display: block;
  box-shadow: var(--shadow-light);
}

@media screen and (max-width: 992px) {
  .about-area {
    flex-direction: column;
  }

  #small-photo-of-me {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
<template>
  <header class="page-header">
    <span class="header-hero">
			<router-link :to="{ name: 'Home', params: {lang: this.$i18n.locale} }">
				<HeaderBtn desc="🏠 RENÉ PIIK"></HeaderBtn>
			</router-link>
		</span>
    <div class="header-buttons">
			<router-link :to="{ name: 'Projects', params: {lang: this.$i18n.locale} }">
				<HeaderBtn v-bind:desc='$t("nav.projects")'></HeaderBtn>
			</router-link>
			<router-link :to="{ name: 'Notes', params: {lang: this.$i18n.locale} }">
				<HeaderBtn v-bind:desc='$t("nav.notes")'></HeaderBtn>
			</router-link>
      <div id="locale-switch">
        <button id="et-lang" v-on:click="changeLangToEt">et</button>
        /
        <button id="en-lang" class="selected" v-on:click="changeLangToEn">en</button>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderBtn from "./HeaderBtn.vue";

export default {
  name: "PageHeader",
  components: {
    HeaderBtn
  },
  methods: {
    changeLangToEt: function(event) {
      if (!event.target.classList.contains("selected")) {
        document.querySelector("#en-lang").classList.remove("selected")
        event.target.classList.add("selected")
        this.changeLocale('et')
      }
    },
    changeLangToEn: function(event) {
      if (!event.target.classList.contains("selected")) {
        document.querySelector("#et-lang").classList.remove("selected")
        event.target.classList.add("selected")
        this.changeLocale('en')
      }
    },
    changeLocale: function(lang) {
      const to = this.$router.resolve({
        params: { lang: lang }
      });

      this.$i18n.locale = lang;

      this.$router.push(to.location);
    }
  }
};
</script>

<style scoped>
a {
	text-decoration: none;
}

.page-header {
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
}

.header-hero {
  font-family: "PT Mono", monospace;
}

.header-buttons {
  --shadow-strong: 0 0px 8px rgba(255, 142, 60, 0.05),
    0 0px 16px rgba(255, 142, 60, 0.2), 0 0px 24px rgba(255, 142, 60, 0.2);

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}

button.selected {
  background-color: var(--paragraph-color);
  color: var(--background-color);
}

#locale-switch > button {
  display: inline;
}
</style>
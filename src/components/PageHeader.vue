<template>
  <header class="page-header">
    <span class="header-hero">
      <router-link @click.native="navButtonPressed" :to="{ name: 'Home', params: {lang: this.$i18n.locale} }">
        <HeaderBtn v-if="$resize && $mq.above(660)" desc="🏠 RENÉ PIIK"></HeaderBtn>
        <HeaderBtn v-else desc="🏠"></HeaderBtn>
      </router-link>
		</span>
    <div v-if="$resize && $mq.above(660)" class="header-buttons">
			<router-link @click.native="navButtonPressed" :to="{ name: 'Projects', params: {lang: this.$i18n.locale} }">
				<HeaderBtn v-bind:desc='$t("nav.projects")'></HeaderBtn>
			</router-link>
			<router-link @click.native="navButtonPressed" :to="{ name: 'Notes', params: {lang: this.$i18n.locale} }">
				<HeaderBtn v-bind:desc='$t("nav.notes")'></HeaderBtn>
			</router-link>
      <theme-toggle-button></theme-toggle-button>
    </div>
    <div v-else class="header-buttons">
      <theme-toggle-button></theme-toggle-button>
      <button @click="toggleMenu" class="menu-button">
        |||
      </button>
      <div class="nav-buttons hidden">
        <router-link @click.native="navButtonPressed" :to="{ name: 'Projects', params: {lang: this.$i18n.locale} }">
          <HeaderBtn v-bind:desc='$t("nav.projects")'></HeaderBtn>
        </router-link>
        <router-link @click.native="navButtonPressed" :to="{ name: 'Notes', params: {lang: this.$i18n.locale} }">
          <HeaderBtn v-bind:desc='$t("nav.notes")'></HeaderBtn>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderBtn from "./HeaderBtn.vue";
import ThemeToggleButton from './ThemeToggleButton.vue';

export default {
  name: "PageHeader",
  components: {
    HeaderBtn,
    ThemeToggleButton
  },
  methods: {
    toggleMenu: function() {
      const classes = document.querySelector('.nav-buttons').classList;
      if (classes.contains('hidden')) {
        classes.remove('hidden')
      }
      else {
        classes.add('hidden')
      }
    },
    navButtonPressed: function() {
      const navButtons = document.querySelector('.nav-buttons');

      if (navButtons !== null) {
        if (!navButtons.classList.contains('hidden')) {
          navButtons.classList.add('hidden')
        }
      }
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

@media screen and (max-width: 660px) {
  .page-header {
    justify-content: space-between;
  }
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

.nav-buttons {
  opacity: 1;
  position: fixed;
  box-shadow: var(--shadow-light);
  background-color: var(--background-color);
  top: 4rem;
  right: 2rem;

  transition: 150ms all ease-in-out;
  transform: scale(1);

  z-index: 1;
}

.hidden {
  opacity: 0;
  transform: scale(0);
}
</style>
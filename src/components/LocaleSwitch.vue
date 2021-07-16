<template>
  <div id="locale-switch">
        <button id="et-lang" v-bind:class="{ selected: this.$i18n.locale === 'et' }" v-on:click="changeLangToEt">et</button>
        /
        <button id="en-lang" v-bind:class="{ selected: this.$i18n.locale === 'en' }" v-on:click="changeLangToEn">en</button>
    </div>
</template>

<script>
export default {
    name: "LocaleSwitch",
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
        },
    }
}
</script>

<style scoped>
#locale-switch > button {
  display: inline;
}

button.selected {
  background-color: var(--paragraph-color);
  color: var(--background-color);
}
</style>
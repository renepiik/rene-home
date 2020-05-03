<template>
    <section id="about-section">
        <h2 class="section-header">Minust</h2>
        <p class="about-text">
            Olen Tartu Ülikooli matemaatika ja teoreetilise informaatika bakalaureuseõppe tudeng. Tööalaselt olen kokku puutunud PHP-ga (Yii framework), MySQL-ga ja JavaScriptiga (jQuery, Vue.js). Analüüsisin sügisel Tartu observatooriumi jaoks Pythoniga esimesi andmeid rahvusvahelisest J-PAS projektist. Soovin tarkvaraarenduses rakendada muuhulgas ka oma teadmisi matemaatikast ning ei karda keerulisi ega mahukaid projekte.
        </p>
        <div class="about-buttons">
            <AboutBtn
                link_class="github-button"
                title="GitHub"
                @clicked="openGithub"
            ></AboutBtn>
            <AboutBtn
                link_class="linkedin-button"
                title="LinkedIn"
                @clicked="openLinkedin"
            ></AboutBtn>
        </div>
    </section>
</template>

<script>
import AboutBtn from './AboutBtn.vue';

export default {
    name: 'AboutSection',
    components: {
        AboutBtn
    },
    methods: {
        openGithub() {
            window.open("https://github.com/renepiik")
        },
        openLinkedin() {
            window.open("https://www.linkedin.com/in/ren%C3%A9-piik-b19092162/")
        }
    }
}
</script>

<style scoped>
.about-text {
    text-align: justify;
}

.about-buttons {
    display: flex;
    flex-direction: row;
    align-self: flex-start;
}

#about-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4rem;
}
</style>
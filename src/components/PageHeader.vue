<template>
    <header class="page-header">
        <span class="header-hero">RENÉ PIIK</span>
        <div class="header-buttons">
            <HeaderBtn 
                @clicked="scrollToProjects"
                desc="PROJEKTID"></HeaderBtn>
            <HeaderBtn 
                @clicked="scrollToAbout"
                desc="MINUST"></HeaderBtn>
        </div>
    </header>
</template>

<script>
import HeaderBtn from './HeaderBtn.vue'

export default {
    name: 'PageHeader',
    components: {
		HeaderBtn
    },
    methods: {
        scrollToProjects: function() {
            document.getElementById('projects-section').scrollIntoView()
        },
        scrollToAbout: function() {
            document.getElementById('about-section').scrollIntoView()
        }
    }
}
</script>

<style scoped>
.page-header {
    width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
}

.header-hero {
    font-family: 'PT Mono', monospace;
}

.header-buttons {
    --shadow-strong:
        0 0px 8px rgba(255, 142, 60,.05), 
        0 0px 16px rgba(255, 142, 60,.2),
        0 0px 24px rgba(255, 142, 60,.2);
    
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
}
</style>
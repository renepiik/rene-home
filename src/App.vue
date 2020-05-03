<template>
	<div id="app">
		<PageHeader></PageHeader>

		<ProjectsSection></ProjectsSection>
		<AboutSection></AboutSection>
	</div>
</template>

<script>
import PageHeader from "./components/PageHeader";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";

export default {
	name: 'App',
	components: {
		PageHeader,
		ProjectsSection,
		AboutSection
	}
}
</script>

<style>
@keyframes fade-in {
    from {opacity: 1;}
    to {opacity: 0;}
}

@keyframes fade-out {
    from {opacity: 1;}
    to {opacity: 0;}
}

#fader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999999;
    pointer-events: none;
    background-color: var(--background-color);

    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
}

#fader.fade-in {
    opacity: 1;
    animation-name: fade-in;
}

#fader.fade-out {
    opacity: 0;
    animation-name: fade-out;
}

:root {
	--background-color: #fffffe;
	--primary-color: rgb(255, 142, 60);
	--secondary-color: #eff0f3;
	--tertiary-color: #d9376e;
	--big-text-color: #0d0d0d;
	--paragraph-color: #2a2a2a;

	--shadow-light: 
			0 0px 16px rgba(166,173,201,.2);
	--shadow-strong:
			0 0px 8px rgba(154,160,185,.05), 
			0 0px 16px rgba(166,173,201,.2),
			0 0px 24px rgba(166,173,201,.2);
}

#app {
	display: flex;
	flex-direction: column;
	align-items: center;
}

html {
		scroll-behavior: smooth;
}

body {
		margin: 0;
		padding: 0;
		background-color: var(--background-color);
}


section {
		max-width: 40rem;
		margin: 0 1rem;
}

p {
		font-family: 'Roboto', Arial, Helvetica, sans-serif;
		color: var(--paragraph-color);
		line-height: 1.5;
}

button {
		display: block;

		background-color: var(--background-color);
		font-family: 'PT Mono', monospace;
		font-size: 1rem;

		border: 0;
		border-radius: 4px;
		padding: .7rem;
		margin: .5rem;
}

button:hover {
		background-color: var(--primary-color);
		box-shadow: var(--shadow-strong);
		transition-property: all;
		transition-duration: 0.5s;
}

.section-header {
    font-family: 'PT Mono', monospace;
    margin-bottom: 1rem;
}
</style>

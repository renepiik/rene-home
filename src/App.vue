<template>
  <div id="app">
    <PageHeader></PageHeader>
		<div class="app-section">
			<router-view></router-view>
		</div>
    <Footer></Footer>
  </div>
</template>

<script>
import PageHeader from "./components/PageHeader";
import Footer from "./components/Footer";
//import ImageSection from "./components/ImageSection";

export default {
  name: "App",
  components: {
    PageHeader,
    Footer
    // ImageSection
	},
	methods: {
		goBack() {
			window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
		}
	},
};
</script>

<style>
@keyframes fade-in {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
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
  --background-color: #fdf9f2;
  --primary-color: #ff8e3c;
  --secondary-color: #eff0f3;
  --tertiary-color: #f777a1;
  --big-text-color: #0d0d0d;
  --paragraph-color: #2a2a2a;
	--link-color: #202b66;

  --shadow-light: 0 0px 16px rgba(166, 173, 201, 0.2);
  --shadow-strong: 0 0px 8px rgba(154, 160, 185, 0.05),
    0 0px 16px rgba(166, 173, 201, 0.2), 0 0px 24px rgba(166, 173, 201, 0.2);
}

[data-theme="darkMode"] {
  /*
  --background-color: #222831;
  */
  --background-color: #202020;
  --primary-color: #ff8e3c;
  --secondary-color: #30475e;
  --tertiary-color: #f777a1;
  --big-text-color: #ececec;
  --paragraph-color: #ececec;
	--link-color: #adbad1;

  --shadow-light: 0px 0px 8px rgba(166, 173, 201, 0.2);
  --shadow-strong: 0 0px 8px rgba(154, 160, 185, 0.05),
    0 0px 16px rgba(166, 173, 201, 0.2), 0 0px 24px rgba(166, 173, 201, 0.2);
}

* {
  transition: color .45s ease-in;
  transition: background-color 300ms ease-in;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem;
  min-height: 100vh;
}

.app-section {
	margin: 2rem auto;
  flex: 1 0 auto;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--background-color);
  min-height: 100vh;
}

section {
  max-width: 40rem;
  margin: 0 1rem;
}

h1, h2, h3, h4 {
  color: var(--big-text-color);
}

p, ul, a{
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: var(--paragraph-color);
  line-height: 1.6;
}

a {
	color: var(--link-color);
}

ul {
	/*
  list-style: none;
  */
  padding: 0 2rem;
}

ul > li {
  padding-left: 1rem;
  padding-bottom: .7rem;
}

button {
  display: block;

  background-color: var(--background-color);
  color: var(--paragraph-color);
  font-family: "PT Mono", monospace;
  font-size: 1rem;

  border: 0;
  border-radius: 4px;
  padding: 0.7rem;
  margin: 0.5rem;
}

button:hover {
  background-color: var(--primary-color);
  box-shadow: var(--shadow-strong);
  transition-property: all;
  transition-duration: 0.15s;
}

.section-header {
  font-family: "PT Mono", monospace;
  margin-bottom: 1rem;
}

h1.section-header {
	position: relative;
	margin-bottom: 3rem;
  font-size: 2rem;
}
/*
h1.section-header::before {
	position: absolute;
	left: -1.5rem;
	top: 1.4rem;

	height: .8rem;
	width: 10rem;

	transform: skew(-12deg);
	background: rgba(238,111,87,0.4);

	z-index: -1;
	content: "";
}
*/

h2.section-header {
	margin-bottom: 2rem;
	margin-top: 2rem;
}

.timestamp {
  float: right;
}

</style>

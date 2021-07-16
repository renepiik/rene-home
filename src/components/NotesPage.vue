<template>
	<section id="notes-section">
		<!--
		<h2 class="section-header">{{ $t("notes.header") }}</h2>
		-->

		<div class="notes-list">
			<p v-if="$t('notes.links').length === 0">{{ $t("notes.placeholder") }}</p>

			<div v-for="note in $t('notes.links')" :key="note.name" class="note-row">
				<router-link class="note-link" :to="{ name: note.name, params: {lang: $i18n.locale} }" v-if="note.local === true">{{ note.title }}</router-link>
				<p class="local-note-date" v-if="note.local === true">{{ note.date }}</p>

				<a target="_blank" class="note-link" v-else :href="note.link">{{ note.title }}</a>
			</div>

			<notes-placeholder v-if="$t('notes.links').length === 0"></notes-placeholder>
		</div>

		<router-view></router-view>

		<div class="buttons-row">
			<button class="scroll-to-top" @click="scrollToTop">
				👆
			</button>
			<button class="close-note" @click="closeNote">
				❌
			</button>
		</div>
	</section>
</template>

<script>
import NotesPlaceholder from "./NotesPlaceholder";

export default {
	name: "NotesPage",
	components: {
		NotesPlaceholder
	},
	methods: {
		scrollToTop() {
			window.scrollTo(0, 0);
		},
		closeNote() {
			this.$router.push({ name: 'Notes', params: {lang: this.$i18n.locale} });
		}
	}
}
</script>

<style scoped>
#notes-section {
  display: flex;
  flex-direction: column;
  text-align: justify;

  width: min(40rem, 80vw);
}

a {
	text-decoration: none;
}

.note-link {
	transition: 0.3s all;
	font-size: 1.1rem;
}

.note-link:hover {
	transform: translateX(.2rem);
	color: var(--primary-color);
}

.closed {
	display: none;
}

.note-row {
	display: flex;
	flex-direction: row;

	justify-content: space-between;
}

.buttons-row {
	align-self: center;
	display: flex;
	flex-direction: row;
}

.buttons-row > button {
	font-size: 1.2rem;
}

.local-note-date {
	margin: 0;
	font-size: 1.1rem;
	transition: none;
}
</style>
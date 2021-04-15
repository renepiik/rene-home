<template>
	<section id="notes-section">
		<h2 class="section-header">{{ $t("notes.header") }}</h2>

		<p>{{ $t("notes.placeholder") }}</p>

		<notes-placeholder></notes-placeholder>
		<!--
		<p>
			
			Olen siia koondanud suurema osa oma ülikooli õpingute käigus kirjutatud märkmetest, koos täiendustega.
		</p>
		-->
		<!--
		<router-link to='/notes/mmp' class="note-link">Matemaatiline maailmapilt</router-link>
		<router-link to='/notes/km1'>Kõrgem matemaatika I</router-link>
		<router-link to='/notes/ymma'>Ühe muutuja matemaatiline analüüs</router-link>
		-->
	</section>
</template>

<script>
import NotesPlaceholder from "./NotesPlaceholder";

export default {
	name: "NotesPage",
	components: {
		NotesPlaceholder
	}
}
</script>

<style scoped>
#notes-section {
  display: flex;
  flex-direction: column;
  text-align: justify;
}

a {
	text-decoration: none;
}

.note-link {
	transition: 0.3s all;
}

.note-link:hover {
	transform: translateX(1rem);
}
</style>
<template>
	<section id="notes-section">
		<h2 class="section-header">Märkmed</h2>
		<p>
			Olen siia koondanud suurema osa oma ülikooli õpingute käigus kirjutatud märkmetest, koos täiendustega.
		</p>
		<router-link to='/notes/mmp'>> Matemaatiline maailmapilt</router-link>
		<!--
		<router-link to='/notes/km1'>Kõrgem matemaatika I</router-link>
		<router-link to='/notes/ymma'>Ühe muutuja matemaatiline analüüs</router-link>
		-->
	</section>
</template>

<script>
export default {
	name: "NotesPage"
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
</style>
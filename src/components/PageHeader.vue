<template>
  <header class="page-header">
    <span class="header-hero">
			<router-link to='/'>
				<HeaderBtn desc="🏠 RENÉ PIIK"></HeaderBtn>
			</router-link>
		</span>
    <div class="header-buttons">
			<router-link to='/projects'>
				<HeaderBtn desc="👩‍💻 PROJEKTID"></HeaderBtn>
			</router-link>
			<router-link to='/notes'>
				<HeaderBtn desc="📒 MÄRKMED"></HeaderBtn>
			</router-link>
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
</style>
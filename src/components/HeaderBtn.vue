<template>
  <button class="header-btn">{{ desc }}</button>
</template>

<script>
export default {
  name: "HeaderBtn",
  props: {
    desc: String
  },
};
</script>

<style>
button {
  cursor: pointer;
	text-decoration: none;
}
</style>
<template>
  <footer>
    <locale-switch></locale-switch>
    <p>René Piik &copy; 2021</p>
  </footer>
</template>

<script>
import LocaleSwitch from './LocaleSwitch.vue';

export default {
  name: "Footer",
  components: {
    LocaleSwitch
  }
};
</script>

<style scoped>
footer {
  text-align: center;
  display: flex;
  flex-direction: column;
}
</style>
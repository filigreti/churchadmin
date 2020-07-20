<template>
  <main>
    <header-top />
    <router-view />
  </main>
</template>

<script>
import HeaderTop from "../components/HeaderTop";
export default {
  components: {
    HeaderTop
  }
};
</script>

<style>
</style>
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  watch: {
    $route(x) {
      this.$store.commit("default");
    },
  },
  mounted() {
    // Initialize Firebase
    // if (!firebase.apps.length) {
    //   firebase.initializeApp(firebaseConfig);
    //   firebase.analytics();
    // }
  },
};
</script>

<style lang="scss">
* {
  font-family: "Roboto", sans-serif;
}
#app {
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

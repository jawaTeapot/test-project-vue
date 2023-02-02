<template>
  <div class="container">
    <nav><router-link to="/">Home</router-link></nav>
    <router-view />
  </div>
</template>
<script lang="ts" setup>
import { useStore } from "vuex";
import { onMounted } from "vue";

const store = useStore();
onMounted(() => store.dispatch("fetchPeoples"));
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

.container {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

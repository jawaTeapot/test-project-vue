<template>
  <div class="container">
    <nav><router-link to="/">Home</router-link></nav>
    <router-view v-if="!isLoadingPeople" />
    <div v-else>Загрузка...</div>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from "vuex";
import { onMounted, ref } from "vue";
const isLoadingPeople = ref(true);
const store = useStore();
onMounted(async () => {
  try {
    await store.dispatch("fetchPeoples");
  } catch (e) {
    alert("Ошибка");
  } finally {
    isLoadingPeople.value = false;
  }
});
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

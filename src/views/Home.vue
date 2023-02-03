<template>
  <div class="home">
    <h1>
      Test task to Vue3 + Vue Router + Vuex + TypeScript + Setup Syntax App
    </h1>
    <nav>
      <router-link to="/peoples/">Peoples</router-link> |
      <router-link to="/favorites">Favorites</router-link>
    </nav>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.home {
  text-align: center;
}
</style>

<template>
  <h1 style="margin-bottom: 15px">Страница с пользователями</h1>
  <people-list :peoples="store.getters.peopleWithId" />
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import PeopleList from "@/components/PeopleList.vue";

const store = useStore();
</script>

<style scoped lang="scss"></style>

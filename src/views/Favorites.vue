<template>
  <div>
    <h1>This is an about page</h1>
    <people-list :peoples="store.getters.favorites" />
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import PeopleList from "@/components/PeopleList.vue";
const store = useStore();
</script>

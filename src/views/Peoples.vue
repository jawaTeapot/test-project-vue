<template>
  <h1 style="margin-bottom: 15px">Страница с пользователями</h1>
  <my-input v-model="searchQuery" placeholder="Поиск" />
  <div>{{ searchQuery }}</div>
  <my-select v-model="selectedSort" :options="sortOptions" />
  <people-list :peoples="store.getters.peopleWithId" />
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import PeopleList from "@/components/PeopleList.vue";
import MyInput from "@/UI/MyInput.vue";
import MySelect from "@/UI/MySelect.vue";
import { computed, ref, watchEffect, watch } from "vue";
import axios from "axios";
const store = useStore();
const selectedSort = ref("");
const searchQuery = ref("");
const sortOptions = ref([
  { value: "name", name: "По имени" },
  { value: "height", name: "По росту" },
]);

watch(searchQuery, (search) => {
  axios.get(`https://swapi.dev/api/people/?search=${search}`);
});
// const sortedPeople = computed(() => {
//   return [...store.getters.peopleWithId].sort((a: any, b: any) =>
//     a[selectedSort.value]?.localeCompare(b[selectedSort.value])
//   );
// });
// const sortedAndSearchedPeople = computed(() => {
//   return sortedPeople.value.filter((p) =>
//     p.name.toLowerCase().includes(searchQuery.value.toLowerCase())
//   );
// });
// watchEffect(async () => {
//   const response = await store.getters.peopleWithId.sort((a: any, b: any) => {
//     a[selectedSort.value]?.localeCompare(b[selectedSort.value]);
//   });
//   console.log(response);
// });
</script>

<style scoped lang="scss"></style>

<style scoped lang="scss"></style>

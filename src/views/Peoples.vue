<template>
  <h1 style="margin-bottom: 15px">Страница с пользователями</h1>
  <div class="peoples">
    <my-input
      v-model="searchQuery"
      class="peoples__input"
      placeholder="Поиск"
    />
    <div class="peoples__block">
      <div v-for="item in searchList" :key="item">
        <router-link
          :to="{
            name: 'people',
            params: { id: item.url.split('/').reverse()[1] },
          }"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </div>
  <my-select
    v-model="selectedSort"
    style="margin-top: 15px"
    :options="sortOptions"
  />
  <people-list :peoples="sortedPeople" />
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import PeopleList from "@/components/PeopleList.vue";
import MyInput from "@/UI/MyInput.vue";
import MySelect from "@/UI/MySelect.vue";
import { computed, ref, watch } from "vue";
import axios from "axios";
const searchList = ref([]);
const store = useStore();
const selectedSort = ref("");
const searchQuery = ref("");
const sortOptions = ref([
  { value: "name", name: "По имени" },
  { value: "height", name: "По росту" },
]);

watch(searchQuery, async (search) => {
  if (!search.length) {
    return (searchList.value = []);
  }
  const response = await axios.get(
    `https://swapi.dev/api/people/?search=${search}`
  );
  searchList.value = response.data.results;
});

const sortedPeople = computed(() => {
  return [...store.getters.peopleWithId].sort((a: any, b: any) =>
    a[selectedSort.value]?.localeCompare(b[selectedSort.value])
  );
});
// Функционал для input
// const sortedAndSearchedPeople = computed(() => {
//   return sortedPeople.value.filter((p) =>
//     p.name.toLowerCase().includes(searchQuery.value.toLowerCase())
//   );
</script>

<style scoped lang="scss">
.peoples {
  position: relative;
  &__input {
    &:focus {
      .peoples__block {
        display: block;
      }
    }
  }
  &__block {
    background: #ffffff;
    position: absolute;
    top: 55px;
    left: 0;
    border: 1px solid cadetblue;
  }
}
</style>

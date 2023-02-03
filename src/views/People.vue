<template>
  <div>
    {{ people.name }}
  </div>
  <div class="people__btns">
    <my-button v-if="isFavorite" @click="removeFavorite">Удалить</my-button>
    <my-button v-else @click="addFavorite">Добавить</my-button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { PeopleWithId } from "@/types";
import { useFavorite } from "@/composables/useFavorite";
import MyButton from "@/UI/MyButton.vue";

const store = useStore();
const route = useRoute();
const people = computed(() =>
  store.getters.peopleWithId.find((p: PeopleWithId) => p.id == route.params.id)
);
const { isFavorite, removeFavorite, addFavorite } = useFavorite(people.value);
</script>

<style scoped></style>

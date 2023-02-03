<template>
  <h1 style="margin-bottom: 15px">{{ people.name }}</h1>
  <div>
    <div>id: {{ people.id }}</div>
    <div>name: {{ people.name }}</div>
    <div>height: {{ people.height }}</div>
    <div>mass: {{ people.mass }}</div>
    <div>hair_color: {{ people.hair_color }}</div>
    <div>skin_color: {{ people.skin_color }}</div>
    <div>birth_year: {{ people.birth_year }}</div>
    <div>eye_color: {{ people.eye_color }}</div>
    <div>gender: {{ people.gender }}</div>
  </div>
  <div style="margin-top: 15px">
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

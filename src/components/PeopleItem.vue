<template>
  <div class="people">
    <div class="people__item">
      <div style="margin-right: 20px">{{ people.name }}</div>
      <div style="margin-right: 20px">{{ people.height }}</div>
      <div style="margin-right: 20px">{{ people.mass }}</div>
      <div>{{ people.hair_color }}</div>
    </div>
    <div class="people__btns">
      <my-button v-if="isFavorite" @click="removeFavorite">Удалить</my-button>
      <my-button v-else @click="addFavorite">Добавить</my-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyButton from "@/UI/MyButton.vue";
import { useFavorite } from "@/composables/useFavorite";
import { PeopleWithId } from "@/types";
type Props = {
  people: PeopleWithId;
};
const props = defineProps<Props>();

const { isFavorite, removeFavorite, addFavorite } = useFavorite(props.people);
</script>

<style scoped lang="scss">
.people {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin-top: 15px;
  border: 1px solid cadetblue;
  &__item {
    display: flex;
  }
  &__btns {
    display: flex;
    align-items: center;
  }
}
</style>

<template>
  <div class="people">
    <div class="people__item">
      <router-link
        :to="{
          name: 'people',
          params: { id: people.url.split('/').reverse()[1] },
        }"
        class="people__item-li"
        >{{ people.name }}</router-link
      >
      <div class="people__item-li">{{ people.height }}</div>
      <div class="people__item-li">{{ people.mass }}</div>
      <div class="people__item-li">{{ people.hair_color }}</div>
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
  display: grid;
  grid-template-columns: 1fr 230px;
  margin-top: 15px;
  border: 1px solid cadetblue;
  &__item {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    &-li {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px;
      border-right: 1px solid cadetblue;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  &__btns {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

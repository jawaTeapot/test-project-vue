<template>
  <div v-if="peoples.length > 0" class="table">
    <h3>Список пользователей</h3>
    <div class="table__top">
      <div class="table__top-item">name</div>
      <div class="table__top-item">height</div>
      <div class="table__top-item">mass</div>
      <div class="table__top-item">hair_color</div>
      <div class="table__top-item">Add/Remove Favorite</div>
    </div>
    <people-item
      v-for="people in peoples"
      :key="people.id"
      :people="people"
      @remove="$emit('remove', people)"
    />
  </div>
  <h2 v-else style="margin-top: 15px">Список пользователей пуст</h2>
</template>

<script setup lang="ts">
import PeopleItem from "@/components/PeopleItem.vue";

defineProps({
  peoples: { type: Array, required: true },
});
</script>

<style scoped lang="scss">
.table {
  padding: 15px;
  margin-top: 15px;
  border: 1px solid cadetblue;
  h3 {
    margin-top: 15px;
  }
  &__top {
    margin-top: 15px;
    border: 1px solid cadetblue;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    &-item {
      padding: 15px;
      text-align: center;
      border-right: 1px solid cadetblue;
      &:last-child {
        border-right: 0;
      }
    }
  }
}
</style>

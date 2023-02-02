<template>
  <div class="people">
    <div class="people__item">
      <div style="margin-right: 20px">{{ people.name }}</div>
      <div style="margin-right: 20px">{{ people.height }}</div>
      <div style="margin-right: 20px">{{ people.mass }}</div>
      <div>{{ people.hair }}</div>
    </div>
    <div class="people__btns">
      <my-button @click="$emit('remove', people)">Удалить</my-button>
      <my-button>Открыть</my-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyButton from "@/UI/MyButton.vue";

defineProps({
  people: { type: Object, required: true },
});
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
  }
}
</style>

<template>
  <div v-if="peoples.length > 0">
    <h3>Список пользователей</h3>
    <people-item
      v-for="people in peoples"
      :key="people.id"
      :people="people"
      @remove="$emit('remove', people)"
    />
  </div>
  <h2 v-else>Список пользователей пуст</h2>
</template>

<script setup lang="ts">
import PeopleItem from "@/components/PeopleItem.vue";

defineProps({
  peoples: { type: Array, required: true },
});
</script>

<style scoped lang="scss"></style>

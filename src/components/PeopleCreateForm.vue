<template>
  <form class="form" @submit.prevent>
    <h4>Создать пользователя</h4>
    <input v-model="people.name" class="input" type="text" placeholder="name" />
    <input
      v-model="people.height"
      class="input"
      type="text"
      placeholder="height"
    />
    <input v-model="people.mass" class="input" type="text" placeholder="mass" />
    <input v-model="people.hair" class="input" type="text" placeholder="hair" />
    <my-button @click="createPeople">Создать</my-button>
  </form>
</template>

<script setup lang="ts">
import MyButton from "@/UI/MyButton.vue";
import { ref } from "vue";
const people = ref({
  id: Date.now(),
  name: "",
  height: "",
  mass: "",
  hair: "",
});
const emit = defineEmits<{
  (
    e: "create",
    v: {
      id: number;
      name: string;
      height: string;
      mass: string;
      hair: string;
    }
  ): void;
}>();
function createPeople() {
  emit("create", people.value);
  clearPeople();
}
function clearPeople() {
  people.value = {
    id: Date.now(),
    name: "",
    height: "",
    mass: "",
    hair: "",
  };
}
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  .btn {
    margin-top: 15px;
    align-self: flex-end;
  }
}
.input {
  width: 100%;
  border: 1px solid cadetblue;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>

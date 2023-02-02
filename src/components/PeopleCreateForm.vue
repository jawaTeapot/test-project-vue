<template>
  <form class="form" @submit.prevent>
    <h4>Создать пользователя</h4>
    <my-input v-model="people.name" type="text" placeholder="name" />
    <my-input v-model="people.height" type="text" placeholder="height" />
    <my-input v-model="people.mass" type="text" placeholder="mass" />
    <my-input v-model="people.hair_color" type="text" placeholder="hair" />
    <my-button @click="createPeople">Создать</my-button>
  </form>
</template>

<script setup lang="ts">
import MyButton from "@/UI/MyButton.vue";
import { ref } from "vue";
import MyInput from "@/UI/MyInput.vue";
const people = ref({
  id: Date.now(),
  name: "",
  height: "",
  mass: "",
  hair_color: "",
});
const emit = defineEmits<{
  (
    e: "create",
    v: {
      id: number;
      name: string;
      height: string;
      mass: string;
      hair_color: string;
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
    hair_color: "",
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
</style>

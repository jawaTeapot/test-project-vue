<template>
  <h1>Страница с пользователями</h1>
  <my-button @click="showModal">Создать пользователя</my-button>
  <my-modal v-modal:isShow="isModalVisible">
    <people-create-form @create="createPeople" />
  </my-modal>
  <people-list :peoples="peoples" @remove="removePeople" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import PeopleCreateForm from "@/components/PeopleCreateForm.vue";
import PeopleList from "@/components/PeopleList.vue";
import MyModal from "@/UI/MyModal.vue";
import MyButton from "@/UI/MyButton.vue";
const peoples = ref([
  {
    id: 1,
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair: "blond",
  },
  {
    id: 2,
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair: "blond",
  },
  {
    id: 3,
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair: "blond",
  },
]);

const isModalVisible = ref(false);
function createPeople(newPeople: any) {
  peoples.value.push(newPeople);
  isModalVisible.value = !isModalVisible.value;
}
function removePeople(people: any) {
  peoples.value = peoples.value.filter((p) => p.id !== people.id);
}
function showModal() {
  isModalVisible.value = !isModalVisible.value;
}
</script>

<style scoped lang="scss"></style>

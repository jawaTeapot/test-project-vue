<template>
  <select v-model="value" @change="changeOption">
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  modelValue: { type: String },
  options: { type: Array, default: () => [] },
});
const emit = defineEmits<{
  (e: "update:modelValue", v: string): void;
}>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: any) {
    emit("update:modelValue", value);
  },
});

function changeOption(event: any) {
  emit("update:modelValue", event.target.value);
}
</script>

<style scoped></style>

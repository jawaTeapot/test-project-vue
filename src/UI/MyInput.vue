<template>
  <input :value="modelValue" class="input" type="text" @input="updateInput" />
</template>

<script setup lang="ts">
defineProps({
  modelValue: [String, Number],
});

const emit = defineEmits<{
  (e: "update:modelValue", v: number): void;
}>();
function updateInput(event: any) {
  emit("update:modelValue", event.target.value);
}
</script>

<style scoped lang="scss">
.input {
  width: 100%;
  border: 1px solid cadetblue;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>

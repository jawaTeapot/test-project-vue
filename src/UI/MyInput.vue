<template>
  <input :value="value" class="input" type="text" @input="updateInput" />
</template>

<script setup lang="ts">
defineProps({
  value: [String, Number],
});
// updateInput(e) {
//   this.$emit('update:value', e.target.value)
// }
</script>

<style scoped lang="scss">
.input {
  width: 100%;
  border: 1px solid cadetblue;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>

<template>
  <div v-if="isShow === true" class="myModal" @click.stop="hideModal">
    <div class="myModal__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isShow: { type: Boolean, default: false },
});

const emit = defineEmits<{
  (e: "show"): void;
}>();

function hideModal() {
  emit("show");
}
</script>

<style scoped lang="scss">
.myModal {
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  &__content {
    background: #ffffff;
    border-radius: 12px;
    padding: 20px;
    min-height: 100px;
    min-width: 300px;
  }
}
</style>

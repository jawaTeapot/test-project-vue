<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.btn {
  padding: 10px 15px;
  background: none;
  color: cadetblue;
  border: 1px solid cadetblue;
  cursor: pointer;
}
</style>

<template>
  <div class="buttons">
    <b-button @click="increment" variant="primary">Increment</b-button>
    <b-button @click="decrement" variant="info">Decrement</b-button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$emit('updated', 1);
    },
    decrement() {
      this.$emit('updated', -1);
    },
  },
};
</script>

<style lang="scss">
.buttons {
  display: grid;
  grid-template-columns: min-content min-content;
  grid-column-gap: 1rem;
}
</style>

<template>
  <div class="buttons">
    <b-button @click="increment" variant="primary">Increment</b-button>
    <b-button @click="decrement" variant="info">Decrement</b-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'increment',
      'decrement',
    ]),
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

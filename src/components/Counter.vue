<template>
  <div class="buttons">
    <b-button @click="increment({by: 100, timeout: 500})" variant="primary">Increment</b-button>
    <b-button @click="decrement({by: 50, timeout: 500})" variant="info">Decrement</b-button>
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

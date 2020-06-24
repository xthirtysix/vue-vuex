<template>
  <b-container id="app">
    <h1>Vuex</h1>
    <hr>
    <app-result/>
    <app-counter/>
  </b-container>
</template>

<script>
import Counter from './components/Counter.vue';
import Result from './components/Result.vue';

export default {
  components: {
    appCounter: Counter,
    appResult: Result,
  },
};
</script>

<style lang="scss">
@import './scss/custom.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <b-container id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Vuex</h1>
    <app-result :counter="counter"/>
    <app-counter @updated="counter += $event"/>
  </b-container>
</template>

<script>
import Counter from './components/Counter.vue';
import Result from './components/Result.vue';

export default {
  data() {
    return {
      counter: 0,
    };
  },
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

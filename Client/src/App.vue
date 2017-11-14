<template>
  <div id="app">
    <h6> a long line</h6>
    <router-link :to="'items'">items</router-link>
     <router-link :to="'tasks'">tasks</router-link>
     <router-link :to="'storage'">storage</router-link>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

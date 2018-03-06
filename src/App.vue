<template>
  <div id="app">
    <router-link v-bind:to="'/'">Home</router-link>
	<router-link v-bind:to="'/gameDesign'">Game Design</router-link>
    <router-link v-bind:to="'/graphicDesign'">Graphic Design</router-link>
    <router-link v-bind:to="'/photography'">Photography</router-link>
	    <router-link v-bind:to="'/contact'">Contact</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<!-- styling for the component -->
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

<template>
 <MenuComponent/>
 <router-view></router-view>
 <!-- <HomeComponent/> -->
</template>

<script>

import MenuComponent from './components/MenuComponent.vue';
// import HomeComponent from'./components/HomeComponent.vue';
export default {
  name: 'App',
  components: {
   MenuComponent,
  //  HomeComponent

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

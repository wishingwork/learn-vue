<template>
  <div id="app">
    <router-link :to="{path: '/hello'}">Hello</router-link>
    <router-link :to="{name: 'c2f'}">CtoF</router-link>
    <router-link :to="{name: 'c2fmethod'}">CtoF Method</router-link>
    <router-link :to="{name: 'LearnComponent'}">Learn Component</router-link>
    <router-link :to="{name: 'count'}">Count</router-link>
    <router-link :to="{name: 'todos'}">Todos</router-link>    
    <router-link :to="{name: 'shopping'}">Shopping</router-link>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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

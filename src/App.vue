<template>
  <div id="nav">
    <router-link to="/">Home</router-link>  |
    <router-link :to="{ name: 'Home2' }">Home2</router-link>  | 
    <router-link :to="{ name: 'Home3' }">Home3</router-link>  |
    <router-link :to="{ name: 'Home4' }">Home4</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
  background-color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: white
}

#nav a.router-link-exact-active {
  color: #42b983
}

</style>

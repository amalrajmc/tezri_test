<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Slider</router-link> |
      <router-link to="/matrix">Css Matrix</router-link> |
      <router-link to="/Parser">Parser</router-link> |
      <router-link to="/Reverse">Reverse</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body,html{
  background:#f2f3f5!important;
}
</style>

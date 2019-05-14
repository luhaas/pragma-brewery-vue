<template>
  <div id="app">
    <header>
      <h1>PragmaBrewery Code Challenge</h1>
    </header>
    <!-- route content -->
    <router-view/>
    <!-- end route content -->
    <footer>
      <small>Developed by <a href="https://github.com/luhaas" target="_blank">Luíza Haas</a> using Vue.js, ☕ and ❤</small>
    </footer>
  </div>
</template>

<style lang="scss">
/* import global stylesheet */
@import '@/assets/scss/styles.scss';
</style>
<style lang="scss" scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
header {
  background-color: $green-2;
  color: $white;
}
footer {
  border-top: 1px solid $gray-ee;
  background-color: $white;
  padding: 15px 0;
}
</style>

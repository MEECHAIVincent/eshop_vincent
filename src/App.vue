<template>
  <div id="app">
    <Header/>

    <main>
    <router-view/>
    </main>
    
    <Footer/>
  </div>

</template>


<script>
import Header from "./layout/Header"
import Footer from "./layout/Footer"
export default {
  components: {
    Header, Footer
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
</style>

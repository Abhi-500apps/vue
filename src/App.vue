<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">!-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>!-->
    <router-view />
    <props name="Abhishek" age="24"/>
    <!-- <parse</> -->
  </div>
</template>
<script>
// import Table from './components/19-04-22/Test3.vue'
//import TablE1 from'./components/19-04-22/Test4.vue'
//import FoO from './components/20/04/22/mytest9.vue'
// import props from'./components/27-04-22/props.vue'
// import parse from './components/27-04-22/parse.vue'

export default {
  name: 'App',
  components: {
        //FoO
        // props
        //parse
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

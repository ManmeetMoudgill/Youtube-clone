<template>
<div class="container-fluid">

   <Header />
   <div class="container-fluid d-flex">

   <LeftNavbar />
   <CenterPartDiv/>
   </div>
</div>
</template>

<script>

import Header from './components/Header.vue'
import LeftNavbar from './components/LeftNavbar.vue'
import CenterPartDiv from './components/CenterPartDiv.vue'
export default {
  name: 'App',
  components: {
    Header,
    LeftNavbar,
    CenterPartDiv
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
  
}
</style>

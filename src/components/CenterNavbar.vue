<template>
    <div class="container-fluid flex-wrap bord-div d-flex justify-content-between my-1 ">
<hr class="lined" >
  <div class="container-fluid d-flex flex-wrap justify-content-between align-items-center">
       <button class="btn-lg btn-light border-radius-sm">American Idol</button>
        <button class="btn-lg btn-light border-radius-sm">Indian Idol</button>
        <button class="btn-lg btn-light border-radius-sm">Tv Serials</button>
        <button class="btn-lg btn-light border-radius-sm">American Idol</button>
        <button class="btn-lg btn-light border-radius-sm">Indian Idol</button>
        <button class="btn-lg btn-light border-radius-sm">Tv Serials</button>
        <button class="btn-lg btn-light border-radius-sm">American Idol</button>
        <button class="btn-lg btn-light border-radius-sm">Indian Idol</button>
        <button class="btn-lg btn-light border-radius-sm">Tv Serials</button>
  </div>
  <hr class="lined">
    </div>
</template>
<script>
export default {
    name:'CenterNavbar'
}
</script>
<style scoped>
.border-radius-sm{
    border-radius: 80px;
}
.bord-div{
    padding-top: 8px;
    padding-bottom: 8px;
    border-top: 1px solid darkgray;
    border-bottom: 1px solid darkgray;
}
</style>
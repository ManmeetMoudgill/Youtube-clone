<template>
    <div class="video">
        <slot></slot>

    </div>
</template>

<script>
export default {
   name:'CenterDivComponent' 
}
</script>

<style scoped>
.video{
    float: left;
    width:290px;
    height: 200px;
   
    
    margin: 15px;
  

}
</style>
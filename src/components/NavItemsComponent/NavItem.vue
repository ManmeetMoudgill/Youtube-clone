<template>
    <div class="container d-flex my-1 navItemDiv">
        <slot>
        <h4 class=" first-heading text-primary my-0 py-0">Default</h4>
        </slot>    
    </div>
</template>


<script>
export default {
    name:'NavItem',
    props:{
        msg:String
    }
}
</script>

<style scoped>
.navItemDiv{
    border: 2px solid red;
    padding-left: 0px;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 8px;
    cursor: pointer;
}



</style>
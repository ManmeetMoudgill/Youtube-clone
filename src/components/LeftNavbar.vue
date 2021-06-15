<template>
    <div class="container-fluid flex-column d-flex LeftNavbar">
        
        <NavItem msg="Home" />
        <NavItem msg="Explore" />
        <NavItem msg="Subscription" />
        <NavItem msg="Library" />
        <NavItem msg="History" />
        <NavItem msg="Your Videos" />
        <NavItem msg="Watch Later" />
        <NavItem msg="Liked Videos" />
        <NavItem msg="Your Videos" />
    </div>
</template>


<script>
import NavItem from './NavItemsComponent/NavItem.vue'
export default {
    name:'LeftNavbar',
    components:{
        NavItem
    }
   
}
</script>

<style scoped>
.LeftNavbar{
    border: 2px solid red;
    flex-basis:320px
}

</style>
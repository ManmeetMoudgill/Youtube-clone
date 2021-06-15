<template>
    <div class="container-fluid flex-grow-1 CenterPartDiv">
        <CenterNavbar />
        <div class="container-fluid d-flex">

        <h4 class="text-primary">Center Part div</h4>
        </div>
    </div>

</template>
<script>
import CenterNavbar from './CenterNavbar.vue'
export default {
    name:'CenterPartDiv',
    components:{
        CenterNavbar
    }
}
</script>
<style scoped>
.CenterPartDiv{
    border: 2px solid green;
    
}
</style>
<template>
    <div class="container-fluid flex-wrap d-flex justify-content-between header">
       <HeaderLeft />
       
       <HeaderCenter />
         <HeaderRight/>
    </div>
</template>


<script>
import HeaderLeft from './HeaderSubComponent/HeaderLeft.vue'
import HeaderCenter from './HeaderSubComponent/HeaderCenter.vue' 


import HeaderRight from './HeaderSubComponent/HeaderRight.vue' 


export default {
    name:'Header',
    components:{
       HeaderLeft,
        HeaderCenter, 
        HeaderRight 
    }
}
</script>


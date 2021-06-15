/* copy beanch */
<template>
    <div class="container-fluid flex-grow-1 CenterPartDiv">
        <CenterNavbar />
       
<!-- first div -->
        <CenterDivComponent>
            <div class="container d-flex container-first-image">
                <img class="image-first-div" src="../assets/yoga.jpg" alt="Yoga">
            </div>

            <!-- second container
             -->
            <div class="container-fluid mx -0 my-0 d-flex align-items-stretch container-second">
                <!-- left part div -->
                <div class="left-part">
                    <img id="img" class="style-scope yt-img-shadow round-image" alt="Avatar image" height="50" width="50" src="https://yt3.ggpht.com/yti/ANoDKi6Q83GGUGLCthNtL56hyUE78X-IlTf0yxaKgA=s88-c-k-c0x00ffffff-no-rj-mo">
                </div>
                <!-- right part div -->
                <div class="right-part">
                    <h4 class="text-dark"><a href="" class="text-dark anchor">Mens's Pyhisque</a></h4>
                    <div class="right-bottom-part">
                        <h6 class="text-dark text-align-left">Manmeet</h6>
                        <div class="container d-flex align-items-center justify-content-between">
                        <h6 class="text-dark">1M Views </h6><h6 class="text-dark"> 7 Days Ago</h6>

                        </div>
                    </div>
                </div>
            </div>
        </CenterDivComponent>  
 
        </div>
    

</template>
<script>
import CenterNavbar from './CenterNavbar.vue'
import CenterDivComponent from './CenterPartDivComponents/CenterDivComponent.vue'
export default {
    name:'CenterPartDiv',
    components:{
        CenterNavbar,
        CenterDivComponent
    }
}
</script>
<style scoped>

.image-first-div{
    width: 250;
    height: 200px;
}
.container-first-image{
    padding-left: 0px;
    border: 2px solid;
    
    
}
.anchor{
    text-decoration: none;
}
.text-align-left{
    text-align: left;
    margin-left: 14px;
    margin-bottom: 0px;

}
.container-second{
padding-top: 16px;
padding-left: 4px;
}
.right-part{
    width: 215px;
}

.round-image{
    border-radius: 1.5rem;
}
</style>
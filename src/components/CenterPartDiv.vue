/* copy beanch */
<template>
    <div class="container-fluid flex-grow-1 CenterPartDiv">
        <CenterNavbar />
        <div class="container-fluid d-flex">


<!-- first div -->
        <CenterDivComponent>
            <div class="container container-first-image">
                <img class="image-first-div" src="../assets/yoga.jpg" alt="Yoga">
            </div>

            <!-- second container
             -->
            <div class="container-fluid d-flex align-items-center container-second">
                <img id="img" class=" logo style-scope yt-img-shadow" alt="Avatar image" height="40" width="40" src="https://yt3.ggpht.com/yti/ANoDKi6Q83GGUGLCthNtL56hyUE78X-IlTf0yxaKgA=s88-c-k-c0x00ffffff-no-rj-mo">
               <div class=" container-fluid d-flex justify-content-start flex-column">
                   <div class="upperDiv">
                    <h5 class="text-dark">Bodybuilding show</h5>

                   </div>
                   <div class="lowerDiv d-flex flex-column align-items-center justify-content-start">

                    <h6 class="font-size text-dark mx-2 text-left">Manmeet Vlogs</h6>
                    <div class="container d-flex">
                     <h6 class="font-size text-dark mx-1">1M Views °</h6>
                     <h6 class="font-size text-dark  ">2 Days Ago</h6>
                    </div>
                   </div>
                </div>
              
            </div>
        </CenterDivComponent>  


     <!-- Second Div -->
     
        <CenterDivComponent>
            <div class="container container-first-image">
                <img class="image-first-div" src="../assets/yoga.jpg" alt="Yoga">
            </div>

            <!-- second container
             -->
            <div class="container-fluid d-flex align-items-center container-second">
                <img id="img" class=" logo style-scope yt-img-shadow" alt="Avatar image" height="40" width="40" src="https://yt3.ggpht.com/yti/ANoDKi6Q83GGUGLCthNtL56hyUE78X-IlTf0yxaKgA=s88-c-k-c0x00ffffff-no-rj-mo">
               <div class=" container-fluid d-flex justify-content-start flex-column">
                   <div class="upperDiv">
                    <h5 class="text-dark">Bodybuilding show</h5>

                   </div>
                   <div class="lowerDiv d-flex flex-column align-items-center justify-content-start">

                    <h6 class="font-size text-dark mx-2 text-left">Manmeet Vlogs</h6>
                    <div class="container d-flex">
                     <h6 class="font-size text-dark mx-1">1M Views °</h6>
                     <h6 class="font-size text-dark  ">2 Days Ago</h6>
                    </div>
                   </div>
                </div>
              
            </div>
        </CenterDivComponent>  


   <!-- Third Div -->
   
        <CenterDivComponent>
            <div class="container container-first-image">
                <img class="image-first-div" src="../assets/yoga.jpg" alt="Yoga">
            </div>

            <!-- second container
             -->
            <div class="container-fluid d-flex align-items-center container-second">
                <img id="img" class=" logo style-scope yt-img-shadow" alt="Avatar image" height="40" width="40" src="https://yt3.ggpht.com/yti/ANoDKi6Q83GGUGLCthNtL56hyUE78X-IlTf0yxaKgA=s88-c-k-c0x00ffffff-no-rj-mo">
               <div class=" container-fluid d-flex justify-content-start flex-column">
                   <div class="upperDiv">
                    <h5 class="text-dark">Bodybuilding show</h5>

                   </div>
                   <div class="lowerDiv d-flex flex-column align-items-center justify-content-start">

                    <h6 class="font-size text-dark mx-2 text-left">Manmeet Vlogs</h6>
                    <div class="container d-flex">
                     <h6 class="font-size text-dark mx-1">1M Views °</h6>
                     <h6 class="font-size text-dark  ">2 Days Ago</h6>
                    </div>
                   </div>
                </div>
              
            </div>
        </CenterDivComponent>       
    <!-- Fourth Div -->

        <CenterDivComponent>
            <div class="container container-first-image">
                <img class="image-first-div" src="../assets/yoga.jpg" alt="Yoga">
            </div>

            <!-- second container
             -->
            <div class="container-fluid d-flex align-items-center container-second">
                <img id="img" class=" logo style-scope yt-img-shadow" alt="Avatar image" height="40" width="40" src="https://yt3.ggpht.com/yti/ANoDKi6Q83GGUGLCthNtL56hyUE78X-IlTf0yxaKgA=s88-c-k-c0x00ffffff-no-rj-mo">
               <div class=" container-fluid d-flex justify-content-start flex-column">
                   <div class="upperDiv">
                    <h5 class="text-dark">Bodybuilding show</h5>

                   </div>
                   <div class="lowerDiv d-flex flex-column align-items-center justify-content-start">

                    <h6 class="font-size text-dark mx-2 text-left">Manmeet Vlogs</h6>
                    <div class="container d-flex">
                     <h6 class="font-size text-dark mx-1">1M Views °</h6>
                     <h6 class="font-size text-dark ">2 Days Ago</h6>
                    </div>
                   </div>
                </div>
              
            </div>
        </CenterDivComponent>    
        
        </div>
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
    
}
.container-second{
   
   
    padding-left: 17px;
    padding-top: 11px;
}
.logo{
    border-radius: 20px;
}
.upperDiv{
   
    width: 200px;

}
.lowerDiv{
    
    width: 200px;
}
</style>
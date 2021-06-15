console.log("hello there")
var body=document.getElementById('noScrollBar');
var element=document.getElementById("myDivId")
element.addEventListener('mouseenter',()=>{
    body.style.overflow="hidden"
    element.style.overflowY="scroll"
})
element.addEventListener('mouseleave',()=>{
    body.style.overflow="scroll"
    element.style.overflowY="hidden"
})
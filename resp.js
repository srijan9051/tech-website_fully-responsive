burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
navList=document.querySelector('.nav-list');
rightNav=document.querySelector('.rightNav');


burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

var display=0;
var div=document.getElementById('subs');
function change(){
    if(display==0){
    div.innerHTML="Subscribed";
    div.style.backgroundColor="red";
    div.style.color="white";
    display=1;
    }
    else{
        div.innerHTML="Subscribe";
    div.style.backgroundColor="black";
    div.style.color="white";
    display=0;
    }
}
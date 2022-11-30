var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var ans4 = document.getElementById("ans4");
var label = document.getElementById("label")
var container = document.getElementById("container")




function change(){
        //for animation
    document.getElementById("label").style.animation = "fade-out 2s";
    ans1.style.animation = "fade-out 1s";
    ans2.style.animation = "fade-out 1.3s";
    ans3.style.animation = "fade-out 1.5s";
    ans4.style.animation = "fade-out 1.8s";

//for changing
    setTimeout(function(){
        
        ans1.style.display = "none";
    },1000);
    setTimeout(function(){
        
        ans2.style.display = "none";
    },1300);
    setTimeout(function(){
        ans3.style.display = "none";
    },1500);
    setTimeout(function(){
        ans4.style.display = "none";
    },1800);
    setTimeout(function(){
        label.style.display = "none";
    },2000);
   
        
}   

function result(){
    container.innerHTML += '<div id="total"  style="opacity: 100;"><div id="score"><span>You are correct!</span></div></div>'

    
}
function result2(){

        container.innerHTML += '<div id="total" style="opacity: 100;" ><div id="score"><span>You are wrong!</span></div></div>'
}

ans1.addEventListener('click', e =>{
    change();

 })
ans1.addEventListener('click', e =>{
    result2();
    
 })
 ans2.addEventListener('click', e =>{
    document.getElementById("total").style.opacity = 100;
    
 })

 ans2.addEventListener('click', e =>{
    change();

 })
ans2.addEventListener('click', e =>{
    result2();
    
 })
 ans2.addEventListener('click', e =>{
    document.getElementById("total").style.opacity = 100;
    
 })

 ans3.addEventListener('click', e =>{
    change();

 })
ans3.addEventListener('click', e =>{
    result2();
    
 })
 ans3.addEventListener('click', e =>{
    document.getElementById("total").style.opacity = 100;
    
 })

 ans4.addEventListener('click', e =>{
    change();

 })
ans4.addEventListener('click', e =>{
    result();
    
 })
 ans4.addEventListener('click', e =>{
    document.getElementById("total").style.opacity = 100;
    
 })



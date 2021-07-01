const decrease = document.getElementById("dec");
const reset = document.getElementById("reset");
const increase = document.getElementById("inc");
var counter = 0;

decrease.addEventListener("click",function(){
    counter = counter - 1;
    if(counter < 0){
        document.getElementById("counter").style.color = "red";
    }
    if(counter == 0){
        document.getElementById("counter").style.color = "black";
    }
    document.getElementById("counter").innerHTML = counter;
    
})

increase.addEventListener("click",function(){
    counter = counter + 1;
    if(counter > 0){
        document.getElementById("counter").style.color = "green";
    }
    if(counter == 0){
        document.getElementById("counter").style.color = "black";
    }
    document.getElementById("counter").innerHTML = counter;
})

reset.addEventListener('click',function(){
    counter = 0;
    document.getElementById("counter").style.color = "black";
    document.getElementById("counter").innerHTML = counter;
})
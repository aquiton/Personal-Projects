const button_explosion = document.getElementById("explosion");
var clicked = false;


button_explosion.addEventListener("click", function(){
    button_explosion.classList.add("explode");
    console.log("hello world");
    clicked = true;
   
})

button_explosion.addEventListener("mouseout", function(){
    
    if(clicked == true){
        button_explosion.classList.remove("explode");
        console.log("remove");
        clicked = false;
    }
})
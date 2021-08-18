const bird = document.getElementById("bird");
const play_button = document.getElementById("play_button");
const restart_button = document.getElementById("restart_button");

const grass = document.getElementById("grass");
const actual_grass = document.getElementById("actual_grass");
const volcano1 = document.getElementById("volcano1");
const volcano2 = document.getElementById("volcano2");
const volcano3 = document.getElementById("volcano3");
const volcano4 = document.getElementById("volcano4");

var bird_height = bird.style.top;
var bird_base_height = 50;
var stop_running = false;
var velocity = 1;
var play = false;
var dead = false;


var body = document.body;

volcano1.className = "";
volcano2.className = "";
volcano3.className = "";
volcano4.className = "";

restart_button.addEventListener("click", function(){
    restart_button.style.display = "none";
    console.log("RESTART!");
    play_button.style.display = "block";
    dead = false;
    play = false;
    bird.style.top = 50 + "px";
    bird.style.left = 300 + "px";
})

play_button.onmouseover = function() {
    body.className = 'hovered';
    grass.className = 'hovered-grass';
    actual_grass.className = 'hovered-grass';
    volcano1.className = 'volcano volcano1';
    volcano2.className = 'volcano volcano2';
    volcano3.className = 'volcano volcano3';
    volcano4.className = 'volcano volcano4';
}

play_button.onmouseout = function(){
    body.className = '';
    grass.className = "grass";
    actual_grass.className = "actual_grass";
    volcano1.className = "";
    volcano2.className = "";
    volcano3.className = "";
    volcano4.className = "";
}



function jump(){
    velocity -= 20;
}

play_button.addEventListener("click", function(){
    play = true;
    console.log("working");
    console.log(play);
    jump();
    play_button.style.display = "none";
})

function gravity(){
    bird_base_height = bird_base_height + velocity;
    velocity += 0.15;
    bird.style.top = bird_base_height + "px";
    if(bird_base_height < 650){
        
    }else{
        
        dead = true;
    }
    if(bird_base_height < 0){
        bird_base_height = 0;
        velocity += .75;
    }

} 

//generates a random pole lenght for the top pole and add the bottom pole for the remaind living at least 50px space
function topPoledist(){

}

//check if the bird is in the width of the pole and does not excessed the top poles length and the bottom pole has to be in the certain area between the poles 
function collesion(){

}





function updatescreen(){
    setTimeout(updatescreen,1);
    if(play == true){
      gravity();
      console.log(dead);
      if(dead == true){
          bird_base_height = 640;
          velocity = 0;
          restart_button.style.display = "block";
      }
      
    }

        
       
    
}
document.addEventListener("keydown", function(e){
    console.log(e.key);
    if(dead == false){
        if(e.key == " "){
            console.log("jumped");
            velocity -= 10;
        }
    }
})  









updatescreen();





const bird = document.getElementById("bird");
const play_button = document.getElementById("play_button");
var bird_height = bird.style.top;
var bird_base_height = 50;
var stop_running = false;
var velocity = 1;


function updatescreen(){
    bird_base_height = bird_base_height + velocity ;
    console.log(bird_base_height);
    velocity += 0.25;
    bird.style.top = bird_base_height + "px";
    if(bird_base_height < 650){
    setTimeout(updatescreen,1);
    }else{
        bird_base_height = 670;
    }
    if(bird_base_height <= 5 ){
        bird_base_height = 10;
        velocity += .75;
    }
}
document.addEventListener("keydown", function(e){
    console.log(e.key);
    if(e.key == " "){
        console.log("jumped");
        velocity -= 15;
    }
})           

updatescreen();


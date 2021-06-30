



const btn = document.getElementById("btn");

btn.addEventListener('click', function(){
    var red = getRandom();
    var green = getRandom();
    var blue = getRandom();
    var rgb = "rgb(" + red + "," + green + "," + blue + ")";
    document.body.style.backgroundColor = rgb;
    document.getElementById("color").innerHTML = rgb;
    
})

function  getRandom(){
    return Math.floor(Math.random() * 255);

}


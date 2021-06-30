



const btn = document.getElementById("btn");

btn.addEventListener('click', function(){
    var i;
    var hex = "#"
    var color = ""
    for(i=0; i<6; i++){
        color = color.concat(getRandom());
    }
    hex = hex.concat(color);
    document.body.style.backgroundColor = hex;
    document.getElementById("color").innerHTML = hex;
    
})

function  getRandom(){
    const list = ['A','B','C','D','E','F',"1","2","3","4","5","6","7","8","9","0"];
    return list[Math.floor(Math.random() * 16)]
}


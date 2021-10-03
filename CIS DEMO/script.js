const numofBananas = document.getElementById("score-counter");
const bananaBtn = document.getElementById("banana");
var banana_counter = 0;
bananaBtn.addEventListener("click", function(){
    banana_counter += 1;
    numofBananas.innerHTML = banana_counter;
});
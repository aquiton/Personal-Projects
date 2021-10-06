const bananaBtn = document.getElementById("bananaBtn");
const banana_counter = document.getElementById("banana-counter");
const monkey_counter = document.getElementById("monkey-counter");
const money_counter = document.getElementById("money-counter");
const farm_counter = document.getElementById("farm-counter");
const monkeyBtn = document.getElementById("monkeyBtn");
const farmBtn = document.getElementById("farmBtn");
let account = new Account();
var monkeycost = 18;
var farmcost = 30;

bananaBtn.addEventListener("click", function(){
    account.farmBanana();
    updateScreen();
});

monkeyBtn.addEventListener("click", function(){
    var bought_monkey = false;
    bought_monkey = account.buyMonkey(monkeycost);
    if(bought_monkey == true){
        monkey_multiplier();
        monkeycost = monkeycost * 2;
        console.log("new cost = " + monkeycost);
    }
    updateScreen();
    
    
});

farmBtn.addEventListener("click", function(){
    account.buyFarm(farmcost);
    account.farm_multiplier();
    updateScreen();
});

function sellBananas(){
    setTimeout(sellBananas,1000);
    account.sellBananas(1);
    updateScreen();
}

function monkey_multiplier(){
    setTimeout(monkey_multiplier,10000);
    account.monkey_multiplier();
}



function updateScreen(){
    banana_counter.innerHTML = account.getamountOfbananas();
    monkey_counter.innerHTML = account.getmonkeyAmount();
    money_counter.innerHTML = account.getMoneyamount();
    farm_counter.innerHTML = account.getfarmAmount();
}




sellBananas();
    

class Account {
    constructor(){
        this.moneyAmount = 0;
        this.bananaAmount = 0;
        this.monkeyAmount = 0;
        this.farmAmount = 0;
    }

    getMoneyamount(){
        return this.moneyAmount;
    }

    getamountOfbananas(){
        return this.bananaAmount;
    }

    getmonkeyAmount(){
        return this.monkeyAmount;
    }

    getfarmAmount(){
        return this.farmAmount;
    }


    setMoney(amount){
        this.moneyAmount = amount;
    }

    setamountOfBananas(amount){
        this.bananaAmount = amount;
    }

    setmonkeyAmount(amount){
        this.monkeyAmount = amount;
    }

    setfarmAmount(amount){
        this.farmAmount = amount;
    }

    monkey_multiplier(){
        console.log("monkey amount: " + this.monkeyAmount);
        this.bananaAmount += 1;

    }

    farm_multiplier(){
        this.bananaAmount += 5
    }

    farmBanana(){
        this.bananaAmount += 1;
    }

    buyMonkey(cost){
        if(cost <= this.moneyAmount){
            this.moneyAmount -= cost;
            this.monkeyAmount += 1;
            return true;
        }else{
            return false;
        }
    }

    buyFarm(cost){
        if(cost <= this.moneyAmount){
            this.moneyAmount -= cost;
            this.farmAmount += 1;
        }
    }

    sellBananas(costOfBananas){
        if(this.bananaAmount > 0){
        this.moneyAmount += (this.bananaAmount * costOfBananas);
        this.bananaAmount -= this.bananaAmount;
        
        }
    }

}
// Coin Flip
var coinSelect;
var coinResult;
var coinResulted;
var coinRand;

document.getElementById("reset").disabled = true;
document.getElementById("reset").innerHTML = "----------";

function tossCoin(){
    coinRand = Math.round(Math.random()*100000000) % 2;
    coinSelect = document.getElementById('coin').value;

    if (coinRand == 1){
        coinResult = "Coin is Tails. ";
        coinResulted = "Tails";
    } else {
        coinResult = "Coin is Heads. ";
        coinResulted = "Heads";
    }
    
    document.getElementById('coinFlipped').innerHTML = coinResult;
    
    
    if (document.getElementById('coin').value == "Heads"){
        document.getElementById("coinOutput").innerHTML = "You chose Heads!";
    } else if (document.getElementById('coin').value == "Tails"){
        document.getElementById("coinOutput").innerHTML = "You chose Tails!";
    } else {
        document.getElementById("coinOutput").innerHTML = "Select the face";
    }

    if (document.getElementById('coin').value == coinResulted){
        document.getElementById("coinAdvantage").innerHTML = "You go first."
    } else {
        document.getElementById("coinAdvantage").innerHTML = "Opponent goes first."
    }

    document.getElementById("coinToss").disabled = true;
    document.getElementById("coin").disabled = true;
    document.getElementById("coinToss").innerHTML = "--------------";
    
    document.getElementById("reset").disabled = false;
    document.getElementById("reset").innerHTML = "RESET GAME";
}

// calculate Damage

var Damage;

function calculateDamage(){
    Damage = (Math.round(Math.random()*100000000) % 5) + 1;
    return Damage;
}

// log


// reset BTN

function resetBtn(){
    document.getElementById("coinToss").disabled = false;
    document.getElementById("coin").disabled = false;
    document.getElementById("coinToss").innerHTML = "TOSS THE COIN!";
    document.getElementById("coinFlipped").innerHTML = " ";
    document.getElementById("coinOutput").innerHTML = "Flip the coin!";
    
    document.getElementById("reset").disabled = true;
    document.getElementById("reset").innerHTML = "----------";
}

// attack and defend

var playerHP = 100;
var opponentHP = 100;
var playerShield = 0;
var opponentShield = 0;


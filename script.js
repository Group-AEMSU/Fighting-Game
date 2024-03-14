// CHARACTERS 1-5 : OFFENSIVE TO DEFENSIVE
// Chaos: HIGHEST ATTACK, LITTLE TO NO DEFENSE (Purely high attack)
// Soul: HIGH ATTACK, SOME DEFENSE (Spends a turn enhancing their attack)
// Default: MODERATE ATTACK, MODERATE DEFENSE (Default character)
// Nihil: SOME ATTACK, HIGH DEFENSE (Debuffs the enemy)
// Preserve: LITTLE TO NO ATTACK, HIGHEST DEFENSE (Parries and returns the damage)

// Declaration Of Variables
var playerHP;
var opponentHP;

// Coin Flip
var coinSelect;
var coinResult;
var coinRand;

function tossCoin(){
    coinRand = Math.round(Math.random()*100000000) % 2;

    if (coinRand == 1){
        coinResult = "Coin is Tails. ";
    } else {
        coinResult = "Coin is Heads. ";
    }
    
    document.getElementById('coinFlipped').innerHTML = coinResult;
    
    if (document.getElementById('coin').value == "Heads"){
        document.getElementById("coinOutput").innerHTML = "You chose Heads";
    } else if (document.getElementById('coin').value == "Tails"){
        document.getElementById("coinOutput").innerHTML = "You chose Tails";
    } else {
        document.getElementById("coinOutput").innerHTML = "Select the face";
    }

    document.getElementById("coinToss").disabled = true;
    
}
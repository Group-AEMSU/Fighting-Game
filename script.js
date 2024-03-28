// Health Status
var playerHP = 100;
var opponentHP = 100;

// Coin Flip

// Initializing variables
var coinSelect;
var coinResult;
var coinResulted;
var coinRand;
var coinAdv;
var advantage;

// Disabling buttons so they have to coin toss first
document.getElementById("reset").disabled = true;
document.getElementById("reset").innerHTML = "----------";
document.getElementById("attackAction").disabled = true;
document.getElementById("attackAction").style.opacity = 0;
document.getElementById("defendAction").disabled = true;
document.getElementById("defendAction").style.opacity = 0;

function tossCoin(){
    coinRand = Math.round(Math.random()*100000000) % 2; // Randomize coined flip, mod 2 for heads or tails
    coinSelect = document.getElementById('coin').value; // Get player input from dropdown

    if (coinRand == 1){ // 1 = tails
        coinResult = "Coin is Tails. ";
        coinResulted = "Tails";
    } else { // 1 = heads
        coinResult = "Coin is Heads. ";
        coinResulted = "Heads";
    }
    
    document.getElementById('coinFlipped').innerHTML = coinResult; // Display message
    
    
    if (document.getElementById('coin').value == "Heads"){ // Get what player chose and display it
        document.getElementById("coinOutput").innerHTML = "You chose Heads!";
    } else if (document.getElementById('coin').value == "Tails"){
        document.getElementById("coinOutput").innerHTML = "You chose Tails!";
    }


    if (document.getElementById('coin').value == coinResulted){ // Get what player chose and compare it to the coin result
        document.getElementById("coinAdvantage").innerHTML = "You go first."
        coinAdv = "player";
    } else {
        document.getElementById("coinAdvantage").innerHTML = "Opponent goes first."
        coinAdv = "opponent";
        advantage = "true";
    }

    // Enable and disable buttons
    document.getElementById("coinToss").disabled = true;
    document.getElementById("coin").disabled = true;
    document.getElementById("coinToss").innerHTML = "--------------";
    
    document.getElementById("reset").disabled = false;
    document.getElementById("reset").innerHTML = "RESET GAME";

    // Check if player has the advantage, if yes then only attack is enabled
    if (coinAdv == "player"){
        document.getElementById("attackAction").disabled = false;
        document.getElementById("attackAction").style.opacity = 0.05;
        document.getElementById("defendAction").disabled = true;
    } else {
        document.getElementById("attackAction").disabled = false;
        document.getElementById("attackAction").style.opacity = 0.05;
        document.getElementById("defendAction").disabled = false;
        document.getElementById("defendAction").style.opacity = 0.05;
    }

}

// calculate Damage

var Damage;

function calculateDamage(){
    Damage = (Math.round(Math.random()*100) % 5) + 1; // Math round the result then mod 5 it so that the range is 0-4, then add 1 so it is 1-5
    return Damage; // Return the value
}

// calculate Defense

var Defense;

function calculateDefense(){
    Defense = (Math.round(Math.random()*100) % 3) + 1; // Math round the result then mod 3 it so that the range is 0-3, then add 1 so it is 1-3
    return Defense; // Return the value
}
// log

// initialize booleans to check if a log position is false
var l1emp = false;
var l2emp = false;
var l3emp = false;
var l4emp = false;
var l5emp = false;

var turnlog1 = 0;
var turnlog2 = 0;
var turnlog3 = 0;
var turnlog4 = 0;
var turnlog5 = 0;


var oact;
var pact;
var tact;

function logUpdate(pinf, oinf, tinf){
    // check if log 1 is empty
    if (l1emp == false){
        turnlog1 = turnlog1 + 1;
        document.getElementById("log1turn").innerHTML = turnlog1;
        document.getElementById("log1pdmg").innerHTML = pinf;
        document.getElementById("log1odmg").innerHTML = oinf;
        document.getElementById("log1tdmg").innerHTML = tinf;
        l1emp = true;
    } else if (l2emp == false){
        turnlog1 = turnlog1 + 1;
        turnlog2 = turnlog2 + 1;
        document.getElementById("log1turn").innerHTML = turnlog1;
        document.getElementById("log2turn").innerHTML = turnlog2;

        // swap log 2 and old log 1
        document.getElementById("log2pdmg").innerHTML = document.getElementById("log1pdmg").innerHTML;
        document.getElementById("log2odmg").innerHTML = document.getElementById("log1odmg").innerHTML;
        document.getElementById("log2tdmg").innerHTML = document.getElementById("log1tdmg").innerHTML;

        // accept new info
        document.getElementById("log1pdmg").innerHTML = pinf;
        document.getElementById("log1odmg").innerHTML = oinf;
        document.getElementById("log1tdmg").innerHTML = tinf;
        l2emp = true;
    } else if (l3emp == false){
        turnlog1 = turnlog1 + 1;
        turnlog2 = turnlog2 + 1;
        turnlog3 = turnlog3 + 1;

        document.getElementById("log1turn").innerHTML = turnlog1;
        document.getElementById("log2turn").innerHTML = turnlog2;
        document.getElementById("log3turn").innerHTML = turnlog3;

        // swap log 3 and old log 2
        document.getElementById("log3pdmg").innerHTML = document.getElementById("log2pdmg").innerHTML;
        document.getElementById("log3odmg").innerHTML = document.getElementById("log2odmg").innerHTML;
        document.getElementById("log3tdmg").innerHTML = document.getElementById("log2tdmg").innerHTML;

        // swap log 2 and old log 1
        document.getElementById("log2pdmg").innerHTML = document.getElementById("log1pdmg").innerHTML;
        document.getElementById("log2odmg").innerHTML = document.getElementById("log1odmg").innerHTML;
        document.getElementById("log2tdmg").innerHTML = document.getElementById("log1tdmg").innerHTML;

        // accept new info
        document.getElementById("log1pdmg").innerHTML = pinf;
        document.getElementById("log1odmg").innerHTML = oinf;
        document.getElementById("log1tdmg").innerHTML = tinf;
        l3emp = true;
    } else if (l4emp == false){
        turnlog1 = turnlog1 + 1;
        turnlog2 = turnlog2 + 1;
        turnlog3 = turnlog3 + 1;
        turnlog4 = turnlog4 + 1;
        document.getElementById("log1turn").innerHTML = turnlog1;
        document.getElementById("log2turn").innerHTML = turnlog2;
        document.getElementById("log3turn").innerHTML = turnlog3;
        document.getElementById("log4turn").innerHTML = turnlog4;

        // swap log 4 and old log 3
        document.getElementById("log4pdmg").innerHTML = document.getElementById("log3pdmg").innerHTML;
        document.getElementById("log4odmg").innerHTML = document.getElementById("log3odmg").innerHTML;
        document.getElementById("log4tdmg").innerHTML = document.getElementById("log3tdmg").innerHTML;

        // swap log 3 and old log 2
        document.getElementById("log3pdmg").innerHTML = document.getElementById("log2pdmg").innerHTML;
        document.getElementById("log3odmg").innerHTML = document.getElementById("log2odmg").innerHTML;
        document.getElementById("log3tdmg").innerHTML = document.getElementById("log2tdmg").innerHTML;

        // swap log 2 and old log 1
        document.getElementById("log2pdmg").innerHTML = document.getElementById("log1pdmg").innerHTML;
        document.getElementById("log2odmg").innerHTML = document.getElementById("log1odmg").innerHTML;
        document.getElementById("log2tdmg").innerHTML = document.getElementById("log1tdmg").innerHTML;

        // accept new info
        document.getElementById("log1pdmg").innerHTML = pinf;
        document.getElementById("log1odmg").innerHTML = oinf;
        document.getElementById("log1tdmg").innerHTML = tinf;
        l4emp = true;
    } else {
        turnlog1 = turnlog1 + 1;
        turnlog2 = turnlog2 + 1;
        turnlog3 = turnlog3 + 1;
        turnlog4 = turnlog4 + 1;
        turnlog5 = turnlog5 + 1;
        document.getElementById("log1turn").innerHTML = turnlog1;
        document.getElementById("log2turn").innerHTML = turnlog2;
        document.getElementById("log3turn").innerHTML = turnlog3;
        document.getElementById("log4turn").innerHTML = turnlog4;
        document.getElementById("log5turn").innerHTML = turnlog5;

        // swap log 5 and old log 4
        document.getElementById("log5pdmg").innerHTML = document.getElementById("log4pdmg").innerHTML;
        document.getElementById("log5odmg").innerHTML = document.getElementById("log4odmg").innerHTML;
        document.getElementById("log5tdmg").innerHTML = document.getElementById("log4tdmg").innerHTML;

        // swap log 4 and old log 3
        document.getElementById("log4pdmg").innerHTML = document.getElementById("log3pdmg").innerHTML;
        document.getElementById("log4odmg").innerHTML = document.getElementById("log3odmg").innerHTML;
        document.getElementById("log4tdmg").innerHTML = document.getElementById("log3tdmg").innerHTML;

        // swap log 3 and old log 2
        document.getElementById("log3pdmg").innerHTML = document.getElementById("log2pdmg").innerHTML;
        document.getElementById("log3odmg").innerHTML = document.getElementById("log2odmg").innerHTML;
        document.getElementById("log3tdmg").innerHTML = document.getElementById("log2tdmg").innerHTML;

        // swap log 2 and old log 1
        document.getElementById("log2pdmg").innerHTML = document.getElementById("log1pdmg").innerHTML;
        document.getElementById("log2odmg").innerHTML = document.getElementById("log1odmg").innerHTML;
        document.getElementById("log2tdmg").innerHTML = document.getElementById("log1tdmg").innerHTML;

        // accept new info
        document.getElementById("log1pdmg").innerHTML = pinf;
        document.getElementById("log1odmg").innerHTML = oinf;
        document.getElementById("log1tdmg").innerHTML = tinf;
    }
}


// turn counter

var turnCount = 0;
document.getElementById("turnNum").innerHTML = turnCount;

// reset BTN


function resetBtn(){

    // Reset the coin toss
    document.getElementById("coinToss").disabled = false;
    document.getElementById("coin").disabled = false;
    document.getElementById("coinToss").innerHTML = "TOSS THE COIN!";
    document.getElementById("coinFlipped").innerHTML = " ";
    document.getElementById("coinAdvantage").innerHTML = " ";
    document.getElementById("coinOutput").innerHTML = "Flip the coin!";
    

    // Reset the reset button
    document.getElementById("reset").disabled = true;
    document.getElementById("reset").innerHTML = "----------";

    // Reset action buttons
    document.getElementById("attackAction").disabled = true;
    document.getElementById("attackAction").style.opacity = 0;
    document.getElementById("defendAction").disabled = true;
    document.getElementById("defendAction").style.opacity = 0;

    // reset health
    playerHP = 100;
    opponentHP = 100;
    document.getElementById("playerHPValue").innerHTML = playerHP;
    document.getElementById("opponentHPValue").innerHTML = opponentHP;

    // reset victory msg
    document.getElementById("playerDo").innerHTML = " ";
    
    // reset turn count
    turnCount = 0;
    document.getElementById("turnNum").innerHTML = 0;

    // reset all logs
    turnlog1 = 0;
    turnlog2 = 0;
    turnlog3 = 0;
    turnlog4 = 0;
    turnlog5 = 0;

    document.getElementById("log1turn").innerHTML = " ";
    document.getElementById("log2turn").innerHTML = " ";
    document.getElementById("log3turn").innerHTML = " ";
    document.getElementById("log4turn").innerHTML = " ";
    document.getElementById("log5turn").innerHTML = " ";
    document.getElementById("log5pdmg").innerHTML = " ";
    document.getElementById("log5odmg").innerHTML = " ";
    document.getElementById("log5tdmg").innerHTML = " ";
    document.getElementById("log4pdmg").innerHTML = " ";
    document.getElementById("log4odmg").innerHTML = " ";
    document.getElementById("log4tdmg").innerHTML = " ";
    document.getElementById("log3pdmg").innerHTML = " ";
    document.getElementById("log3odmg").innerHTML = " ";
    document.getElementById("log3tdmg").innerHTML = " ";
    document.getElementById("log2pdmg").innerHTML = " ";
    document.getElementById("log2odmg").innerHTML = " ";
    document.getElementById("log2tdmg").innerHTML = " ";
    document.getElementById("log1pdmg").innerHTML = " ";
    document.getElementById("log1odmg").innerHTML = " ";
    document.getElementById("log1tdmg").innerHTML = " ";

    checkHealth();

}

// attack and defend

var playerHP = 100;
var opponentHP = 100;
var playerShield = 0;
var opponentShield = 0;

document.getElementById("playerHPValue").innerHTML = playerHP;
document.getElementById("opponentHPValue").innerHTML = opponentHP;

var opponentAct;

var playerDamage; 
var opponentDamage;
var playerDefense; 
var opponentDefense;

var temp;

function opponentAction(action){
    if (advantage != true){ // check if opponent has advantage, then it will attack
        var oAction = Math.round(Math.random()); // Calculate if opponent will attack or defend
        if (oAction == 0){ // 0 = Defense
            opponentAct = "DEFEND"; // set the opponent action to Defense
            opponentDefense = calculateDefense(); // Calculate defense from 1-3
            oact = "The oppponent DEFENDED for " + opponentDefense + " damage!"; // log
    
            if (coinAdv == "player"){  // Check if opponent or player goes first, then said action gets said first
                document.getElementById("opponentInfliction").innerHTML = "The oppponent DEFENDED for " + opponentDefense + " damage!";
                document.getElementById("opponentInfliction").style.opacity = 1;
            } else if (coinAdv == "opponent"){
                document.getElementById("playerInfliction").innerHTML = "The oppponent DEFENDED for " + opponentDefense + " damage!";
                document.getElementById("playerInfliction").style.opacity = 1;
            }
    
        } else if (oAction == 1){ // 1 = attack
            opponentAct = "ATTACK"; // set the opponent action to Attack
            opponentDamage = calculateDamage(); // Calculate damage 1-5
            oact = "The oppponent INFLICTED " + opponentDamage + " damage!"; // log
    
            if (coinAdv == "player"){  // Check if opponent or player goes first, then said action gets said first
                document.getElementById("opponentInfliction").innerHTML = "The oppponent INFLICTED " + opponentDamage + " damage!";
                document.getElementById("opponentInfliction").style.opacity = 1;
            } else if (coinAdv == "opponent"){
                document.getElementById("playerInfliction").innerHTML = "The oppponent INFLICTED " + opponentDamage + " damage!";
                document.getElementById("playerInfliction").style.opacity = 1;
            }
        }
    } else if (advantage == true){
        opponentAct = "ATTACK"; // set the opponent action to Attack
        opponentDamage = calculateDamage(); // Calculate damage 1-5
        oact = "The oppponent INFLICTED " + opponentDamage + " damage!"; // log

        document.getElementById("playerInfliction").innerHTML = "The oppponent INFLICTED " + opponentDamage + " damage!";
        document.getElementById("playerInfliction").style.opacity = 1;

        advantage = false;
    }

    if (opponentAct == "ATTACK" && action == "ATTACK"){ // Check if both actions are "ATTACK"
        document.getElementById("totalInfliction").innerHTML = "You both dealt damage to eachother!";
        document.getElementById("totalInfliction").style.opacity = 1;

        playerHP = playerHP - opponentDamage; // Subtract health
        opponentHP = opponentHP - playerDamage; // Subtract health

        document.getElementById("playerHPValue").innerHTML = playerHP; // Update health
        document.getElementById("opponentHPValue").innerHTML = opponentHP; // Update health

        checkHealth(); // Check Health

        turnCount += 1; // Update turn count
        document.getElementById("turnNum").innerHTML = turnCount;

        tact = "You both dealt damage to eachother!" // log
        logUpdate(pact, oact, tact);
    }

    else if (opponentAct == "ATTACK" && action == "DEFEND"){ // Check if opponent attacks, and player defends
        if (opponentDamage <= playerDefense){ // Check whether player completely blocks attack
            document.getElementById("totalInfliction").innerHTML = "You completely blocked the opponent!"; // Display message
            document.getElementById("totalInfliction").style.opacity = 1;
            tact = "You completely blocked the opponent!" // log
        } else { // Player did not comletely block attack
            temp = opponentDamage - playerDefense;
            if (temp < 0){ // Check if damage negative
                temp = 0;
            }

            // Display message
            document.getElementById("totalInfliction").innerHTML = "You partially blocked the opponent's attack, but still gets hit by " + temp + " damage.";
            document.getElementById("totalInfliction").style.opacity = 1;

            playerHP -= temp; // Subtract HP

            document.getElementById("playerHPValue").innerHTML = playerHP; // Update health
            document.getElementById("opponentHPValue").innerHTML = opponentHP; // Update health
            tact = "You still got hit by " + temp + " damage." // log
        }
        checkHealth(); // Check health

        // Update turn counter
        turnCount += 1;
        document.getElementById("turnNum").innerHTML = turnCount;

        // update log
        logUpdate(pact, oact, tact);
    }

    else if (opponentAct == "DEFEND" && action == "ATTACK"){ // Check if opponent defends, and player attacks
        if (playerDamage <= opponentDefense){ // Check whether player completely blocks attack
            document.getElementById("totalInfliction").innerHTML = "The opponent completely blocked the attack!"; // display msg
            document.getElementById("totalInfliction").style.opacity = 1;
            tact = "Opponent completely blocked the attack!" // log
        } else { // Opponent did not completely block
            temp = playerDamage - opponentDefense;
            if (temp < 0){ // Check if damage negative
                temp = 0;
            }
            document.getElementById("totalInfliction").innerHTML = "The opponent partially blocked your attack, but still gets hit by " + temp + " damage.";
            document.getElementById("totalInfliction").style.opacity = 1;
            opponentHP -= temp; // subtract hp
            document.getElementById("playerHPValue").innerHTML = playerHP; // update hp
            document.getElementById("opponentHPValue").innerHTML = opponentHP; // update hp
            tact = "Opponent still got hit by " + temp + " damage." // log
        }
        checkHealth(); // check hp

        // update turn counter
        turnCount += 1;
        document.getElementById("turnNum").innerHTML = turnCount;

        // update log
        logUpdate(pact, oact, tact);
    }

    else if (opponentAct == "DEFEND" && action == "DEFEND"){
        document.getElementById("totalInfliction").innerHTML = "The opponent defended too.";
        document.getElementById("totalInfliction").style.opacity = 1;
        document.getElementById("playerHPValue").innerHTML = playerHP;
        document.getElementById("opponentHPValue").innerHTML = opponentHP;
        checkHealth();
        turnCount += 1;
        document.getElementById("turnNum").innerHTML = turnCount;
        tact = "The opponent defended too." // log
        logUpdate(pact, oact, tact);
    }
}

function playerAttack(){ // Called when player presses attack
    // Enable buttons after player had their advantage
    document.getElementById("attackAction").disabled = false;
    document.getElementById("attackAction").style.opacity = 0.05;
    document.getElementById("defendAction").disabled = false;
    document.getElementById("defendAction").style.opacity = 0.05;
    
    // Display message
    document.getElementById("playerDo").innerHTML = "You will ATTACK!";
    document.getElementById("playerDo").style.opacity = 1;

    // Calc damage
    playerDamage = calculateDamage();

    if (coinAdv == "player"){ // Check if opponent or player goes first, then said action gets said first
        // display msg
        document.getElementById("playerInfliction").innerHTML = "You INFLICTED " + playerDamage + " damage!";
        document.getElementById("playerInfliction").style.opacity = 1;
    } else if (coinAdv == "opponent"){
        // display msg
        document.getElementById("opponentInfliction").innerHTML = "You INFLICTED " + playerDamage + " damage!";
        document.getElementById("opponentInfliction").style.opacity = 1;
    }

    pact = "You INFLICTED " + playerDamage + " damage!"; // log 
    opponentAction("ATTACK");

    // check health
    checkHealth();

}

function playerDefend(){ // Check if opponent or player goes first, then said action gets said first
    // Enable buttons after player had their advantage
    document.getElementById("attackAction").disabled = false;
    document.getElementById("attackAction").style.opacity = 0.05;
    document.getElementById("defendAction").disabled = false;
    document.getElementById("defendAction").style.opacity = 0.05;

    // Display message
    document.getElementById("playerDo").innerHTML = "You will DEFEND!";
    document.getElementById("playerDo").style.opacity = 1;

    // calc defense
    playerDefense = calculateDefense();

    if (coinAdv == "player"){
        // display msg
        document.getElementById("playerInfliction").innerHTML = "You DEFENDED for " + playerDefense + " damage!";
        document.getElementById("playerInfliction").style.opacity = 1;
    } else if (coinAdv == "opponent"){
        // display msg
        document.getElementById("opponentInfliction").innerHTML = "You DEFENDED for " + playerDefense + " damage!";
        document.getElementById("opponentInfliction").style.opacity = 1;
    }

    pact = "You DEFENDED for " + playerDefense + " damage!"; // log 
    opponentAction("DEFEND");

    //check health
    checkHealth();
}

// check health

function checkHealth(){
    if (playerHP <= 0 && opponentHP > 0){ // Check if player has 0 and opponent has above 0 to see if opponent wins
        document.getElementById("playerDo").innerHTML = "Opponent wins."; // Win message
        playerHP = 0; // Update playerHP so playerHP will not be negative
        document.getElementById("playerHPValue").innerHTML = playerHP; // Update playerHP

        document.getElementById("playerInfliction").style.opacity = 0; // Hide so win message can stand alone
        document.getElementById("opponentInfliction").style.opacity = 0; // Hide so win message can stand alone
        document.getElementById("totalInfliction").style.opacity = 0; // Hide so win message can stand alone

        // Disabling the action buttons after victory/defeat
        document.getElementById("attackAction").disabled = true;
        document.getElementById("attackAction").style.opacity = 0;
        document.getElementById("defendAction").disabled = true;
        document.getElementById("defendAction").style.opacity = 0;

    } else if (playerHP > 0 && opponentHP <= 0){ // Check if opponent has 0 and player has above 0 to see if player wins
        document.getElementById("playerDo").innerHTML = "Player wins."; // Win message
        opponentHP = 0; // Update opponentHP so opponentHP will not be negative
        document.getElementById("opponentHPValue").innerHTML = opponentHP; // Update opponentHP

        document.getElementById("playerInfliction").style.opacity = 0; // Hide so win message can stand alone
        document.getElementById("opponentInfliction").style.opacity = 0; // Hide so win message can stand alone
        document.getElementById("totalInfliction").style.opacity = 0; // Hide so win message can stand alone

        // Disabling the action buttons after victory/defeat
        document.getElementById("attackAction").disabled = true; 
        document.getElementById("attackAction").style.opacity = 0;
        document.getElementById("defendAction").disabled = true;
        document.getElementById("defendAction").style.opacity = 0;
    }

    if (playerHP == 100){ // Changing the player healthbar depending on the health
        document.getElementById("playerHPBar").style.backgroundImage = "url(pHP/p20.png)";
    } else if (playerHP < 100 && playerHP >= 95){
        document.getElementById("playerHPBar").style.backgroundImage = "url(pHP/p19.png)";
    } else if (playerHP < 95 && playerHP >= 90){
        document.getElementById("playerHPBar").style.backgroundImage = "url(pHP/p18.png)";        
    } else if (playerHP < 90 && playerHP >= 85){
        document.getElementById("playerHPBar").style.backgroundImage = "url(pHP/p17.png)";        
    } else if (playerHP < 85 && playerHP >= 80){
        document.getElementById("playerHPBar").style.backgroundImage = "url(pHP/p16.png)";        
    } else if (playerHP < 80 && playerHP >= 75){
        document.getElementById("playerHPBar").style.backgroundImage = "url(pHP/p15.png)";        
    } else if (playerHP < 75 && playerHP >= 70){
        document.getElementById("playerHPBar").style.backgroundImage = "url(pHP/p14.png)";        
    } else if (playerHP < 70 && playerHP >= 65){
        document.getElementById("playerHPBar").style.backgroundImage = "url(pHP/p13.png)";
    } else if (playerHP < 65 && playerHP >= 60){
        document.getElementById("playerHPBar").style.backgroundImage = "url(pHP/p12.png)";
    } else if (playerHP < 60 && playerHP >= 55){
        document.getElementById("playerHPBar").style.backgroundImage = "url(pHP/p11.png)";
    } else if (playerHP < 55 && playerHP >= 50){
        document.getElementById("playerHPBar").style.backgroundImage = "url(pHP/p10.png)";
    } else if (playerHP < 50 && playerHP >= 45){
        document.getElementById("playerHPBar").style.backgroundImage = "url(pHP/p9.png)";
    } else if (playerHP < 45 && playerHP >= 40){
        document.getElementById("playerHPBar").style.backgroundImage = "url(pHP/p8.png)";
    } else if (playerHP < 40 && playerHP >= 35){
        document.getElementById("playerHPBar").style.backgroundImage = "url(pHP/p7.png)";
    } else if (playerHP < 35 && playerHP >= 30){
        document.getElementById("playerHPBar").style.backgroundImage = "url(pHP/p6.png)";
    } else if (playerHP < 30 && playerHP >= 25){
        document.getElementById("playerHPBar").style.backgroundImage = "url(pHP/p5.png)";
    } else if (playerHP < 25 && playerHP >= 20){
        document.getElementById("playerHPBar").style.backgroundImage = "url(pHP/p4.png)";
    } else if (playerHP < 20 && playerHP >= 15){
        document.getElementById("playerHPBar").style.backgroundImage = "url(pHP/p3.png)";
    } else if (playerHP < 15 && playerHP >= 10){
        document.getElementById("playerHPBar").style.backgroundImage = "url(pHP/p2.png)";
    } else if (playerHP < 10 && playerHP >= 1){
        document.getElementById("playerHPBar").style.backgroundImage = "url(pHP/p1.png)";
    } else if (playerHP == 0){
        document.getElementById("playerHPBar").style.backgroundImage = "url(pHP/p0.png)";
    }

    if (opponentHP == 100){ // Changing the opponent healthbar depending on the health
        document.getElementById("opponentHPBar").style.backgroundImage = "url(oHP/o20.png)";
    } else if (opponentHP < 100 && opponentHP >= 95){
        document.getElementById("opponentHPBar").style.backgroundImage = "url(oHP/o19.png)";
    } else if (opponentHP < 95 && opponentHP >= 90){
        document.getElementById("opponentHPBar").style.backgroundImage = "url(oHP/o18.png)";        
    } else if (opponentHP < 90 && opponentHP >= 85){
        document.getElementById("opponentHPBar").style.backgroundImage = "url(oHP/o17.png)";        
    } else if (opponentHP < 85 && opponentHP >= 80){
        document.getElementById("opponentHPBar").style.backgroundImage = "url(oHP/o16.png)";        
    } else if (opponentHP < 80 && opponentHP >= 75){
        document.getElementById("opponentHPBar").style.backgroundImage = "url(oHP/o15.png)";        
    } else if (opponentHP < 75 && opponentHP >= 70){
        document.getElementById("opponentHPBar").style.backgroundImage = "url(oHP/o14.png)";        
    } else if (opponentHP < 70 && opponentHP >= 65){
        document.getElementById("opponentHPBar").style.backgroundImage = "url(oHP/o13.png)";
    } else if (opponentHP < 65 && opponentHP >= 60){
        document.getElementById("opponentHPBar").style.backgroundImage = "url(oHP/o12.png)";
    } else if (opponentHP < 60 && opponentHP >= 55){
        document.getElementById("opponentHPBar").style.backgroundImage = "url(oHP/o11.png)";
    } else if (opponentHP < 55 && opponentHP >= 50){
        document.getElementById("opponentHPBar").style.backgroundImage = "url(oHP/o10.png)";
    } else if (opponentHP < 50 && opponentHP >= 45){
        document.getElementById("opponentHPBar").style.backgroundImage = "url(oHP/o9.png)";
    } else if (opponentHP < 45 && opponentHP >= 40){
        document.getElementById("opponentHPBar").style.backgroundImage = "url(oHP/o8.png)";
    } else if (opponentHP < 40 && opponentHP >= 35){
        document.getElementById("opponentHPBar").style.backgroundImage = "url(oHP/o7.png)";
    } else if (opponentHP < 35 && opponentHP >= 30){
        document.getElementById("opponentHPBar").style.backgroundImage = "url(oHP/o6.png)";
    } else if (opponentHP < 30 && opponentHP >= 25){
        document.getElementById("opponentHPBar").style.backgroundImage = "url(oHP/o5.png)";
    } else if (opponentHP < 25 && opponentHP >= 20){
        document.getElementById("opponentHPBar").style.backgroundImage = "url(oHP/o4.png)";
    } else if (opponentHP < 20 && opponentHP >= 15){
        document.getElementById("opponentHPBar").style.backgroundImage = "url(oHP/o3.png)";
    } else if (opponentHP < 15 && opponentHP >= 10){
        document.getElementById("opponentHPBar").style.backgroundImage = "url(oHP/o2.png)";
    } else if (opponentHP < 10 && opponentHP >= 1){
        document.getElementById("opponentHPBar").style.backgroundImage = "url(oHP/o1.png)";
    } else if (opponentHP == 0){
        document.getElementById("opponentHPBar").style.backgroundImage = "url(oHP/o0.png)";
    }
}
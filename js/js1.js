var playerHP = document.getElementById("player-hp"),
    monsterHP = document.getElementById("monster-hp"),
    storyBox = document.getElementById("story-box"),
    commandBox = document.getElementById("command-box"),
    attackButton = document.getElementById("attack-button"),
    runButton = document.getElementById("run-button");

    var PlayHP = 20,
        MonstHP = 20;
        runpages=["run1.html","run2.html"];


window.onload = playerHP.innerHTML = "Player Hit Points: " + PlayHP,
                monsterHP.innerHTML= "The Beast's Hit Points: " + MonstHP;


attackButton.addEventListener("click",function(){
   attackRoll(); 
})

runButton.addEventListener("click",function(){
    runNow();
})

var attackRoll = function attackRoll(){
   var playMinus = getRandomNumber(0,6),
        monstMinus = getRandomNumber(0,6);
    PlayHP = PlayHP - playMinus; 
    playerHP.innerHTML = "Player Hit Points: " + PlayHP;
    MonstHP = MonstHP - monstMinus;
    monsterHP.innerHTML= "The Beast's Hit Points: " + MonstHP;
    if (PlayHP <= 0) {
        window.location = "murder.html";
     }
     if (MonstHP <= 0 && PlayHP > 0) {
        window.locatoin = "victory.html";
     }
}

var runNow = function runNow(){
    var randy = getRandomNumber(0,1);
    window.location = runpages[randy];
}

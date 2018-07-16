attackButton.addEventListener("click",function(){
    attackRoll(); 
})

runButton.addEventListener("click",function(){
    runNow();
})

grenadeButton.addEventListener("click",function(){
    window.location = "victory.html";
})

var attackRoll = function attackRoll(){
    var playMinus = getRandomNumber(0,6),
    monstMinus = getRandomNumber(0,6);
    sword.play();
    PlayHP = PlayHP - playMinus; 
    MonstHP = MonstHP - monstMinus;
    dispHP();
    text.innerHTML = "You hit the Rabbit for " + monstMinus + "<br> The Rabbit Hits you for " + playMinus;

    if (PlayHP <= 0 && MonstHP > 0 ) {
        window.location = "murder.html";
    }
    if (MonstHP <= 0 && PlayHP > 0) {
        window.location = "victory.html";
    }
    if (MonstHP <=6 && PlayHP <=6 ){
        text.innerHTML = storyItems[3];
        grenadeButton.classList.toggle("toggleon");
        attackButton.classList.remove("toggleon");
        runButton.classList.remove("toggleon");
    }
}

var runNow = function runNow(){
    var randy = getRandomNumber(0,1);
    window.location = runpages[randy];
}
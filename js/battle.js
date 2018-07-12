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
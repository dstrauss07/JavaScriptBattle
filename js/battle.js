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
playerHP.innerHTML = "Player HP <br>" + "<div class='hp-number'>" + PlayHP + "</div>";
MonstHP = MonstHP - monstMinus;
monsterHP.innerHTML= "Monster HP <br>" + "<div class='hp-number'>" + MonstHP + "</div>";
if (PlayHP <= 0) {
window.location = "murder.html";
}
if (MonstHP <= 0 && PlayHP > 0) {
window.location = "victory.html";
}
}

var runNow = function runNow(){
var randy = getRandomNumber(0,1);
window.location = runpages[randy];
}
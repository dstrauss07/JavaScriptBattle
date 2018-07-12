var playerHP = document.getElementById("player-hp"),
    monsterHP = document.getElementById("monster-hp"),
    text = document.getElementById("story-box"),
    storyImage = document.getElementById("story-image"),
    commandBox = document.getElementById("command-box"),
    attackButton = document.getElementById("attack-button"),
    runButton = document.getElementById("run-button");

var storyItems = [
"<p>You Enter a Dark Cave</p>",
"<p>As you venture deeper, you hear the pitter-patter of ominous footsteps</p>",
"<p>It's a nasty little rabbit with BIIIIG Teeth</p>" ]; 

var illustration = [
    "<img src='img/img1.jpg'>",
    "<img src='img/img2.jpg'>",
    "<img src='img/img3.jpg'>",
]

var PlayHP = 20,
MonstHP = 20;
runpages=["run1.html","run2.html"];

setTimeout(function(){
    text.innerHTML = storyItems[0];
    storyImage.innerHTML = illustration[0]}, 500);

setTimeout(function(){
    text.innerHTML = storyItems[1];
    storyImage.innerHTML = illustration[1]}, 4000);

setTimeout(function(){
    text.innerHTML = storyItems[2];
    storyImage.innerHTML = illustration[2];
    playerHP.innerHTML = "Player Hit Points: " + PlayHP;
    monsterHP.innerHTML= "The Beast's Hit Points: " + MonstHP;
    attackButton.classList.toggle("toggleon");
    runButton.classList.toggle("toggleon");}, 7500); 


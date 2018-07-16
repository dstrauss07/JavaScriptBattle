var playerHP = document.getElementById("player-hp"),
    monsterHP = document.getElementById("monster-hp"),
    text = document.getElementById("story-box"),
    storyImage = document.getElementById("story-image"),
    attackButton = document.getElementById("attack-button"),
    runButton = document.getElementById("run-button"),
    grenadeButton =document.getElementById("grenade-button"),
    hpBox = document.getElementById("hp-box"),
    monsterHit = document.getElementById("monster-hit"),
    playerHit = document.getElementById("player-hit");

var storyItems = [
    "<p>You Enter a Dark Cave</p>",
    "<p>As you venture deeper, you hear the pitter-patter of ominous footsteps</p>",
    "<p>It's a nasty little rabbit with BIIIIG Teeth</p>",
    "<p>You have fought the Beast to a stand still, there is not hope for victory, unless...</p>"  ]; 

var illustration = [
    "<img src='img/img1.jpg'>",
    "<img src='img/img2.jpg'>",
    "<img src='img/img3.jpg'>",
];

var cave = new Audio('mp3/cave.mp3'),
    footsteps = new Audio('mp3/footsteps.mp3'),
    rabbit = new Audio('mp3/rabbit.mp3')
    sword = new Audio('mp3/sword.mp3');


var PlayHP = 20,
    MonstHP = 20;
    runpages=["run1.html","run2.html"];

 setTimeout(load1, 500);
 setTimeout(load2, 3500);
 setTimeout(load3, 6500);


var dispHP =  function dispHP(){
    playerHP.innerHTML = "Player HP <br>" + "<div class='hp-number'>" + PlayHP + "</div>";
    monsterHP.innerHTML= "Rabbit HP <br>" + "<div class='hp-number'>" + MonstHP + "</div>";
}

function load1(){
    cave.play();
    text.innerHTML = storyItems[0];
    storyImage.innerHTML = illustration[0];
}

function load2(){
    footsteps.play();
    text.innerHTML = storyItems[1];
    storyImage.innerHTML = illustration[1];
}

function load3(){
    rabbit.play();
    text.innerHTML = storyItems[2];
    storyImage.innerHTML = illustration[2];
    attackButton.classList.toggle("toggleon");
    runButton.classList.toggle("toggleon");
    hpBox.classList.toggle("toggleon");
    dispHP();
}

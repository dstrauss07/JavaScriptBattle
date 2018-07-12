var getRandomNumber = function getRandomNumber(min, max){
    min  = Math.ceil(min);
    max = Math.floor(max);
    var randy = Math.random();
    return Math.floor(randy * (max-min +1)+min);
}

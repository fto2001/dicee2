var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1; 

var randomDice = "dice" + randomNumber1 + ".png";

var randomImage = "images/" + randomDice;

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImage);

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var randomDice2 = "dice" + randomNumber2 + ".png";

var randomImage2 = "images/" + randomDice2;

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

var hh = document.querySelector("h1");


    if (randomNumber1 > randomNumber2) {
        hh.innerHTML = "Player 1 Wins";
    }
    if (randomNumber1 < randomNumber2) {
        hh.innerHTML = "Player 2 Wins!";
    }
    if (randomNumber1 === randomNumber2) {
        hh.innerHTML = "Draw!"
    }

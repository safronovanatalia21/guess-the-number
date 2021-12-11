'use strict';
let answer;
let userAnswer1;
let userAnswer2;

function guessTheNumber() {
    answer = +parseInt(Math.random() * 100);
    userAnswer1 = +prompt("Player 1: guess number from 0 to 100. For exit press 0.");
    if (userAnswer1 == answer) {
        alert("Congratulations!");
    } else if (userAnswer1 == 0) {
        alert("Game over");
        break;
    } else {
        alert("Bad news. Player 2, your turn!");
    }
    userAnswer2 = +prompt("Player 2: guess number from 0 to 100.For exit press 0.");
    if (userAnswer2 == answer) {
        alert("Great!");
    } else if (userAnswer2 == 0) {
        alert("Game over");
        break;
    } else {
        alert("Sorry! Player 1, try again!");
    }
    userAnswer1 = +prompt("Player 1: you have one more chance! For exit press 0.");
    if (userAnswer1 == answer) {
        alert("Congratulations!");
    } else if (userAnswer1 == 0) {
        alert("Game over");
        break;
    } else {
        alert("You are loser! Player 2, your turn!");
    }
    userAnswer2 = +prompt("Player 2: one more attemp!For exit press 0.");
    if (userAnswer2 == answer) {
        alert("Congratulations!");
    } else if (userAnswer2 == 0) {
        alert("Game over");
        break;
    } else {
        alert("You are loser!");
    }
    alert("Desired number" + answer);
    return guessTheNumber();
}
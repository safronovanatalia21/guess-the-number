"use strict";
let answer;
let userInput;
let userAnswer;
let attemps;
let game;

function interview() {
    userInput = prompt("Угадай число от 1 до 100. Для отмены введите 0(ноль).");
    userAnswer = userInput;
    return userAnswer;
}

function getRandomInt(max) {
    answer = Math.floor(Math.random() * max);
    console.log(answer);
    return answer;
}

function isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function guessTheNumber(attemp) {
    interview();
    if (userAnswer !== answer || attemp > 0 & attemp <= 10) {
        if (userAnswer == answer || attemp === 0) {
            alert("Игра завершена!");
        } else if (!isNumber(answer)) {
            alert("Введите число!");
        } else if (userAnswer > answer && attemp > 0) {
            alert("Загаданное число больше");
            attemp--;
        } else if (userAnswer < answer && attemp > 0) {
            alert("Загаданное число меньше");
            attemp--;
        }
    }
    return guessTheNumber(attemp);
}

attemp = 10;
answer = getRandomInt(100);
game = guessTheNumber(attemp);

console.log(answer);
console.log(attemp);
console.log(game);
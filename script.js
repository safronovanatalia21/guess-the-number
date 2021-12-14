let answer;
let userInput;
let userAnswer;
let attempt;
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

function guessTheNumber(attempt) {
    interview();
    if (userAnswer !== answer || (attempt > 0) & (attempt <= 10)) {
        if (userAnswer == answer || attempt === 0) {
            alert("Игра завершена!");
        } else if (!isNumber(answer)) {
            alert("Введите число!");
        } else if (userAnswer > answer && attempt > 0) {
            alert("Загаданное число больше");
            attempt--;
        } else if (userAnswer < answer && attempt > 0) {
            alert("Загаданное число меньше");
            attempt--;
        }
    }
    return guessTheNumber(attempt);
}

attempt = 10;
answer = getRandomInt(100);
game = guessTheNumber(attempt);

console.log(answer);
console.log(attempt);
console.log(game);
console.log("check console");
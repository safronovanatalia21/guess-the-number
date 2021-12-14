let userNum;
let attempt = 10;
let randomNum = parseInt(Math.random() * 100);

function isNum(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function guessNumber() {
    userNum = prompt("Угадай число от 1 до 100");
    if (isNum(userNum)) {
        userNum = +userNum;

        if (attempt > 0) {
            if (userNum > randomNum) {
                attempt--;
                console.log(attempt);
                alert("Загаданное число больше");
            } else if (userNum < randomNum) {
                attempt--;
                console.log(attempt);
                alert("Загаданное число меньше");
            } else if (userNum == "Отмена") {
                alert("Игра окончена");
            } else if (userNum === randomNum) {
                alert("Поздравляю, Вы угадали!!!");
                return userNum;
            }
        } else {
            alert("Попытки закончились, хотите сыграть еще?");
        }
    } else {
        alert("Введи число!");
    }

    return guessNumber();
}
console.log(guessNumber());
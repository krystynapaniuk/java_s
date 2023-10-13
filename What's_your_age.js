let yourAge = prompt("Вкажіть свій вік");
console.log(yourAge);
if (yourAge <= 0) {
    console.log("Вас не існує")
}
    else if (yourAge === false) {
    console.log("Ви натиснули кнопку Cancel")
}
    else if (isNaN(yourAge)) {
    console.log("Будь ласка, введіть число")
} else {
    let CountAgeTwoNumbers = yourAge % 100;
    if (CountAgeTwoNumbers >= 11 && CountAgeTwoNumbers <= 14) {
        console.log("Тобі " + yourAge + " років");
    } else {
        let CountAgeOneNumber = CountAgeTwoNumbers % 10;
        if (CountAgeOneNumber === 1) {
            console.log("Тобі " + yourAge + " рік")
        } else if (CountAgeOneNumber >= 2 && CountAgeOneNumber <= 4) {
            console.log("Тобі " + yourAge + " роки")
        } else if (CountAgeOneNumber === 0 || CountAgeOneNumber >= 5 && CountAgeOneNumber <= 9) {
            console.log("Тобі " + yourAge + " років");
        }

    }
}

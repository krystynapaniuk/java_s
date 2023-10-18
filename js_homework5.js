/*function isNotANumber (value) {
    return value !== value && typeof value === 'number';
}
console.log(isNotANumber("qwerty"));
console.log(isNotANumber(NaN));
console.log(isNotANumber(isNaN()));
console.log(isNotANumber(13));// ці console.logи більше для мене:))

//============================================================================================

/*function pad (padString, padChar, length, position) {
    while (padString.length < length) {
        if (position ) {
            padString = padChar + padString; // додаємо символ на початок рядка
        } else {
            padString = padString + padChar; // додаємо символ в кінець рядка
        }
    }
    return padString;
}
console.log(pad('Animal','@', '10', true)); //щоб отримати рядок в 10 сімволів з '@' на початку
console.log(pad('Fish','#', '10', false)); //щоб отримати рядок в 10 сімволів '#' в кінці// */

//============================================================================================


function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < count; i++) {
        const randomNumber =
            Math.floor(Math.random() * 901) + 100; //махінації з діапазоном
        if (randomNumber % 2 === 0) {
            evenCount++
        } else {
            oddCount++;
        }
    }
    console.log("Парних чисел:", evenCount); //вивід підрахованих парних чисел
    console.log("Непарних чисел:", oddCount); //вивід підрахованих непарних чисел
}


console.log(checkProbabilityTheory(50)); // Генерує 50 випадкових чисел
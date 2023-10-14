//Variant 1//

/* drawTriangle(height,symbol) {
    let line = ""; // ініциалізую пустий рядок
    for (let a = 1; a <= height; a++) {
        line += symbol;
        console.log(line)
     }
}
drawTriangle(5,'@');*/
// в циклі додаю символ до пустого рядку і вивожу його на кожній ітерації


// Variant 2//
/*function drawTriangle(height,symbol) {
    let triangle =""; // ініциалізуємо пустий рядок
    while (triangle.length < height) {
 triangle += symbol;
 console.log(triangle)
  }
}
drawTriangle(5,'%')*/
// цикл продовжується до тих пір поки довжина рядку "triangle"//
//не досягне заданої висоти//

==============================================================================================

/*function sumNumber () {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        if (i % 3 !==0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumNumber())*/

==============================================================================================
/*function pow (number,degree) {
    let result = 1;
    for (let x = 1; x <= degree; x++) {
        result *= number;
    }
    return result
}

console.log(pow(3,4));/

//number - чісло, яке вводіться в ступінь, degree - ступінь//


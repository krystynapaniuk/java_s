let yourAge = prompt("Вкажіть свій вік");
console.log(yourAge);

let countAge = "";
let result;

if (countAge >= 10 && countAge <= 20) {
    result = "років" }

else {
    countAge = yourAge % 10
    if (countAge === 1) {
        result = "рік"
    } else if (countAge >= 2 && countAge <= 4) {
        result = "роки"
    } else {
        result = "років"
    }
}
console.log(yourAge + result);

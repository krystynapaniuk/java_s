
//Task 2
var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
];

function validEmail(email) {
    var re =  /^[A-Za-z0-9_]{4,6}\.[A-Za-z0-9_]{4,7}@(gmail\.com|yahoo\.com)$/; // мені сказали, що в куску @(gmail\.com|yahoo\.com) немає сенсу
    var domain = email.split("@")[1];                                           // бо в перемінній domain є ця перевірка
    if (re.test(email) && (domain === "gmail.com" || domain === "yahoo.com")) {
        return true;
    }
    return false;
}

var email = "test.test@gmail.com";
console.log(validEmail(email));

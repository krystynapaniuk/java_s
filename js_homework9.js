//Task 1

/*var str = "CAndy_neclace"
var re = /[^Aa]{6}/ //6 символів
//var re = /[^Aa]{6,}/ більше 6 символів
console.log(str.match(re));*/

//===================================================================================

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
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

function validEmail(email) {
    var re = /^[A-Za-z0-9-]{4,6}\.[A-Za-z0-9-]{4,7}@[a-z]{3}$/;
    var domain = email.split('@')[1];
    if (re.test(email) && domain !== 'mail.ru') {
        return true;
    }
    return false;
}

var email = "dmitro.porohov@yahoo.com";
console.log(validEmail(email));


 // var str = /^[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+$/; зробила валідацію окремо для імейла до "@"


var obj =
    {
        country: "USA",
        city: "Chicago",
        postCode: "60654",
        getInfo: function () {
            for (var property in this) {
                {
                    if (typeof this[property] !== 'function')   //перевірка, чи не є данна властивість функцією
                        console.log(property + ": " + this[property]);
                }
            }
        }

    }
   //obj.getInfo(); //виводиться об"єкт з трьома властивостями

obj.region = "IL"; // Додалась нова властивість до нашого об"єкту - region
console.log();

obj.getInfo(); //виводиться об"єкт + з усіма властивостями

//================================================================================================================*/

var services = {
    "hairCut": "60 $",
    "mustacheTrim": "30 $",
    "hairColoring": "50 $",
}
function price(services){
    let total = 0;
    for (const service in services) {
        total += parseInt(services[service]); //parseInt тут для перетворення стрінги в число і видалити $
    }
    return total + " $";
}
//console.log("Total services: " + price(services));
services ["beardTrim"] = "20 $";
services ["complimentWhiskeyGlass"] = "5 $";
//console.log("Total services: " + price(services)); // тотал з новими послугами

function minPrice(services) {
    let min = Infinity; // тут Infinity - початкове значення для мінімальної ціни в services
    for (const service in services) {
        const price =
            parseInt(services[service]);
        if (price < min) {
            min = price;
        }
    }
   return min + " $" ;
}
console.log("Minimum service price " + minPrice(services));// мінімальний прайс

function maxPrice(services) {
    let max = 0;
    for (const service in services) {
        const price =
            parseInt(services[service]);
        if (price > max) {
            max = price;
        }
    }
    return max + " $";
}
    console.log("Maximum service price " + maxPrice(services)); // максимальний прайс
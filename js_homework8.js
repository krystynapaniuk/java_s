
/*arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function myBlend(arr) {
    arr.sort(()=> Math.random() -0.5);
}
console.log("Initial array: " + arr);

myBlend(arr);
console.log("Mixed array: " + arr);*/

//=====================================================================================================

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};
function findValueByKey(company, companyName) {
    if (company.name === companyName) {
        return {
            name: company.name,
            type: company.type,
            platform: company.platform,
            sellsSolution: company.sellsSolution,
        };
    }
    return null; // Якщо не знайдено жодної компанії з потрібною назвою
}

const companyNameFound = 'Велика Компанія'; // Якщо вписати напріклад 'Клієнт 2', то спрацює else( не знайде компанію)
const result = findValueByKey(company, companyNameFound);

if (result) {
console.log("Компанія, яку ви шукаєте: ", result);
} else
 { console.log("Такої компанії не існує");
 }
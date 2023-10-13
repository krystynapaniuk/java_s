var amount =  7
var UnitOfMeasure = 'kilograms'
switch (UnitOfMeasure)
{
    case 'kilometers':
        console.log(amount, 'km is', amount * 1000, 'm')
        break;
    case 'hours':
        console.log(amount, 'h is', amount * 60, 'min')
        break;
    case 'kilograms':
        console.log(amount, 'kg is', amount * 1000, 'gr')
        break;
    default:
        console.log('Error.There is no such unit of measure')
}


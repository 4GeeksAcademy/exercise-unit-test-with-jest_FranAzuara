// Contenido de app.js 
console.log("Hello World");
function sum(num1,num2) {
    return num1 + num2;
}
// Solo un registro en consola para nosotros
console.log(sum(7,3))

//Tasas conversion de monedas
let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07, // US dollar
    "GBP": 0.87, // British pound
};

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

function fromDollarToYen(dollars) {
    return Math.round(((dollars / oneEuroIs["USD"]) * oneEuroIs["JPY"]) * 100) / 100;
}

function fromYenToPound(yen) {
    return Math.round(((yen / oneEuroIs["JPY"]) * oneEuroIs["GBP"]) *100) / 100;
}
// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
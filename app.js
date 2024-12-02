// Contenido de app.js 
console.log("Hello World");
function sum(num1,num2) {
    return num1 + num2;
}
// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
// Declaramos una función con el nombre exacto "formDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a Yen
    let valueInYen = valueInDollar * 156.5;
    // Retornamos el valor en Yen
    return valueInYen;
}
// Declaramos una función con el nombre exacto "formYenToPound"
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a Yen
    let valueInPound = valueInYen * 0.87;
    // Retornamos el valor en Yen
    return valueInPound;
}


// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

// Factorial
var factorial = 1;
for (var i = 1; i <= 7; i++) {
    factorial = factorial * i; // Calculation
}
console.log(factorial);



// Factorial Using Function
function factorial(number) {
    var factValue = 1;
    for (var i = 1; i <= 7; i++) {
        factValue = factValue * i; // Calculation
    }
    return factValue;
}
let factorialNumber = 7;
let factorialValue = factorial(factorialNumber)
console.log(factorialValue);


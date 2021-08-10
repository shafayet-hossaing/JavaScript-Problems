// Inches To Feet Calculation

function inchesToFeet(inches) {
    let feet = inches / 12; //  // Main Calculation == Dividing Inches By 12
    return feet; // Return Feet Variable For Putting The Function In A New Variable
}
let givenInches = inchesToFeet(24) // Calling The Function With Inches
console.log(givenInches);

// Leap Year Or Not
function isLeapYear(year) {
    if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) { // Conditions For Leap Year
        return "Leap Year" // If Condition Is Matched, Will Be Executed
    } else {
        return "Not Leap Year" // If Condition Is Not Matched, Won’t Be Executed
    }
}

const checkLeapYear = isLeapYear(2225) // Calling The Function With Argument In A variable
console.log(checkLeapYear); // Here You Go



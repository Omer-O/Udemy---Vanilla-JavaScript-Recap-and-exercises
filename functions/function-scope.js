// Global Scope (converFarenheitToCelsius, tempOne, TempTwo)
    // Local scope (fahrenheit, celcius)
        // Local scope (isFreezing)


let converFarenheitToCelsius = function (fahrenheit) {
    let celcius = (fahrenheit - 32) * 5 / 9;

    if (celcius <= 0) {
        let isFreezing = true;
    }

    return celcius;
}

let temp = converFarenheitToCelsius(32);
let tempTwo = converFarenheitToCelsius(68);

console.log(temp);
console.log(tempTwo);

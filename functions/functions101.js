//Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('welcome user'); 
}

greetUser(); // call the function

let square = function (num) {
    let result = num * num;
    return result;
}

let value = square(3); //store the function call in a variable.
let valueTwo = square(10); //store the function call in a variable.

console.log(value);
console.log(valueTwo);

//Challenge:

//converFarenheitToCelsius

//call a couple of times (32 -> 0) (68 -> 20)

//print the converted values.

let converFarenheitToCelsius = function (fahrenheit) {
    let celcius = (fahrenheit - 32) * 5 / 9;
    return celcius;
}

let temp = converFarenheitToCelsius(32);
let tempTwo = converFarenheitToCelsius(68);

console.log(temp);
console.log(tempTwo);


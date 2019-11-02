// naming in JavaScript can start only with: a-z / A-Z / $ _ 
//declairing 2 varibales with the same name will not work: 
let petName = 'ber';
//let petName = 'Lucky';

console.log(petName); // will print that petName is already declaired

//assign a variable different string to the var will work: 

petName = 'spot';
console.log(petName); // will print spot


let fahrenheit = 32; 

// calculate celcius -- store in celsius

let celcius = (fahrenheit - 32) * 5 / 9;

console.log(celcius);


// calculate kelvin -- store in kelvin

let kelvin = (fahrenheit + 459.67) * 5 / 9;

console.log(kelvin);

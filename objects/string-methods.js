
//Length property:
let name = ' Omer Ohana ';
console.log(name.length);

//METHOD lower to upercase
console.log(name.toUpperCase());

//includes
let password = 'abcpassword0-9';
console.log(password.includes('password'));
//print true the string 'password' exist in the variable password.

//trim - remove extra white spaces in the string
console.log(name.trim());


//Challenge: 

//isValidPassword.
//length more than 8 & no 'password' word - true. else - false

let isValidPassword = function (str) {
    return str.length > 8 && !str.includes('password');
}

console.log(isValidPassword('egeg'));
console.log(isValidPassword('egegpasswordefgeg44'));
console.log(isValidPassword('egegvvrgvrgvrgvrgvbbbbbb'));


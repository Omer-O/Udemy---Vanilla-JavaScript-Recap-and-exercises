
// //Strings: 
// let temp = 'Omer';

// // === - equality operator: 
// let isFreezing = temp === 'Omer'; // print true
// let isFreezing = temp === 'Omer '; // print false

// // !== - not equal operator:
// let isFreezing = temp !== 'Omer'; // print false



// //Numbers: 
// let temp = 31;

// // < - les than operator: 
// let isFreezing = temp < 32; // print true
// // > - less than or equal to operator:
// let isFreezing = temp <= 31; // print true (not less than but equal)
// // > - greater than operator:
// let isFreezing = temp > 31; // print false
// // > - greater than or equal to operator:
// let isFreezing = temp >= 31; // print true (not greater than but equal)

//challenge 1:
//Create age set to your age. 
//calculate isChild - if they are 7 or under.
//calculate isSenior - if they are 65 or older. 
let age = 65;

let isChild =  age <= 7;
let isSenior =  age >= 65;

console.log(isChild);//print false
console.log(isSenior);//print true


//if statments:
let temp = 180;

//let isFreezing = temp <= 32;
// if (isFreezing) {
//     //code block
//     console.log('freezing indeed');
    
// } print true

if (temp <= 32) {
    //code block
    console.log('freezing indeed');
    
} // will not print - temp is 180

if (temp >= 110) {
    console.log('so hoooot');
    console.log('test111');
}//will print both lines - temp is 180

//challenge 2:
//Create age set to your age. 
//if 7 or under - print massage for child discount.
//if 65 or older - print massage for senior discount.

let ageCustomer = 6;

if (ageCustomer <= 7) {
    console.log('you get a child discount - 10%');
    
}

if ( ageCustomer >= 65) {
    console.log('you get a senior discount - 50%');
    
}
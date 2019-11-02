//undefined situations: 
let name 

if (name === undefined) {
    console.log('name!');
    
} else {
    console.log(name);
    
}

console.log(name); // will print undefined - name is undefined 


//Undefined for function arguments
let square = function (num) {
    console.log(num);
}

square();//will print undefined

let result = square();
console.log(result);// will print undefined: first - when call the function. second - when .log result.

let age = 34;

age = null // the variable was cleared by the developer
//rather than undefined - when JavaScript cannot define the variable. 

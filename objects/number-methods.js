let num = 103.941;

//toFixed() - how many decimal we will use
console.log(num.toFixed(2));
//Math.round() -- will round it up or down
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

//Math.rendom() -- generate a rendom number between 0 to 0.999999999 (not 1). 
let randomNum = Math.random();
console.log(randomNum);

//what if we want only whole numbers like 10 20 etc.
let min = 10;
let max = 20;
//Math.random for the random number * in max - min will give us the range (10-20)
// the + 1 will resolve from 9.999 -> 10.9999 -- than wrap it in Math.floor to get round number. 
let randomNumber = Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomNumber);//will generate a different number every time


//Challenge:
// 1 - 5: true if correct - false if not correct

let makeGuess = function (guess) {
    let min = 1;
    let max = 5;       
    let randomNumber = Math.floor(Math.random() * (max - min) + 1) + min;

    return guess === randomNumber;
}

console.log(makeGuess(1));


//Multile arguments:

let add = function (a, b, c) {
    return  a + b + c;
}

let result = add(10, 1, 5);
console.log(result);


//Deafault Arguments:

let getFirstTimeScoreText = function (name = 'Anonymous', score = 0) {
        console.log(name);
        console.log(score);
}

getFirstTimeScoreText('Omer', 100); // will print Omer and 100 -- the 0 
//and Anonymous will be printed only if no name or score will be given.

let getSecondTimeScoreText = function (name = 'Anonymous', score = 0) {
   
    // return 'Name: ' + name + ' Score: ' + score;
    // The back tick key (``) allow us to use template string - code is cleaner and easy to change. 
    return `Name: ${name} Score: ${score}`;
}

let scoreText = getSecondTimeScoreText(undefined, 99);// print Anonymous and 99.
console.log(scoreText);


// the back tick key (``):

let nameString = 'Omer';
let age = 32; 
console.log(`Hey, my name is ${nameString}! I am ${age} years old.`);

//challenge:

//return MSG with backTickKey: A 25% tip on $40 would be 10$

let getTipp = function(total, tipPercent = .2) { // by assign 0.2 as a default.
    // return 'tip is: ' + total * tipPercent;
    let percent = tipPercent * 100;
    let tip = total * tipPercent;
        return `A ${percent}% tip on ${total}$ would be ${tip}$`;

//OR
    //we can do also all the calculations on the return in the injected Javascript code:
        // return `A ${tipPercent * 100}% tip on ${total}$ would be ${total * tipPercent}$`;
    //not prefarable, but sometimes usefull.
}

let tipp = getTipp(40, .25);
console.log(tipp);

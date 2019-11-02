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
    return 'Name: ' + name + ' Score: ' + score;
}

let scoreText = getSecondTimeScoreText(undefined, 99);// print Anonymous and 99.
console.log(scoreText);


//challenge

let getTipp = function(total, tipPercent = .2) { // by assign 0.2 as a default.
    return 'tip is: ' + total * tipPercent;
}

let tipp = getTipp(200);//will print 'tipp is: 60' as second argument will use the default .2
console.log(tipp);

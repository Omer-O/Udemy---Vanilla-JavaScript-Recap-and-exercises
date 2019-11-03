//var: we can redeclair a variable in the same programm -- 
//problematic in multiple files and functions code.

if (10 ===10) {
    var firstName = 'Omer'
}
console.log(firstName); //will print firstName --
// with let and const will resolve with an error -- because they are block scoped.
//var has a function based scope - if we dont create a new function we dont create a new scope
//

const setName = function () {
    var firstName = 'Omer'
}
setName();//we call the function -- var will run.
console.log(firstName);//we cannot access var -- 
//will resolve with an error -- var is a function based scope.


//another issue with var:
console.log(name);
var name; 
//will resolve as undefined -- rather that 'not declaired' -- declaration of var get hoisted to the top of the scope
name = 'poter'
console.log(name);
var name; 
//although name declaired down in the code -- var get hoisted to the top of the scope -- means
//we will get log 'poter' -- rather than undefined. 

//let:
let isRainy = true;//assign
isRainy = false; //reassign 

console.log(isRainy);//will print false. -- we reassigned. 

//const: 
//clear sementhic in the programm --  const is a variable that his value will never change -- 
const isRaining = true;//assign
//isRaining = false; //reassign -- error

console.log(isRaining);//-- we reassigned -- will resolve an error

const person = {
    age: 34
}

//pesron = {} //will not work -- I try to reassign const person
person.age = 35; //will work -- we only changing the object's property

console.log(person);

//Challenge:
//function to calculate student's grade (studentScore, totalPossibleScore)
//if student get 15/20 -> return msg -> You got a C (75%)!
//A 90-100, B 80-89, C 70-79, D 60-69, F 0-50

const grade = function(studentScore, totalPossibleScore) {
    const testScore = (studentScore / totalPossibleScore) * 100;
    // use an empty string and inject the score in the return statment will save lines of code.
    let letterGrade = ''; //cannot be const -- reassigned several times in the function. 

    if (testScore >= 90) {
        letterGrade = 'A';
    } else if (testScore >= 80) {
        letterGrade = 'B';
    } else if (testScore >= 70) {
        letterGrade = 'C';
    } else if (testScore >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }
    //1 return statment - cleaner code.
    return `You got a ${letterGrade} ${testScore}%`;
}

const studentGrade = grade(16, 20); 
console.log(studentGrade);//score will print B with 80%.

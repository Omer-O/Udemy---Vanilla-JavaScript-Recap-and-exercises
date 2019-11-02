//object {} inside an obj we have properties :
let myBook = {
    title: '1984', //property title: with string '1984.
    author: 'George Orwell',
    pageCount: 326
}

console.log(myBook); //will print {object} with all properties inside.
console.log(myBook.title);//will print propertyu title = 1984.

console.log(`${myBook.title} by ${myBook.author}`);

//change object property:
myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}`);

//Challenge: 
//object with name, age, location properties.
//log msg: name is age and lives in location
//log new msg: modify age. 

let personalDetails = {
    name: 'Omer',
    age: 34,
    location: 'Berlin'
}

console.log(`${personalDetails.name} is ${personalDetails.age} and lives in ${personalDetails.location}.`);

//change name, age:
personalDetails.name = 'Daniel';
personalDetails.age = personalDetails.age - 29;

console.log(`${personalDetails.name} is ${personalDetails.age} and lives in ${personalDetails.location}.`);

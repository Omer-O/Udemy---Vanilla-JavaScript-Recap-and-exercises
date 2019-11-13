// const notes = ['note 1', 'note 2', 'note 3'];
// //length - number of items in the array + 1.
// notes.length;
// console.log(notes.length);//length will give us 3 but we actually got 0 1 2 + 1 = 3

// //braket notation: name of the variable and [] inside we write number. 
// console.log(notes[0]);//will resolve - 'note 1'
// console.log(notes[notes.length - 1]);//will give us the last item in the list.
// console.log(notes[notes.length - 2]);//will give us the second to the last item in the list.


// //pop - remove last item in the array: 
// notes.pop();
// //shift - remove the first item:
// notes.shift();
// //unshift - adds to the begining of the array -- needs argument
// notes.unshift('first note');

// //splice -- insert elements in the middle of an array
// // first argument - will be the starting point - index
// // second argument - ask how many items to replace/insert.
// notes.splice(1, 2);//replaces 2 elements at index 1
// notes.splice(1, 0, 'note insert');//inserts at index 1 -- will not replace any item.
// notes.splice(1, 1, 'second note insert');//inserts at index 1 -- will replace item number 1.

// //to swap only 1 item in the array we can also use:
// notes[2] = 'this is the new note 3';

// //Add into the array:
// notes.push('new note');//add to the end of the array -- needs argument
// console.log(notes);


// //looping:

// //forEach.
// notes.forEach(function (item, index) { //callback function - a function we call in another function.
//     console.log(index);//will print the index of the item in the array.
//     console.log(item);//will print the item itself in the array.
// })

// //counting ...1 :
// //for loop
// for (let i=0; i <= 2; i++) {// i - runs 1 time; true or false; increase the count (0 to 1 to 2 etc.)
//     console.log(i);
    
// }
// for (let i=4; i >= 0; i--) {// count down - reverse
//     console.log(i);
// }

// //for loop in array:
// for (let count = 0; count < notes.length; count++) {//local scoping to the for statment.
//     //to pull out the info will use braket notation - 
//     //calling the array[the variable we declaied]
//     console.log(notes[count]);
// }
// //count in reverse:
// for (let count = notes.length -1; count >= 0; count--) {
//     console.log(notes[count]);
// }

// console.log(notes.indexOf('note 2'));//will return the items position in the array 
// //if we get negtive number -1 - the item does not axist.

// //expolre indexOf: 
// //objects will be equal only if they are the same object in memory
// //does not matter if they have the same property values!!!

// //example:
// let object = {};//object stored in memory
// let someObject = object;//reference of the object
// console.log(object === someObject);//will print true

// console.log({} === {});//will print false!


const notes = [{
    title: 'next trip',
    body: 'spain'
}, {
    title: 'next food',
    body: 'chili con carne'
}, {
    title: 'last travel',
    body: 'costa-rica'
}]

//find():
const findNote = function (notes, noteTitle) {
    notes.push();//will change the original array and not a clone!
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();//toLowerCase will cxl text sensitivity.
    })
}

const noteArray = findNote(notes, 'last travel');//pass the array to search and the search text we look for.
console.log(noteArray);

//filter();

const findNotes = function (notes, query) {//query will allow accsses to user's text.
    return  notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLocaleLowerCase().includes(query.toLowerCase());//creating a variable that
        //check the array(note)property(title)cxl case sensitivety(toLower)if includes(includes).
        const isBodyMatch = note.body.toLocaleLowerCase().includes(query.toLowerCase());//same as above we do to Body property
        return isTitleMatch || isBodyMatch;
    });
}


console.log(findNotes(notes, 'trip'));


//findIndex: will allow us to work with array of objects:

//with findIndex we return true or false.
// const index = noteArray.findIndex(function (note, index) {
//     console.log(note);
//     return noteArray.title == 'next trip'
    
// })
// console.log(index);

// const findNote = function (note, noteTitle) {
//     const index = noteArray.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase();//toLowerCase will cxl text sensitivity.
//     })
//     return note[index];
// }


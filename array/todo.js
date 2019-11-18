

const toDo = [ 
    'Recap Javascript',
    'Recap React',
    'Recap Vue',
    'Find an office',
    'Water my plants'
]

//Challenge 1:
//print msg: You have x todos
let toDoLength = toDo.length;
console.log(`Omer you have ${toDoLength} todos`);
//print first and second last item 
console.log(`Todo: ${toDo[toDo.length - 1]}`);
console.log(`Todo: ${toDo[toDo.length - 2]}`);


//Challenge 2: 
//Delete the third item.
toDo.splice(2, 1);
//Add a new item onto the end.
toDo.push('Dont forget the kids!');
//Remove the first item from the list.
toDo.shift();

//Challenge 3: forEach loop
toDo.forEach(function (item, index) {
    console.log(`${index + 1}. ${item}`);
});

//Challenge 4: for statment loop
//log the number of tesk + the tesk.
for (let i=0; i < toDo.length; i++) {
    const num = i + 1;
    const todo = toDo[i]
    console.log(`${num}. ${todo}`);
}


//Array of objects:
const toDoArray = [ {
    text: 'Recap Javascript',
    completed: true
},
{
    text: 'Recap React',
    completed: true
},
{
    text: 'Recap Vue',
    completed: false
},
{
    text: 'Water my plants',
    completed: true
},
{
    text: 'Find an office',
    completed: false
}]

//Challenge 5: 
//create a function to remove a tesk by text value.

const deleteToDo = function (notes, noteTitle) {
     const index = notes.findIndex(function (note) {
        return note.text.toLowerCase() === noteTitle.toLowerCase();
    });
    if (index > -1) { //if greater than -1 we know we have a match
        notes.splice(index, 1) //index-the item, 1-how many to delete.
    };
};
deleteToDo(toDoArray, 'water my plants'); //will delete our text. 
console.log(toDoArray);



//Challenge 6: 
//delete from array tesks that are done (=true) -- return a filtered array.

const getThingsDone = function (todos) {
    //return the filtered array
    return todos.filter(function (todo) {
        //pass the indevidual property and check if true or false
        return !todo.completed //will return false 
        //different writen:
    //return indevidualToDo.completed === false//will return false 
    });
};

console.log(getThingsDone(toDoArray));


//Challenge 7: 
//function that sort the Array list, first false, than true. 

const sortlist = function (todo) {
    todo.sort(function (a, b) {
        //check if A wasn't completed will come before B
        if (!a.completed && b.completed) {
            //return a (false) first.
            return -1;
            //check if B wasn't completed will come before A
        } else if (!b.completed && a.completed) {
            //return b (false) first.
            return 1;
        } else {
            return 0;
        }
    })
}
sortlist(toDoArray);
console.log("Im sorted!!", toDoArray);

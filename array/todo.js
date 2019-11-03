

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
console.log(toDo);

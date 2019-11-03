const notes = ['note 1', 'note 2', 'note 3'];
//length - number of items in the array + 1.
notes.length;
console.log(notes.length);//length will give us 3 but we actually got 0 1 2 

//braket notation: name of the variable and [] inside we write number. 
console.log(notes[0]);//will resolve - 'note 1'
console.log(notes[notes.length - 1]);//will give us the last item in the list.
console.log(notes[notes.length - 2]);//will give us the second to the last item in the list.


//pop - remove last item in the array: 
notes.pop();
//shift - remove the first item:
notes.shift();
//unshift - adds to the begining of the array -- needs argument
notes.unshift('first note');

//splice -- insert elements in the middle of an array
// first argument - will be the starting point - index
// second argument - ask how many items to replace/insert.
notes.splice(1, 2);//replaces 2 elements at index 1
notes.splice(1, 0, 'note insert');//inserts at index 1 -- will not replace any item.
notes.splice(1, 1, 'second note insert');//inserts at index 1 -- will replace item number 1.

//to swap only 1 item in the array we can also use:
notes[2] = 'this is the new note 3';

//Add into the array:
notes.push('new note');//add to the end of the array -- needs argument
console.log(notes);



console.log('Hello from note-functions.js');

//READ existing data from Localstorage:
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes');
    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return [];
    }
};
//save the notes to LocalStorage:
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}
//generate the DOM structure for a note:
const generateNoteDOM = function (note) {
    const noteElement = document.createElement("p");
    if(note.title.length > 0){
        noteElement.textContent = note.title;
    } else {
        noteElement.textContent = 'undefined note'
    }
    return noteElement
}

//function to renderNotes:
const renderNotes = function(notes, filters) {
  const filteredNotes = notes.filter(function(note) {
    //filter Array by searchText:
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  //clearing the array by search input:
  document.querySelector("#notes").innerHTML = "";
  //returning the matching text in the Array according to the input text:
  filteredNotes.forEach(function(note) {
      const noteElement = generateNoteDOM(note)
      document.querySelector("#notes").appendChild(noteElement);
  });
}; //renderNotes close.






//////////////// P R A C T I C E /////////////////////////////////

///local storage:
// const user = {
    //     name: 'Omer',
    //     age: 35
    // }
    // //JSON.STRINGIFY make a string what ever we pass to it
    // const userJSON = JSON.stringify(user);
    // localStorage.setItem('user', userJSON);

    //JSON parse to get the data back as an object so we can fetch the data correctly
    // const userJSON = localStorage.getItem('user');
    // const user = JSON.parse(userJSON);
    // console.log(`name:${user.name} age:${user.age}`);

///localStorage end

//checkbox targeting and loging false/true (checkbox needs to be inside HTML attribute)
// document.querySelector("#checkbox").addEventListener("change", function(e) {
//   console.log(e.target.checked);
// });

// document.querySelector("#name_form").addEventListener("submit", function(e) {
//   e.preventDefault();
//   console.log(e.target.firstName.value);
//   //clearing the input field:
//   e.target.elements.firstName.value = "";
// });

//remove note from list:
// document.querySelector('#remove-button').addEventListener('click', function () {
//     console.log('hi im button number 2!');
//     document.querySelectorAll('.note').forEach(function(note) {
//         note.remove()
//     });
// })

/////////////////LOCAL STORAGE//////////////////
//CREATE storage data: argument ('key', 'data')
// localStorage.setItem('location', 'Berlin');

//READ storage data: argument ('key')
// console.log(localStorage.getItem('location'));

//DELETE data from local storage;
//#1 removeItem -> argument ('key')
// localStorage.removeItem('location');
//#2 clear -> clear everything
// localStorage.clear();


//Practice :

//Select one <p> Query and remove
// const p = document.querySelector('p');
// p.remove();

//Select All <p> Queries
const ps = document.querySelectorAll("p");

ps.forEach(function(p) {
    //targeting all <p> text and modify it
    p.textContent = "*****";
    ////targeting <p> and erase
    // p.remove();
});

//Add new html element
const newPer = document.createElement("p");
newPer.textContent = "new Element from script.js";
document.querySelector("body").appendChild(newPer);

console.log("hello");
const notes = getSavedNotes();
const filters = {
  searchText: ""
};
renderNotes(notes, filters);
//grab input text inside search input and assign it to a div:
document.querySelector("#search").addEventListener("input", function(e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});
// evenlistener click button and change button's text:
document.querySelector("#create-button").addEventListener("click", function(e) {
  console.log(e);
  e.target.textContent = "note added";
  notes.push({
      title:'',
      body:''
  });
  saveNotes(notes);
  renderNotes(notes, filters);
});
//listener to select attribute in HTML:
document.querySelector('#drop_down').addEventListener('change', function(e) {
    console.log(e.target.value);
});

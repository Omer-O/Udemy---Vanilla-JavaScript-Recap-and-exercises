let toDoArray = getSavedTodos();
console.log(toDoArray);
const filters = {
  searchText: "",
  hideCompleted: false
};
renderTodos(toDoArray, filters);


/////////////////////////eventlisteners/////////////////////////////////////
//listen to input search in input field
document.querySelector("#search_todo").addEventListener("input", function(e) {
  filters.searchText = e.target.value;
  renderTodos(toDoArray, filters);
});

document.querySelector("#todo_form").addEventListener("submit", function(e) {
  e.preventDefault();
  //push to the array the submited info from the input:
  console.log(e.target.todo_text.value);
  toDoArray.push({
    text: e.target.elements.todo_text.value,
    completed: false
  });
  saveTodos(toDoArray);
  renderTodos(toDoArray, filters);
  //clear the input field:
  e.target.elements.todo_text.value = "";
});









//targeting the checkbox and render the array accordingly:
// document.querySelector("#hide").addEventListener("change", function(e) {
//   filters.hideCompleted = e.target.checked;
//   renderTodos(toDoArray, filters);
// });

//add a button with click eventListener
// document.querySelector("#add_todo").addEventListener("click", function(e) {
//   console.log("I was clicked");
// });

//listen to input text in input field
// document.querySelector("#new_todo").addEventListener("input", function(e) {
//   console.log(e.target.value);
// });

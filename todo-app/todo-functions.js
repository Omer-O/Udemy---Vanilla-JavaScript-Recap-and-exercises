console.log('Hello from todo-functions');

//get existing todos from local storage:
const getSavedTodos = function () {
    //check and READ saved data (if exised)
    const todoList = localStorage.getItem('toDoArray');
    //if not null than get the todo Array from local storage as an object
    if (todoList !== null) {
        return JSON.parse(todoList);
    } else {
        return [];
    }
}

//save todos to localStorage:
const saveTodos = function (toDoArray) {
    localStorage.setItem('toDoArray', JSON.stringify(toDoArray));
};

//Render application todos based on filters:
    const renderTodos = function(todos, filters) {
      const filteredTodos = todos.filter(function(todos) {
         const searchMatched = todos.text.toLowerCase().includes(filters.searchText.toLowerCase());
         const hideMatched = !filters.hideCompleted || !todos.completed;
         return searchMatched && hideMatched;
      });
      const incomplete = filteredTodos.filter(todo => {
        return !todo.completed;
      });
       //clear input field:
      document.querySelector("#todos").innerHTML = "";
      document.querySelector("#todos").appendChild(generateSummaryDOM(incomplete));
      //Add a <p> to the todo list (text value)
      filteredTodos.forEach(todo => {
          document.querySelector("#todos").appendChild(generateTodoDOM(todo));
      });
    };

//get the DOM elements for an individual note:
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement("p");
    todoEl.setAttribute("id", "todos");
        todoEl.textContent = todo.text;
        return todoEl;
};

//get the DOM elements for list summary:
const generateSummaryDOM = function (incomplete) {
    const listSummary = document.createElement("h3");
    listSummary.textContent = `You have ${incomplete.length} todos left`;
    return listSummary;
};

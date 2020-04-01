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

//remove item from Array:
const removeTodoItem = function (id) {
    const itemIndex = toDoArray.findIndex(function (todo) {
        console.log('this is todo from findIndex', todo);
        return todo.id === id;
    });
    //if bigger the -1 we have a match (true)
    if (itemIndex > -1) {
        toDoArray.splice(itemIndex, 1);
    }
    return
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
    //create DOM elements
    const todoContainer = document.createElement("div");
    const todoCheckBox = document.createElement("input");
    const todoEl = document.createElement("span");
    const todoButton = document.createElement("button");

    //setup checkbox
    todoCheckBox.setAttribute("type", "checkbox");
    todoContainer.appendChild(todoCheckBox);

    //setup text
    todoEl.setAttribute("id", "todos");
    todoEl.textContent = todo.text;
    todoContainer.appendChild(todoEl);

    //setup remove button
    todoButton.textContent = "x";
    todoButton.addEventListener('click', function() {
        removeTodoItem(todo.id);
        saveTodos(toDoArray);
        renderTodos(toDoArray, filters);
    });
    todoContainer.appendChild(todoButton);

    return todoContainer;
};

//get the DOM elements for list summary:
const generateSummaryDOM = function (incomplete) {
    const listSummary = document.createElement("h3");
    listSummary.textContent = `You have ${incomplete.length} todos left`;
    return listSummary;
};

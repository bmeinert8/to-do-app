//retrieve data from local storage or create an empty array

let todos = JSON.parse(localStorage.getItem("todo")) || [];

//create variables for the input field, add button, counter and todo list
const tdInput = document.getElementById("tdInput");
const addButton = document.querySelector(".btnAdd");
const counter = document.getElementById("taskCounter");
const todoList = document.getElementById("todoList")
const deleteButton = document.querySelector(".btnDelete");


//add event listener to the document

document.addEventListener("DOMContentLoaded", () => {
    //add event listener to the add button whenever it is clicked
    addButton.addEventListener("click", addTask);
    //add event listener to the input field whenever a key is pressed
    tdInput.addEventListener("keydown", (event) => {
        //If the key pressed is the enter key, call the addTask function
        if (event.key === "Enter") {
            event.preventDefault();
            addTask();
        }
    });
    //display the tasks
    displayTasks();
});

//add task function
const addTask = () => {
  //create a new task variable and assign the value of the input field to it after trimming it.
    const newTask = tdInput.value.trim();
    //if the input field is empty, alert the user to enter a task
    if (newTask === "") {
        alert("Please enter a task");
        return;
    //if the input field is not empty, push the new task to the todos array, save to local storage, clear the input field and display the tasks
    } else {
        todos.push({
            text: newTask, disabled: false});
        saveToLocalStorage();
        tdInput.value = "";
        displayTasks();
    }
}

//save to local storage function
const saveToLocalStorage = () => {
  //save the todos array to local storage by converting the javascript object to a string
    localStorage.setItem("todo", JSON.stringify(todos));
}

//display tasks function
const displayTasks = () => {
  //The li element with the id=todoList is set to an empty string
  todoList.innerHTML = "";
  //loop through the todos array and display each task as a paragraph element in the list item with the id=todoList
  todos.forEach((item, index) => {
    //create a new paragraph element
    const p = document.createElement("p");
    //set the inner html of the paragraph element to the task text
    p.innerHTML = `
<<<<<<< HEAD
      <div class="todoContainer">
        <input type="checkbox" class="todoCheckbox" id="input-${index}" ${
=======
      <div class="todo-container">
        <input type="checkbox" class="todo-checkbox" id="input-${index}" ${
>>>>>>> 5fdd356a33febc22d18e245bb399d8badb04b1df
      item.disabled ? "checked" : ""
    }>
        <p id="todo-${index}" class="${
      item.disabled ? "disabled" : ""
    }" onclick="editTask(${index})">${item.text}</p>
      </div>
    `;
    //add an event listener to the paragraph element to toggle the task when clicked
<<<<<<< HEAD
    p.querySelector(".todoCheckbox").addEventListener("change", () =>
=======
    p.querySelector(".todo-checkbox").addEventListener("change", () =>
>>>>>>> 5fdd356a33febc22d18e245bb399d8badb04b1df
      toggleTask(index)
    );
    //append the paragraph element to the todoList list item
    todoList.appendChild(p);
  });
}
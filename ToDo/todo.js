let addTask = document.querySelector(".addNew");
let inputField = document.querySelector(".todo-input");
let container = document.querySelector(".container");

// Create a single UL to hold all tasks
let taskList = document.createElement("ul");
taskList.classList.add("task-list");

//addTask.insertAdjacentElement("afterend", taskList);
addTask.after(taskList)

addTask.addEventListener("click", function () {
 

  if (inputField.value.trim() === "") {
    alert("Enter a Task");
    return;
  }
  let newItem = document.createElement("li");
  newItem.textContent = inputField.value.trim();
  
    taskList.appendChild(newItem);
  

 inputField.value = "";
});

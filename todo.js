let addTask = document.querySelector(".addNew");

addTask.addEventListener("click", function (e) {
  const newInput = document.createElement("input");
    const cb=document.createElement("input")
cb.type="checkbox"
  cb.classList.add("checkbox");
  newInput.type = "text";
  newInput.placeholder = "Add a new task...";
  newInput.classList.add("todo-input");


const container = document.querySelector(".container");
  const subContainer = document.createElement("div");
  subContainer.classList.add("subContainer");

  subContainer.appendChild(newInput);
  subContainer.appendChild(cb);
  container.insertBefore(subContainer, addTask);
});

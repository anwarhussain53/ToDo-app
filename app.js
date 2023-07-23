document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
  
    addButton.addEventListener("click", function () {
      const taskText = taskInput.value.trim();
  
      if (taskText !== "") {
        addTaskToList(taskText);
        taskInput.value = "";
      }
    });
  
    taskInput.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        addButton.click();
      }
    });
  
    taskList.addEventListener("click", function (event) {
      if (event.target.classList.contains("delete-button")) {
        const listItem = event.target.parentElement;
        taskList.removeChild(listItem);
      }
    });
  
    function addTaskToList(taskText) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-button">Delete</button>
      `;
      taskList.appendChild(listItem);
    }
  });
  
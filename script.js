document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("taskInput").value;
    if (taskInput.trim() === "") return;

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");

    li.innerHTML = `${taskInput} 
        <button onclick="deleteTask(this)">❌</button>
        <button onclick="completeTask(this)">✅</button>`;

    taskList.appendChild(li);
    saveTasks();
}

function deleteTask(button) {
    button.parentElement.remove();
    saveTasks();
}

function completeTask(button) {
    button.parentElement.style.textDecoration = "line-through";
    saveTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
}

function loadTasks() {
    document.getElementById("taskList").innerHTML = localStorage.getItem("tasks") || "";
}
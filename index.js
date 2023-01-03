const submitButton = document.querySelector('.submit');
const tasks = document.querySelector('.tasks');
const messageElement = document.querySelector('.message');
const deleteButton = document.querySelector('.delete');

submitButton.addEventListener('click', addTask);
tasks.addEventListener('click', handleTaskClick);
deleteButton.addEventListener('click', clearList);

displayMessage('Good, you have no tasks today!');

function addTask() {
    const newTask = document.querySelector('.newTask');
    if (newTask.value) {
        tasks.innerHTML += `<li class='taskList'>${newTask.value}</li>`
        newTask.value = '';
        messageElement.innerText = '';
    } else {
        displayMessage('Please provide a valid input');
    }
}

function isValid(input) {
    if (input) {
        return true;
    }
    return false;
}

function displayMessage(message) {
    messageElement.innerText = message;
}

function handleTaskClick(event) {
    const style = event.target.style;
    if (!style.textDecoration) {
        style.textDecoration = 'line-through';
    } else {
        style.textDecoration = '';
    }
}

function clearList() {
    const taskList = tasks.getElementsByClassName('taskList');
    while (taskList.length > 0) {
        taskList[0].parentElement.removeChild(taskList[0])
    }
    displayMessage('Good, you have no tasks today!');
}
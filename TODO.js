// Selectors
const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <span class="delete">Delete</span>
    `;

    taskList.appendChild(taskItem);

    taskInput.value = ''; // Clear input field

    // Delete task
    taskItem.querySelector('.delete').addEventListener('click', function () {
        taskItem.remove();
    });
}

// Event listeners
addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});




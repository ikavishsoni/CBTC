function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const taskTime = document.getElementById('taskTime');
    const taskText = taskInput.value.trim();
    const taskDateValue = taskDate.value;
    const taskTimeValue = taskTime.value;

    if (taskText === '') return;

    const task = {
        id: Date.now(),
        text: taskText,
        date: taskDateValue,
        time: taskTimeValue,
        completed: false
    };

    displayTask(task);
    taskInput.value = '';
    taskDate.value = '';
    taskTime.value = '';
}

function displayTask(task) {
    const list = task.completed ? document.getElementById('completedList') : document.getElementById('taskList');
    const listItem = document.createElement('li');
    listItem.setAttribute('data-id', task.id);

    const taskText = document.createElement('span');
    taskText.textContent = `${task.text} (Date: ${task.date || 'None'}, Time: ${task.time || 'None'})`;

    listItem.appendChild(taskText);

    const actions = document.createElement('div');
    actions.classList.add('actions');

    if (!task.completed) {
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.onclick = () => completeTask(listItem, task);
        actions.appendChild(completeButton);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editTask(task.id);
        actions.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(listItem, task.id);
        actions.appendChild(deleteButton);
    } else {
        const completionText = document.createElement('span');
        completionText.textContent = ` (Completed)`;
        listItem.appendChild(completionText);
        listItem.classList.add('completed');
    }

    listItem.appendChild(actions);
    list.appendChild(listItem);
}

function completeTask(listItem, task) {
    task.completed = true;
    listItem.remove();
    displayTask(task);
}

function editTask(taskId) {
    const tasks = [...document.getElementById('taskList').children, ...document.getElementById('completedList').children];
    const taskElement = tasks.find(task => task.getAttribute('data-id') == taskId);
    const taskText = taskElement.querySelector('span').textContent;
    const newTaskText = prompt('Edit your task:', taskText);
    if (newTaskText === null || newTaskText.trim() === '') return;

    taskElement.querySelector('span').textContent = newTaskText;
}

function deleteTask(listItem, taskId) {
    listItem.remove();
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialization code if needed
});

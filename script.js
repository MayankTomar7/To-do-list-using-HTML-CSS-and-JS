const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const newTask = taskInput.value.trim(); 
    if (newTask !== '') {
        const newListItem = document.createElement('li');
        newListItem.innerHTML = `
            <span>${newTask}</span>
            <button class="delete-btn">Delete</button>
        `;
        newListItem.addEventListener('click', toggleComplete);
        taskList.appendChild(newListItem);
        taskInput.value = ''; // Clear input field
        newListItem.querySelector('.delete-btn').addEventListener('click', deleteTask);
    }
}

function toggleComplete(event) {
    event.target.classList.toggle('completed');
}

function deleteTask(event) {
    event.target.parentNode.remove();
}

taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default form submission
      addTask(); 
    }
  });
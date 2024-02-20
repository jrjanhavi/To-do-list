const form = document.getElementById('form');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (taskInput.value.trim() === '') {
    alert('Please enter a task.');
    return;
  }
  addTask(taskInput.value.trim());
  taskInput.value = '';
});

function addTask(taskText) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete">Delete</button>
  `;
  taskList.appendChild(li);
}

taskList.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  } else if (e.target.tagName === 'SPAN') {
    e.target.classList.toggle('completed');
  }
});

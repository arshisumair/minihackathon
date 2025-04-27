let taskId = 0;

document.getElementById('createForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const taskTitle = document.getElementById('task-Title').value;
  const taskDesc = document.getElementById('description').value;
  const assigned = document.getElementById('assigned').value;

  createTask(taskTitle, taskDesc, assigned);

  // ✅ Save to Firebase
  set(ref(db, "Task-Management-Data/" + taskTitle), {
      taskDescription: taskDesc,
      assignedTo: assigned,
      status: "todo"
  })
  .then(() => {
      alert("Task saved to database and card created!");
  })
  .catch((error) => {
      alert("Error saving to database: " + error.message);
  });

  document.getElementById('createForm').reset();
});

function createTask(title, description, assignedTo, status = 'todo') {
  const task = document.createElement('div');
  task.className = 'task';
  task.id = 'task-' + taskId++;

  task.innerHTML = `
    <strong>${title}</strong><br>
    <small>${description}</small><br>
    <small>Assigned to: ${assignedTo}</small><br>
    <button onclick="moveTask(this.parentNode, 'inprogress')">Move to In Progress</button>
    <button onclick="moveTask(this.parentNode, 'done')">Move to Done</button>
    <button onclick="editTask(this.parentNode)">Edit</button>
    <button onclick="deleteTask(this.parentNode)">Delete</button>
  `;

  document.getElementById(status).appendChild(task);
}
function moveTask(task, targetStatus) {
    document.getElementById(targetStatus).appendChild(task);
  }
  
  function deleteTask(task) {
    task.remove();
  }
  
  function editTask(task) {
    const currentTitle = task.querySelector('strong').innerText;
    const currentDesc = task.querySelectorAll('small')[0].innerText;
    const currentAssigned = task.querySelectorAll('small')[1].innerText.replace('Assigned to: ', '');
  
    const newTitle = prompt('Edit Title:', currentTitle);
    const newDesc = prompt('Edit Description:', currentDesc);
    const newAssigned = prompt('Edit Assigned To:', currentAssigned);
  
    if (newTitle && newDesc && newAssigned) {
      task.querySelector('strong').innerText = newTitle;
      task.querySelectorAll('small')[0].innerText = newDesc;
      task.querySelectorAll('small')[1].innerText = 'Assigned to: ' + newAssigned;
    }
  }
  
  // ✅ Make them available globally
  window.moveTask = moveTask;
  window.deleteTask = deleteTask;
  window.editTask = editTask;


const addButton = document.getElementById('addButton');
const todoColumn = document.getElementById('todo');
const progressColumn = document.getElementById('inprogress');
const doneColumn = document.getElementById('done');

addButton.addEventListener('click', () => {
  const title = document.getElementById('task-Title').value.trim();
  const desc = document.getElementById('description').value.trim();
  const assigned = document.getElementById('assigned').value.trim();

  if (title && desc && assigned) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${title}</h3>
      <p>${desc}</p>
      <p><strong>Assigned:</strong> ${assigned}</p>
      <button>Move to Progress</button>
    `;

    const moveButton = card.querySelector('button');

    moveButton.addEventListener('click', () => {
      if (card.parentElement.id === 'todo') {
        progressColumn.appendChild(card);
        moveButton.textContent = 'Move to Done';
      } else if (card.parentElement.id === 'inprogress') {
        doneColumn.appendChild(card);
        moveButton.remove(); // Remove button when task is done
      }
    });

    todoColumn.appendChild(card);

    // Clear input fields
    document.getElementById('task-Title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('assigned').value = '';
  } else {
    alert('Please fill all the fields!');
  }
});


const addButton = document.getElementById('addButton');
const todoColumn = document.getElementById('todo');
const progressColumn = document.getElementById('inprogress');
const doneColumn = document.getElementById('done');

addButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submit

  const title = document.getElementById('task-Title').value.trim();
  const desc = document.getElementById('description').value.trim();
  const assigned = document.getElementById('assigned').value.trim();

  // Debugging Logs to check data
  console.log('Title:', title);
  console.log('Description:', desc);
  console.log('Assigned:', assigned);

  if (title && desc && assigned) {
    // Create card element
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${title}</h3>
      <p>${desc}</p>
      <p><strong>Assigned:</strong> ${assigned}</p>
      <button class="move-btn">Move to Progress</button>
    `;

    // Move button functionality
    const moveButton = card.querySelector('.move-btn');
    moveButton.addEventListener('click', () => {
      if (card.parentElement.id === 'todo') {
        progressColumn.appendChild(card);
        moveButton.textContent = 'Move to Done';
      } else if (card.parentElement.id === 'inprogress') {
        doneColumn.appendChild(card);
        moveButton.remove(); // Remove button when task is done
      }
    });

    // Append the card to 'To Do' column
    todoColumn.appendChild(card);

    // Clear input fields
    document.getElementById('task-Title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('assigned').value = '';
  } else {
    alert('Please fill all the fields!');
  }
});

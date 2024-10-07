document.addEventListener('DOMContentLoaded', () => {
  const projectInput = document.getElementById('project-name');
  const projectList = document.getElementById('project-list');
  const addProjectBtn = document.getElementById('add-project');
  const deleteProjectBtn = document.getElementById('delete-project');

  const taskInput = document.getElementById('task-name');
  const descInput = document.getElementById('task-desc');
  const dateInput = document.getElementById('task-date');
  const addTaskBtn = document.getElementById('add-task');
  const taskList = document.getElementById('task-list');
  const deleteTaskBtn = document.getElementById('delete-task');

  addProjectBtn.addEventListener('click', () => {
    const projectName = projectInput.value;
    if (projectName) {
      const projectItem = document.createElement('li');
      projectItem.textContent = projectName;
      projectList.appendChild(projectItem);
      projectInput.value = '';
    }
  });

  addTaskBtn.addEventListener('click', () => {
    const taskName = taskInput.value;
    // const taskDesc = descInput.value;
    const taskDate = dateInput.value;
    // const taskPriority = document.querySelector('input[name="priority"]:checked').value;

    if (taskName && taskDate) {
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
          <span>${taskName}</span>
          <span>Due in ${Math.ceil((new Date(taskDate) - new Date()) / (1000 * 60 * 60 * 24))} days</span>
        `;
      taskList.appendChild(taskItem);

      taskInput.value = '';
      descInput.value = '';
      dateInput.value = '';
    }
  });

  deleteTaskBtn.addEventListener('click', () => {
    console.log("entered")
    taskList.innerHTML = '';
  });

  deleteProjectBtn.addEventListener('click', () => {
    console.log("clicked")``
    projectList.innerHTML = '';
  });

}); 
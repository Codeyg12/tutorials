const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");
const taskListEl = document.querySelector<HTMLUListElement>(".list");

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = [];

tasks.forEach(renderTasks);

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

function addTask(task: Task): void {
  tasks.push(task);
  console.log(tasks);
}

taskForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskDescription = formInput?.value;
  if (taskDescription) {
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    };
    addTask(task);
    renderTasks(task);
    updateStorage();
    formInput.value = "";
    return;
  }
  alert("Please enter a task description");
});

function renderTasks(task: Task): void {
    const taskElement = document.createElement('li');
    taskElement.textContent = task.description;
  
    // checkbox
    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.checked = task.isCompleted;
  
    // toggle checkbox
  
    taskCheckbox.addEventListener('change', () => {
      task.isCompleted = !task.isCompleted;
      updateStorage();
    });
  
    taskElement.appendChild(taskCheckbox);
    taskListEl?.appendChild(taskElement);
  }
  

function updateStorage(): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

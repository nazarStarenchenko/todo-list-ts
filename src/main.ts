import './style.css';

const addTaskButton = document.getElementById("addTask") as HTMLButtonElement;
const clearAllButton = document.getElementById("clearAll") as HTMLButtonElement;
const taskInput = document.getElementById("todoInputBar") as HTMLInputElement;
const listContainer = document.getElementById("listContainer") as HTMLDivElement;

let arrayOfTasks: string[] = [];

function loadFromStorage(): void {
  const  { localStorageArr }: {localStorageArr: string[]}  = JSON.parse(localStorage.getItem('localStorageArr') as string);
  console.log(`local storage arr: ${localStorageArr}`);
  arrayOfTasks.push(...localStorageArr);
}

function loadIntoStorage(): void {
  localStorage.setItem('localStorageArr', JSON.stringify({localStorageArr: arrayOfTasks}));
}

function addTagToPage(task: string): void {

  arrayOfTasks.push(task);

  const taskElement = document.createElement("div") as HTMLDivElement;
  taskElement.classList.add("taskElement");

  //creating and adding paragraph to the taskElement
  const textContentParagraph = document.createElement("p") as HTMLElement;
  textContentParagraph.textContent = task;
  taskElement.appendChild(textContentParagraph);

  //creating a delete task button and adding click event on it
  const deleteTaskButton = document.createElement("button") as HTMLButtonElement;
  deleteTaskButton.textContent = "X";
  deleteTaskButton.addEventListener("click", (): void => {
    deleteTaskButton.parentElement?.remove();

    arrayOfTasks = arrayOfTasks.filter(element => {
      return element !== task;
    });

    console.log(arrayOfTasks);
  });

  taskElement.appendChild(deleteTaskButton);
  listContainer.appendChild(taskElement);
  console.log(arrayOfTasks);
}

addTaskButton.addEventListener("click", (): void => {
  const task: string = taskInput.value;
  addTagToPage(task);
  taskInput.value = "";
});

clearAllButton.addEventListener("click", (): void => {
  //clear page and array of tasks
  listContainer.innerHTML = "";
  arrayOfTasks.length = 0;
  console.log(arrayOfTasks);
});

window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    loadIntoStorage();
});

document.addEventListener("DOMContentLoaded", loadFromStorage);
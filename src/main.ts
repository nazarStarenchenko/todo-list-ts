import './style.css';

const addTaskButton = document.getElementById("addTask") as HTMLButtonElement;
const clearAllButton = document.getElementById("clearAll") as HTMLButtonElement;
const taskInput = document.getElementById("todoInputBar") as HTMLInputElement;
const listContainer = document.getElementById("listContainer") as HTMLDivElement;

function addTagToPage(task: string): void {
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
  });
  taskElement.appendChild(deleteTaskButton);

  listContainer.appendChild(taskElement);
}

addTaskButton.addEventListener("click", (): void => {
  const task: string = taskInput.value;
  addTagToPage(task);
  taskInput.value = "";
});

clearAllButton.addEventListener("click", (): void => {
  listContainer.innerHTML = "";
});
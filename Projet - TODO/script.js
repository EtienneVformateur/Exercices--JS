const storeLocalStorage = () => {
  window.localStorage.localList = listTodo.innerHTML;
};

const loadLocalStorage = () => {
  if (window.localStorage.localList)
    listTodo.innerHTML = window.localStorage.localList;
  else
    listTodo.innerHTML = `<li>Veuillez cliquer pour supprimer cette tâche</li>`;
};
loadLocalStorage();
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  listTodo.innerHTML += `<li>${todoInput.value}</li>`;
  todoInput.value = "";
  storeLocalStorage();
});

listTodo.addEventListener("click", (e) => {
  if (e.target.classList.contains("active")) e.target.remove();
  else e.target.classList.add("active");
  storeLocalStorage();
});

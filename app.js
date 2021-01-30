const todoList = ['Learn web', 'Pay attention'];
const htmlList = document.getElementById('list-html');
const submitButton = document.getElementById('submit');

const addItemsToList = (todoList) => {
  htmlList.innerHTML = '';
  todoList.forEach((todo) => {
    htmlList.innerHTML += `<li>${todo} <span>X</span></li>`;
  });
};

addItemsToList(todoList);

submitButton.addEventListener('click', () => {
  const valor = 'adfs';
  todoList.push(valor);
  addItemsToList(todoList);
});

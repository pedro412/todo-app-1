const todoList = ['Learn web', 'Pay attention'];
const htmlList = document.getElementById('list-html');
const submitButton = document.getElementById('submit');
const input = document.getElementById('box');
const count = document.getElementById('count')

const addItemsToList = (todoList) => {
  htmlList.innerHTML = '';
  todoList.forEach((todo, index) => {
    htmlList.innerHTML += `<li>${todo} <span onclick="removeItem(${index})">X</span></li>`;
  });
  count.innerHTML= todoList.length
};

addItemsToList(todoList);

submitButton.addEventListener('click', () => {
  const valor = input.value;
  if (valor !== ''){
  todoList.push(valor);
  addItemsToList(todoList);   
  }
});

const removeItem = (index) => {
    todoList.splice(index,1)
    addItemsToList(todoList)
}

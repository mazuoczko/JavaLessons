let todolist = ['sadasd', 'safgsfdgdfg'];

renderlist();

function renderlist(){
  let todolistHTML = '';

  for (let i =0; i< todolist.length; i++){
    const todo = todolist[i];
    const html = `<p>${todo}</p>`;
    todolistHTML += html
  }
  document.querySelector('.js-todo-list').innerHTML = todolistHTML

}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  todolist.push(name);
  inputElement.value ='';
  renderlist();
}
const todoList = [];

function addtodo(){
    const inputelement = document.querySelector('.input-todo');
    const todoValue = inputelement.value;

    todoList.push(todoValue);
    console.log(todoList);

    inputelement.value = '';

}
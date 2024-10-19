const todoList = ["Wake up","eat breakfast"];

let todoListHtml = '';

for (let i=0;i<todoList.length;i++){
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHtml += html;
}
console.log(todoListHtml);
function addtodo(){
    const inputelement = document.querySelector('.input-todo');
    const todoValue = inputelement.value;

    todoList.push(todoValue);
    console.log(todoList);

    inputelement.value = '';

}
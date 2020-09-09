var listElement = document.querySelector('#app ul.list');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button.newToDo')

var todos = [
    { id: 1, text: "fazer café", done: 'true' },
    { id: 2, text: "estudar JavaScrit", done: 'false' },
    { id: 3, text: "fazer o exercício", done: 'false' }
];

function renderToDos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var divElement = document.createElement('div');
        var todoText = document.createTextNode(todo.text);

        var linkElementDel = document.createElement('a');
        var deleteToDoIcon = document.createElement('i');
        deleteToDoIcon.setAttribute('class', 'far fa-trash-alt');

        linkElementDel.setAttribute('onclick', 'deleteToDo(' + todo.id + ')');

        divElement.setAttribute('onclick', 'changeStatus(' + todo.id + ')');

        divElement.setAttribute('class', 'done' + todo.done);

        linkElementDel.appendChild(deleteToDoIcon);

        todoElement.appendChild(divElement);
        divElement.appendChild(todoText);
        divElement.appendChild(linkElementDel);

        listElement.appendChild(todoElement);
    }
}

renderToDos();

function addToDo() {
    var todoText = inputElement.value;

    todos.push({
        id: todos[todos.length - 1].id + 1,
        text: todoText,
        done: 'false'
    });

    inputElement.value = '';

    renderToDos();
}

function sendEnter(e) {
    if (e.keyCode == 13)
        addToDo();
}

btnElement.onclick = addToDo;

function deleteToDo(id) {
    todos.splice(todos.id == id - 1, 1);
    renderToDos();
}

function changeStatus(id) {
    console.log(id);
    if (todos[id - 1].done == 'true') {
        todos[id - 1].done = 'false'
    } else if (todos[id - 1].done == 'false') {
        todos[id - 1].done = 'true'
    }
    console.log(todos)
    renderToDos();
}
''
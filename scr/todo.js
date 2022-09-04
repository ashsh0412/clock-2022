const todoForm = document.querySelector("#todo-form");
const todolist = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");
const todoremove = todolist.querySelector("button");

let Todos = [];
const Todos_key = "TODOS";

function saveTodos(){
    localStorage.setItem(Todos_key, JSON.stringify(Todos));
    
}

function deleteTodo(event){
    const li = event.target.parentElement;
    Todos = Todos.filter((Todos) => Todos.id !== parseInt(li.id));
    saveTodos();
    li.remove();
}

function paintTodo(Todo){
    const li = document.createElement("li");
    li.id = Todo.id;
    const span = document.createElement("span");
    const btn = document.createElement("button");   
    btn.innerText = "❌";
    li.appendChild(span);
    li.appendChild(btn);
    span.innerText = Todo.text;
    todolist.appendChild(li);
    btn.addEventListener("click", deleteTodo);
}

function handleTodo(event){
    event.preventDefault();
    const todos = todoInput.value;
    todoInput.value = "";
    const NewTodoObject = {
        text : todos,
        id : Date.now()
    };
    Todos.push(NewTodoObject);
    paintTodo(NewTodoObject);
    saveTodos();
}

const savedTodos = localStorage.getItem(Todos_key);

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    Todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}
todoForm.addEventListener("submit",handleTodo);
const todoForm = document.querySelector("#todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todoList");

function deleteTodo(){
	const li = event.target.parentElement;
	
	li.remove();
}

function setTodoList(newTodo){
	const li = document.createElement("li");
	const span = document.createElement("span");
	const button = document.createElement("button");
	span.innerText = newTodo;
	button.innerText = "❌";
	button.addEventListener("click", deleteTodo);
	li.appendChild(span);
	li.appendChild(button);
	todoList.appendChild(li);
}

function getTodoList(event){
	event.preventDefault();
	const newTodo = todoInput.value;
	todoInput.value = "";
	
	setTodoList(newTodo);
}

todoForm.addEventListener("submit", getTodoList);
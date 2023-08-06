const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "userName";

function greetingSet(userName){
	greeting.innerText = `hello ${userName}`;
	greeting.classList.remove(HIDDEN_CLASS);
}

function getUserName(event){
	event.preventDefault();
	const userName = loginInput.value;
	
	loginForm.classList.add(HIDDEN_CLASS);
	greetingSet(userName);
	
	localStorage.setItem(USERNAME_KEY, userName);
}

loginForm.addEventListener("submit", getUserName);

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(localStorage.getItem(USERNAME_KEY) === null){
	loginForm.classList.remove(HIDDEN_CLASS);
	getUserName(event);
}else {
	greetingSet(savedUserName);
}
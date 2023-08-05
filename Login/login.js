const loginInput = document.querySelector(".loginForm input");
const loginBtn = document.querySelector(".loginForm button");

function getUserName(){
	console.log(loginInput.value)
}

loginBtn.addEventListener("click", getUserName);
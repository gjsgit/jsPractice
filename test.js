/*const calculator = {
	plus: function(a,b){
		return (a+b);
	},
	subtract: function(a,b){
		return (a-b);
	},
	multiply: function(a,b){
		return (a*b);
	},
	divide: function(a,b){
		return (a/b);
	},
	square: function(a,b){
		return (a**b);
	}
};

const x = calculator.plus(5,4);
const y = calculator.subtract(5,4);
const z = calculator.multiply(5,4);
const w = calculator.divide(5,4);
const u = calculator.square(5,4);

console.log(x,y,z,w,u);
*/

/*
const age = parseInt(prompt("how old are you?"));

console.log(age);
console.log(typeof age);
console.log(isNaN(age));

if(isNaN(age)){
	console.log("it is the wrong way");
} else {
	console.log("it is the right way");
};
*/
/*
const age = parseInt(prompt("how old are you?"));

if(isNaN(age) || age < 0){
	console.log("please write positive number");
} else if(age < 18){
	console.log("you can't drink");
} else if(age >= 18 && age <= 50){
	console.log("you can drink");
} else if(age > 50 && age <= 150){
	console.log("you should be careful");
} else if(age > 150){
	console.log("you are a liar")
};
*/

const toggle = document.querySelector(".toggle");

function blackBlueSwith(){
	if(toggle.style.color === "black"){
		toggle.style.color = "blue";
	} else{
		toggle.style.color = "black";
	};
};

toggle.addEventListener("click",blackBlueSwith );
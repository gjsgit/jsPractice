const calculator = {
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

const age = prompt("how old are you?");
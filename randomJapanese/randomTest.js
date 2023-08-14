let vocaN2 = [
	{japanese:"瞳 (ひとみ)",
	korean:"눈동자"},
	
	{japanese:"手の平 (てのひら)",
	korean:"손바닥"},
	
	{japanese:"麻痺 (まひ)",
	korean:"마비"},
	
	{japanese:"支配 (しはい)",
	korean:"지배"},
	
	{japanese:"文献 (ぶんけん)",
	korean:"문헌"},
	
	{japanese:"合計 (ごうけい)",
	korean:"합계"},
	
	{japanese:"申告 (しんこく)",
	korean:"신고"},
	
	{japanese:"袋 (ふくろ)",
	korean:"봉다리"},
	
	{japanese:"退ける (どける)",
	korean:"치우다"},
	
	{japanese:"特売 (とくばい)",
	korean:"특매"}
];
const displayVoca = document.querySelector("#voca");
const displayVocaKor = document.querySelector("#vocaKor");
const vocaButton = document.querySelector("#vocaButton");
const plusKor = document.querySelector("#plusKor");
const plusJp = document.querySelector("#plusJp");
const plusButton = document.querySelector("#plusButton");
const subtractButton = document.querySelector("#subtractButton");

//array안에 있는 객체 삭제
function subtract(){
	const presentData = {
	japanese:displayVoca.innerText,
	korean:displayVocaKor.innerText
	};
	
	for (i=0; i<vocaN2.length; i++){
		if(JSON.stringify(presentData) === JSON.stringify(vocaN2[i])){
			vocaN2.splice(i,1);
		}
	};
	//객체 잘 없어졌는지 확인
	console.log(presentData);
	console.log(vocaN2);
}

//array안에 객체 추가
function plus(event){
	const newData = {};
	event.preventDefault();
	if(plusJp.value === "" || plusKor.value === ""){
		alert("please write!")
	}else{
		newData.japanese = plusJp.value;
		newData.korean = plusKor.value;
		plusKor.value="";
		plusJp.value="";
		vocaN2.push(newData);
	}
}

//랜덤하게 단어 화면에 띄우기
function giveVoca(){
	const randomVocaNumber = Math.floor(Math.random()*vocaN2.length);
	const newVoca = vocaN2[randomVocaNumber];
	
	displayVoca.innerText = newVoca.japanese;
	displayVocaKor.innerText = newVoca.korean;
};

vocaButton.addEventListener("click", giveVoca);
plusButton.addEventListener("click", plus);
subtractButton.addEventListener("click", subtract);
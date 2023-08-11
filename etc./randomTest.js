const vocaN2 = [
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
const vocaN2Jp = vocaN2.japanese;
const covaN2Kr = vocaN2.korean;
const displayVoca = document.querySelector("#voca");
const displayVocaKor = document.querySelector("#vocaKor");
const vocaButton = document.querySelector("#vocaButton");
const plusKor = document.querySelector("#plusKor");
const plusJp = document.querySelector("#plusJp");

console.log(vocaN2Jp);

function plus(){
	plusJp ="" ;
}

function giveVoca(){
	const randomVocaNumber = Math.floor(Math.random()*vocaN2.length);
	const newVoca = vocaN2[randomVocaNumber];
	
	displayVoca.innerText = newVoca.japanese;
	displayVocaKor.innerText = newVoca.korean;
};

vocaButton.addEventListener("click", giveVoca);
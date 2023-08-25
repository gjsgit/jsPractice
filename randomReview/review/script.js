const mainContainer = document.querySelector("#mainContainer");
const profile = document.querySelector("#profile");
const name = document.querySelector("#name");
const review = document.querySelector("#review");
const image = document.querySelector("#image");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("prevBtn");
let reviewFile = [
	{profile:"profile1.jpg",
	name:"ano",
	review:"너무 예쁩니다.",},
	{profile:"profile2.jpg",
	name:"kanna",
	review:"너무 예뻐요",}
];

function randomReviewChoice() {
	const randomFile = reviewFile[Math.floor(Math.random()*reviewFile.length)];
	
	profile.src = randomFile.profile;
	name.outerText = randomFile.name;
	review.innerText = randomFile.review;
};

nextBtn.addEventListener("click",randomReviewChoice);
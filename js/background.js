const bgImg = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImages = bgImg[Math.floor(Math.random()*bgImg.length)];

const bgImages = document.createElement("img");

console.log(bgImages);

bgImages.src = `img/${chosenImages}`;

//document.body.appendChild(bgImages);

document.body.style.backgroundImage = bgImages;

console.dir(document.body);
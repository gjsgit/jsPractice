const bgImg = ["0.jpeg", "1.jpeg", "2.jpeg"];
const chosenImages = bgImg[Math.floor(Math.random()*bgImg.length)];
const bgImages = document.createElement("img");

bgImages.src = `img/${chosenImages}`;
document.body.appendChild(bgImages);
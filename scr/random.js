const imgs = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
];

const RandomPic = imgs[Math.round(Math.random() * (imgs.length - 1))];

const CreateImag = document.createElement("img");
CreateImag.src = `img/${RandomPic}`;

document.body.appendChild(CreateImag);


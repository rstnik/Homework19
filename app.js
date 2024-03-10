let imageNames = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];
let imageElement = document.getElementById("randomImage");
let randomIndex = Math.floor(Math.random() * imageNames.length);
let randomImagelink = "images/" + imageNames[randomIndex];
imageElement.src = randomImagelink;

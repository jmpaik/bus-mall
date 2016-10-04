'use strict';

var allImages = [];
var totalClicks = 0;

function UserSurveyImages(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.clicked = 0;
  allImages.push(this);
};

console.log(allImages);

function generateRandomNumber() {
  return Math.floor(Math.random() * allImages.length);
};

new UserSurveyImages('Bag', 'img/bag.jpg');
new UserSurveyImages('Banana', 'img/banana.jpg');
new UserSurveyImages('Bathroom', 'img/bathroom.jpg');
new UserSurveyImages('Boots', 'img/boots.jpg');
new UserSurveyImages('Breakfast', 'img/breakfast.jpg');
new UserSurveyImages('Bubblegum', 'img/bubblegum.jpg');
new UserSurveyImages('Chair', 'img/chair.jpg');
new UserSurveyImages('Cthulhu', 'img/cthulhu.jpg');
new UserSurveyImages('Dog Duck', 'img/dog-duck.jpg');
new UserSurveyImages('Dragon', 'img/dragon.jpg');
new UserSurveyImages('Pen', 'img/pen.jpg');
new UserSurveyImages('Pet Sweep', 'img/pet-sweep.jpg');
new UserSurveyImages('Scissors', 'img/scissors.jpg');
new UserSurveyImages('Shark', 'img/shark.jpg');
new UserSurveyImages('Sweep', 'img/sweep.png');
new UserSurveyImages('Tauntaun', 'img/tauntaun.jpg');
new UserSurveyImages('Unicorn', 'img/unicorn.jpg');
new UserSurveyImages('USB', 'img/usb.gif');
new UserSurveyImages('Water Can', 'img/water-can.jpg');
new UserSurveyImages('Wine Glass', 'img/wine-glass.jpg');

console.log(allImages);
generateRandomNumber();

var images = document.getElementById('images');

function generateRandomImages() {
  var image1 = document.getElementById('image1');
  var image2 = document.getElementById('image2');
  var image3 = document.getElementById('image3');
  var number1 = generateRandomNumber();
  var number2 = generateRandomNumber();
  var number3 = generateRandomNumber();

  image1.src = allImages[number1].filepath;
  image2.src = allImages[number2].filepath;
  image3.src = allImages[number3].filepath;
  image1.name = allImages[number1].name;
  image2.name = allImages[number2].name;
  image3.name = allImages[number3].name;

  while (image1.src === image2.src || image1.src === image3.src || image2.src === image3.src) {
    generateRandomImages();
  }
  images.appendChild(image1);
  images.appendChild(image2);
  images.appendChild(image3);
}

generateRandomImages();

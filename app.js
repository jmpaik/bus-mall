'use strict';

var allImages = [];
var totalClicks = 0;

function UserSurveyImages(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.clicked = 0;
  allImages.push(this);
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

var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');
var submitButton = document.getElementById('submit');


function generateRandomNumber() {
  return Math.floor(Math.random() * allImages.length);
};

var images = document.getElementById('images');

function generateRandomImages() {
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
  };
  images.appendChild(image1);
  images.appendChild(image2);
  images.appendChild(image3);
}

//Function to track clicks//
function clickCounter(event) {
  if (totalClicks < 26) {
    totalClicks += 1;
    for (var i = 0; i < allImages.length; i++) {
      if (allImages[i].name === event.target.name) {
        allImages[i].clicked += 1;
      }
    }
    generateRandomImages();
  }
  else {
    image1.removeEventListener;
    image2.removeEventListener;
    image3.removeEventListener;
    submitButton.addEventListener('click', generateTable);
  }
}

function generateEventListeners () {
  image1.addEventListener('click', clickCounter);
  image2.addEventListener('click', clickCounter);
  image3.addEventListener('click', clickCounter);
}

//Function to make results table//
var tableEl = document.getElementById('table');

function generateTableHeader() {
  var trEl = document.createElement('tr');
  var emptyThEl = document.createElement('th');

  emptyThEl.textContent = '';
  trEl.appendChild(emptyThEl);

  for (var i in allImages) {
    var thEl = document.createElement('th');
    thEl.textContent = allImages[i].name;
    trEl.appendChild(thEl);
  }
  tableEl.appendChild(trEl);
};

function generateTableBody() {
  var trEl = document.createElement('tr');
  var totalsTdEl = document.createElement('td');
  totalsTdEl.textContent = 'Number of Image Clicks';
  trEl.appendChild(totalsTdEl);
  for (var i in allImages) {
    var tdEl = document.createElement('td');
    tdEl.textContent = allImages[i].clicked;
    trEl.appendChild(tdEl);
  }
  tableEl.appendChild(trEl);
}

function generateTable() {
  generateTableHeader();
  generateTableBody();
  submitButton.removeEventListener('click', generateTable);
}

generateRandomImages();
generateEventListeners();

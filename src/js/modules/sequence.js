let images;
let imageIndex = 0;

function preload() {
  images = [
    loadImage("../../img/main-small/Main__000.png"),
    loadImage("../../img/main-small/Main__001.png"),
    loadImage("../../img/main-small/Main__002.png"),
    loadImage("../../img/main-small/Main__003.png"),
    loadImage("../../img/main-small/Main__004.png"),
    loadImage("../../img/main-small/Main__005.png"),
  ];
}

let cnv;
function setup() {
  cnv = createCanvas(600, 600);
}

function draw() {
  background("white");
  image([imageIndex], 0, 0, 600, 600);
}

function moveFrame() {
  imageIndex++;
  if (imageIndex > images.lenght - 1) {
    imageIndex = 0;
  }
}

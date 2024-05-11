
let x, y;
let r, g, b;
let size;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

}

function keyPressed() {
  if (key == " ") {
    background(0);
  }
}

function draw() {

  r = random(255);//It assumes its between 0 and 255
  g = 0;
  b = random(255);

  x = random(width);
  y = random(height);

  size = random(10, 20);
  noStroke();
  fill(r, g, b, 100);

  circle(x, y, size);

}



function setup() {
  createCanvas(400, 400);
}

let posX = 200;
let posY = 200;

let sizeChange = 0;

let color = 0;

function keyPressed() {
  console.log(key)

  if (key == "d") {
    posX += 50;
  }

  if (key == "a") {
    posX -= 50;
  }

  if (key == "w") {
    posY -= 50;
  }

  if (key == "s") {
    posY += 50;
  }

  if (key == " ") {
    sizeChange = 0;
  }
}

function draw() {
  background(220);

  sizeChange += 1;
  color += 1;


  rectMode(CENTER)
  fill(255, 0, color)
  stroke(0, 255, 0)
  strokeWeight(10)
  rect(200, 200, sizeChange, sizeChange)


  fill(0, 0, 255)
  strokeWeight(5)
  rect(posX, posY, 50, 50)

  if (sizeChange == 400) {
    sizeChange = 0;
  }
  if (color == 255) {
    color = 0;
  }

}

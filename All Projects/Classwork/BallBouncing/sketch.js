let x = 0;
let speed = 3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  noStroke()
  fill(x, 0, 0)
  circle(x, 200, 20)

  if (x > width) {
    speed = -3;
  }

  else if (x < 0) {
    speed = 3;
  }

  x += speed;

}

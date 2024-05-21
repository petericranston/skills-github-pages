let angle = 1;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);

  rectMode(CENTER);
  noStroke();
  fill(0, 0, 255);

  rotateX(angle);
  rotateY(angle * 0.2);
  rotateZ(angle * 1.4);

  torus(150, 20);

  angle += 0.07;

}

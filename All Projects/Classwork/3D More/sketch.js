let angle = 1;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);

  rectMode(CENTER);
  fill(0, 0, 255);
  rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * 1.4);

  translate(mouseX, mouseY);
  box(10, 100, 50)

  angle += 0.07;

}

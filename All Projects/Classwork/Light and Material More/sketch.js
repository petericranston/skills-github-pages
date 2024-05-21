let angle = 1;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {

  let dx = mouseX - width / 2;
  let dy = mouseY - height / 2;
  let v = createVector(dx, dy, 0)

  directionalLight(255, 255, 0, v)

  background(175);
  rotateX(angle);
  rotateY(angle * 0.2);
  rotateZ(angle * 1.4);

  ambientMaterial(255)

  noStroke();

  torus(100, 25);

  angle += 0.03;

}

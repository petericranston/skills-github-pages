let angle = 1;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {

  pointLight(0, 0, 255, mouseX - 200, mouseY - 200, 200)
  pointLight(255, 0, 0, 200, 200, 200)


  background(175);
  rotateX(angle);
  rotateY(angle * 0.2);
  rotateZ(angle * 1.4);

  ambientMaterial(255)

  noStroke();

  sphere(100);

  angle += 0.03;

}

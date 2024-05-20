function setup() {
  createCanvas(400, 400, WEBGL);

}

function draw() {
  background(220);




  normalMaterial();
  push();
  translate(5, 50, mouseX + 100);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01)
  rotateY(frameCount * 0.01)

  box(150);
  pop();


  // fill(255, 135, 0)
  // push();
  // translate(0, 0, 200)
  // rotateY(frameCount * 0.01)
  // ellipse(0, 0, 100)
  // pop()


}

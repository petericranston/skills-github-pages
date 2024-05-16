function setup() {
  createCanvas(400, 400);
  background(220);

}

function draw() {

  /*if (mouseIsPressed) {
    circle(mouseX, mouseY, 100)
  }*/

  if (mouseIsPressed) {//Creating a rectangle in the mouse position that uses the mouse position to determine the color
    fill(mouseX, mouseY, 0)
    rectMode(CENTER)
    rect(mouseX, mouseY, 50, 50)
  }


}

function keyPressed() {
  if (key == ' ') {
    background(240)
  }
}
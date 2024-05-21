let walker;

let extraCanvas;

function setup() {
  createCanvas(400, 400);
  extraCanvas = createGraphics(400, 400); //Creating an addition canvas: useful if your want some things to trail but not others
  extraCanvas.clear();

  walker = new Walker();

  background(200);
}

function keyPressed() {
  if (key == " ") {
    extraCanvas.clear();
  }
}

function draw() {


  //no trails
  background(200);

  walker.step();
  walker.display();


  if (mouseIsPressed) {
    extraCanvas.fill(255, 150, 100);
    extraCanvas.noStroke();
    extraCanvas.ellipse(mouseX, mouseY, 60, 60);
  }


  image(extraCanvas, 0, 0)



}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  display() {
    stroke(0);
    fill(255, 0, 0)
    rect(this.x, this.y, 20, 20)
  }

  step() {
    let choice = floor(random(4))

    switch (choice) {
      case 0:
        this.x = this.x + 1;
        break;
      case 1:
        this.x = this.x - 1;
        break;
      case 2:
        this.y = this.y + 1;
        break;
      case 3:
        this.y = this.y - 1;
        break;
    }

    this.x = constrain(this.x, 0, width - 1);
    this.y = constrain(this.y, 0, height - 1);

  }


}
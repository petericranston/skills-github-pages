function setup() {
  createCanvas(400, 400);
  background(220);
}

let xPos = 0;
let yPos = 0;

function draw() {

  for (let i = 0; i < 400; i++) {
    for (let c = 0; c < 400; c++) {
      noStroke();
      fill(xPos, 0, i)
      rect(xPos, i, 1, 1)
      xPos += 1;
      yPos += 1;
    }
    xPos = 0;
    yPos = 0;
  }

}



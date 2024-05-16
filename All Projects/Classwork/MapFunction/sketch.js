
let col = 0;
let r;
let b = 255;


function setup() {
  createCanvas(400, 400);
}

function draw() {

  r = map(mouseX, 0, 400, 0, 255)/* Mapping essentially changes the range to be whatever you want.
  so a 0, 600 can become, 0, 255 so that you can do accurate rgb values*/
  b = map(mouseY, 0, 400, 255, 0)

  background(r, 0, b);


  fill(250, 118, 222)
  ellipse(mouseX, 200, 64, 64)
}

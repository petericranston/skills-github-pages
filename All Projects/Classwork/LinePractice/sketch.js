let value = 0; // Starting value
let increment = 1; // Value change per frame, can be adjusted for speed

let run = true;

function setup() {
  createCanvas(400, 400);
  frameRate(30)
  background(220);
}

function draw() {

  value += increment; // Update the value each frame

  // Reverse the direction if limits are reached
  if (value >= 400 || value <= 0) {
    increment *= -1; // Reverse the direction of change
  }

  if (run != false) {
    for (let i = 1; i <= 100; i++) {//Giving a limit to the amount of times that the line is drawn
      console.log(i)
    }
    run = false;
  }

  let num = random(0, 400)
  let num1 = random(0, 400)
  line(0, 0, num, num1)


}

function keyPressed() {
  if (key == ' ') {
    background(220);
  }
}
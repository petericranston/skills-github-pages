let balls = [];

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.a = random(TWO_PI);
    this.speed = 3;


  }


  update() {

  }

}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  createBall();

}

function createBall() {
  let ball = new Ball();
}


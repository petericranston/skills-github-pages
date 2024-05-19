let MultiBalls = [];

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.a = random(TWO_PI);
    this.speed = 3;

    this.moveX = cos(this.a) * this.speed;
    this.moveY = sin(this.a) * this.speed;

    this.fall = 1;
    this.gravity = 0.1;
  }

  move() {
    this.x += this.moveX;
    this.y += this.moveY;
    this.y += this.fall;
    this.fall += this.gravity;
  }


  show() {
    fill(255, 0, 0);
    noStroke()
    circle(this.x, this.y, 25)
  }
}


function setup() {
  createCanvas(400, 400);
  MultiBalls[0] = new Ball(200, 200);

}

function draw() {
  background(220);



  MultiBalls[0].show();
  MultiBalls[0].move();

}




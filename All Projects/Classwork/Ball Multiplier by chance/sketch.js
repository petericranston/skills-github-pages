let MultiBalls = [];

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.a = random(TWO_PI);
    this.speed = 3;
    this.r = 25;

    this.moveX = cos(this.a) * this.speed;
    this.moveY = sin(this.a) * this.speed;

    this.gravity = 0.1;
    this.damping = 1;
  }

  move() {
    this.moveY += this.gravity;
    this.x += this.moveX;
    this.y += this.moveY;

  }

  collisionWall() {
    if (this.x - this.r < 0 || this.x + this.r > width) {
      this.moveX *= -1;
      this.x = this.x - this.r < 0 ? this.r : width - this.r;

      let chance = random(100);

      if (chance > 75) {
        MultiBalls[MultiBalls.length] = new Ball(200, 200)
      }
      else if (chance < 25) {
        MultiBalls.splice(0, 1)
      }
    }
    if (this.y - this.r < 0 || this.y + this.r > height) {
      this.moveY *= -1;
      this.moveY *= this.damping;
      this.y = height - this.r;


      let chance = random(100);

      if (chance > 75) {
        MultiBalls[MultiBalls.length] = new Ball(200, 200)
      }
      else if (chance < 25) {

      }

    }

  }

  show() {
    fill(255, 0, 0);
    noStroke()
    circle(this.x, this.y, this.r)
  }
}


function setup() {
  createCanvas(400, 400);
  MultiBalls[0] = new Ball(200, 200);
}

function draw() {
  background(220);


  for (let i = 0; i < MultiBalls.length; i++) {
    MultiBalls[i].show();
    MultiBalls[i].move();
    MultiBalls[i].collisionWall();
  }


}


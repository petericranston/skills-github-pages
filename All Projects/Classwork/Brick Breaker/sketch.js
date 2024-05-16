let aDown = false;//Variable to determine if a is down
let dDown = false;//Variable to determine if is down

let ball = {
  x: 50,
  y: 50,
  xSpeed: 3,
  ySpeed: 3,
  d: 10
}

let paddle = {
  x: 200,
  y: 390,
  speed: 5,
  w: 50,
  h: 10
}


function keyPressed() {//Function to detect when button is pressed
  if (key === 'a') {
    aDown = true;
  }
  else if (key === 'd') {
    dDown = true;
  }
}

function keyReleased() {//Function for to keep the paddle going until released
  if (key === 'a') {
    aDown = false;
  }
  else if (key === 'd') {
    dDown = false;
  }
}

function movePaddle() {
  if (aDown) {//If statement to move paddle up if W is down
    paddle.x -= paddle.speed;
  }

  else if (dDown) {//If statement to move paddle down if S is down
    paddle.x += paddle.speed;
  }

  if (paddle.x > width - 25) {//If statements to prevent paddle from going off screen
    paddle.x -= paddle.speed;
  }
  else if (paddle.x < -25) {
    paddle.x += paddle.speed;
  }
  rect(paddle.x, paddle.y, paddle.w, paddle.h);//Creating paddle
}

class Bricks {
  constructor(w, h, x, y) {
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.hit = false
  }


  create() {
    rect(this.x, this.y, this.w, this.h)
  }
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  movePaddle();

  brick1 = new Bricks(100, 20, 10, 40);
  brick2 = new Bricks(100, 20, 50, 70);
  brick3 = new Bricks(100, 20, 200, 20);

  blocks = [brick1, brick2, brick3];

  for (i = 0; 0 < 4; i++) {
    blocks[i].create();
  }

}

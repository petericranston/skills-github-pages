let aDown = false;//Variable to determine if a is down
let dDown = false;//Variable to determine if is down

let ball = {
  x: 200,
  y: 200,
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
  if (key === 'a' || keyCode === 65) {
    aDown = true;
  }
  else if (key === 'd' || keyCode === 68) {
    dDown = true;
  }
}

function keyReleased() {//Function for to keep the paddle going until released
  if (key === 'a' || keyCode === 65) {
    aDown = false;
  }
  else if (key === 'd' || keyCode === 68) {
    dDown = false;
  }
}


class Bricks {
  constructor(w, h, x, y) {
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.hit = false;
  }


  create() {
    if (!this.hit) {
      rect(this.x, this.y, this.w, this.h)
    }
  }

}

let blocks = [];


function setup() {
  createCanvas(400, 400);
  createBlocks();
}

function draw() {
  background(220);

  movePaddle();





  for (let i = 0; i < blocks.length; i++) {
    blocks[i].create();
  }


}



function createBlocks() {

  let rows = 5;
  let cols = 4;
  let brickWidth = 100;
  let brickHeight = 20;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let x = col * brickWidth;
      let y = row * brickHeight;
      let brick = new Bricks(brickWidth, brickHeight, x, y);
      blocks.push(brick);
    }
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



function moveBall() {//Function for moving the ball
  if (ball.x > width) {
    ball.xSpeed *= -1;
  }
  else if (ball.x < 10) {
    ball.xSpeed *= -1;
  }

  ball.x += ball.xSpeed;

  if (ball.y > height) {
    ball.ySpeed *= -1;//Changing ball direction when it hits the side
  }
  if (ball.y < 0) {//Changing ball direction when it hits the side
    ball.ySpeed *= -1;
  }

  ball.y += ball.ySpeed;//Changing ball speed

  circle(ball.x, ball.y, ball.d)//Creating ball
}

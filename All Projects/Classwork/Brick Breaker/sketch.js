let aDown = false;//Variable to determine if a is down
let dDown = false;//Variable to determine if is down

let ball = {//Container for ball variables
  x: 200,
  y: 200,
  xSpeed: 3,
  ySpeed: 3,
  d: 10
}

let paddle = {//Container for paddle variables
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


class Bricks {//class for storing bricks variables to be used to create them
  constructor(w, h, x, y) {
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.hit = false;
  }


  create() {//Creating bricks
    if (!this.hit) {
      rect(this.x, this.y, this.w, this.h)
    }
  }

  checkCollisions(ball) {//Checking ball collision on bricks
    if (
      !this.hit &&
      ball.x > this.x &&
      ball.x < this.x + this.w &&
      ball.y > this.y &&
      ball.y < this.y + this.h
    ) {
      this.hit = true;
      ball.ySpeed *= -1;
    }

  }
}

let blocks = [];//array to store blocks


function setup() {//Setup function
  createCanvas(400, 400);
  createBlocks();
  randomDirectionBall();
}

function draw() {
  background(220);


  //Calling functions
  movePaddle();
  moveBall();
  checkPaddleCollision();
  lost();


  for (let i = 0; i < blocks.length; i++) {//Creating blocks from array and checking for collisions
    blocks[i].create();
    blocks[i].checkCollisions(ball);
  }

}

function createBlocks() {

  let rows = 5;//Setting number of blocks rows
  let cols = 4;//Setting number of blocks columns
  let brickWidth = 100;//setting brick width
  let brickHeight = 20;//Setting brick height

  for (let row = 0; row < rows; row++) {//Creating blocks
    for (let col = 0; col < cols; col++) {
      let x = col * brickWidth;
      let y = row * brickHeight;
      let brick = new Bricks(brickWidth, brickHeight, x, y);
      blocks.push(brick);//Adding to blocks array

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
  else if (ball.x < 0) {
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


function checkPaddleCollision() { 
  if (
    ball.y + ball.d / 2 >= paddle.y &&
    ball.x >= paddle.x &&
    ball.x <= paddle.x + paddle.w
  ) {
    ball.ySpeed *= -1; // Reverse the ball's y direction if it hits the paddle
    ball.y = paddle.y - ball.d / 2; // Position the ball above the paddle to avoid sticking
  }
}

function lost() {//Resetting game when the ball hits the bottom
  if (ball.y > height) {
    location.reload();
  }
}

function randomDirectionBall() {//Setting random ball speed and direction
  ball.xSpeed = (random(3, 5));
  ball.ySpeed = (random(3, 5));
}
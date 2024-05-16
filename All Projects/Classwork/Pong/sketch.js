let wDown = false;//Variable to determine if w is down
let sDown = false;//Variable to determine if w is down

let ball = {//Variable container to store ball variables
  x: 100,
  y: 200,
  xSpeed: 3,
  ySpeed: 3,
  size: 20
};

let paddle = {//Variable container to store paddle variables
  x: 395,
  y: 200,
  speed: 5,
  w: 10,
  h: 50
};

let AI = {//Variable container to store AI paddle variables
  x: 5,
  y: 200,
  speed: 5,
  w: 10,
  h: 50
}


function keyPressed() {//Function to detect when button is pressed
  if (key === 'w') {
    wDown = true;
  }
  else if (key === 's') {
    sDown = true;
  }
}

function keyReleased() {//Function for to keep the paddle going until released
  if (key === 'w') {
    wDown = false;
  }
  else if (key === 's') {
    sDown = false;
  }
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

  circle(ball.x, ball.y, ball.size)//Creating ball
}

function movePaddle() {//Function for moving the paddle
  if (wDown) {//If statement to move paddle up if W is down
    paddle.y -= paddle.speed;
  }

  else if (sDown) {//If statement to move paddle down if S is down
    paddle.y += paddle.speed;
  }

  if (paddle.y > height) {//If statements to prevent paddle from going off screen
    paddle.y -= paddle.speed;
  }
  else if (paddle.y < 0) {
    paddle.y += paddle.speed;
  }
  rect(paddle.x, paddle.y, paddle.w, paddle.h);//Creating paddle
}

function aiMove() {
  rect(AI.x, ball.y, AI.w, AI.h);
}

function collision() {
  if ((ball.x >= paddle.x - 5 && ball.x <= paddle.x + 5) && (ball.y >= paddle.y - 25 && ball.y <= paddle.y + 25)) {
    ball.xSpeed *= -1;
  }
}



function setup() {
  createCanvas(400, 400);
  ball.xSpeed = random(3, 5);//Setting random speed and direction for ball
  ball.ySpeed = random(3, 5);//Setting random speed and direction for ball
  textSize(50);
  textAlign(CENTER)
}

let changingText = 0;

function draw() {
  background(220);
  rectMode(CENTER)
  noStroke();
  fill(0)

  movePaddle();
  moveBall();
  aiMove();
  collision();

  text(changingText, width / 2, 40)

  if (ball.x >= width) {//Not working yet
    changingText += 1;
  };


}
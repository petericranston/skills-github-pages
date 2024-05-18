---
title: "Games"
date: 2024-05-11
---

# Pong

<img src="/skills-github-pages/Images/Pong.png" alt="Image o" width="50%">

The first game that I created was Pong. It is famous for being one of the original video games that people played. It was wildly popular in the 70s. It is relatively simple to create and posed was an interesting project for me to create. 
I used a few different techniques to make the code as efficient and understandable as possible. One of the main ones being variable containers for the ball, paddle and AI paddle. This was handy for making it clear what objects I was working with.

```
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
```

I also used functions for the different aspects of the game. For example, ball movement, collisions, paddle movement, AI paddle movement etc. This was handy to make the code look clean and understandable. 

```
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
```

The final game works essentially the same as the original game. However my game is unbeatable.

[Link to Game](/skills-github-pages/All%20Projects/Classwork/Pong/index.html)


# Brick Breaker

<img src="/skills-github-pages/Images/Brick Breaker.png" alt="Image of Brick breaker Game" width="50%">

The second game that I created was Brick Breaker. It is also an old game that came out in the 1970s. I created it to give myself another challenge. The game overall works as it should. I used similar methods to the pong game to create it. 
I used variable containers to create the ball and paddle and i used many functions to create all of the processes in the game. One of the more complicated parts of the game is the class that is used to create the bricks. I also used the class to create a function to remove the bricks when the ball collides with them.

```
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
```

I used some of the similar code from my pong game to speed up the game process. For example, I used all the paddle code for movement and creation, and just changed the dimensions and position to make it move along the X axis rather than the Y and at the bottom of the canvas. I also made adjustments to the movement function for the change in key binds. 
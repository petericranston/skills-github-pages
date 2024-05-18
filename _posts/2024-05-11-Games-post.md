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

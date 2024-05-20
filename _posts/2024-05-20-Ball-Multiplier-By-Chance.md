---
title: "Ball Multiplier By Chance"
date: 2024-05-20
---

# Ball Multiplier by chance

<img src="/skills-github-pages/Images/BallMultiplier.png" alt="Image o" width="50%">

[Link to Game](/skills-github-pages/All%20Projects/Classwork/Ball%20Multiplier%20by%20chance/index.html)


I created this program from an instagram add I saw a few days ago in which a bunch of balls were colliding with each other and the walls and they had a 25% chance of either creating a new ball or deleting one. I thought it was interesting and wouldn't be too challenging of a project, and many painful hours later, here we are. The program as a whole works well and as I had hoped, however there are a few bugs. 

I started by creating a class for the balls and an array to store them in. And then some functions to make them do various things. I used the gravity physics that we created in class for the fireworks to give the ball realistic physics, however I then had to figure out how to make the ball bounce. It wasn't as easy as reversing the moveX and moveY variables, because that made them act very strangely, I also tried to reverse the gravity but that made them gain speed bouncing up and down until they weren't visible. 
After some research, I determined the best way to make it work was using a dampener variable, that would decrease the amount of bounce the balls had so that they didn't go haywire. And `this.y = height - this.r;` which would correct the position of the ball as it hits the floor. 

Once i had the bouncing working I added the chance that a ball would other spawn or de-spawn every time it bounced. This required me to use the push and splice functions to add and remove from the array.
Here is an example:
```
let chance = random(100);

      if (chance > 75) {
        MultiBalls[MultiBalls.length] = new Ball(200, 200)
      }
      else if (chance < 25) {
        MultiBalls.splice(0, 1)
      }
```
The more complicated part of the program however was the collision between balls. I got it mostly working. The program can determine whether two balls are colliding, however I wasn't sure how the balls bouncing off each other in a way that would obey the physics I had created. So at its current state the balls just jitter a bit when they are colliding and sometimes bounce off each other in a somewhat realistic way. I could add the balls colliding giving a chance that a new ball would spawn, which I did.

 Also, I attempted to make the balls spawn from the one that had bounces off a wall or ball, and it did work, but the new ball would not have any momentum and would sadly bounce at the bottom of the screen so I decided to make them spawn in the middle of the page in a random direction.
Heres all the code:

```
let MultiBalls = [];

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.a = random(TWO_PI);
    this.speed = 3;
    this.r = 12;

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
        MultiBalls.splice(0, 1)
      }
    }
  }

  collisionBall(other) {
    let d = dist(this.x, this.y, other.x, other.y)
    if (d < this.r) {
      this.moveX *= -1;
      this.moveY *= -1;

      let chance = random(100);

      if (chance > 75) {
        MultiBalls[MultiBalls.length] = new Ball(200, 200)
      }
      else if (chance < 25) {
        MultiBalls.splice(0, 1)
      }
    }

  }

  show() {
    fill(255, 0, 0);
    circle(this.x, this.y, this.r * 2)
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

    for (let j = i + 1; j < MultiBalls.length; j++) {
      MultiBalls[i].collisionBall(MultiBalls[j])
    }
  }



}

```


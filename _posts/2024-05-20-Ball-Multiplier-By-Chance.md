---
title: "Ball Multiplier By Chance"
date: 2024-05-20
---

# Ball Multiplier by chance

<img src="/skills-github-pages/Images/BallMultiplier.png" alt="Image o" width="50%">


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

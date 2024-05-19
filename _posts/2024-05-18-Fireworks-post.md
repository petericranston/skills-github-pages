---
title: "Fireworks"
date: 2024-05-18
---

# Fireworks

In class, we created a fireworks program, that when you click down on your mouse, a firework animation will play on the mouse position. It was quite complicated and required a few different functions and classes to work correctly. I attempted to create a function where a firework would explode from another one using an array that would store all the firework particles and choose one at random to create another firework animation from, however it did not work as planned and after a fair amount of trial and error and researching, I was unable to get it working. 

However, the core program is interesting in itself so I will display that.

<img src="/skills-github-pages/Images/Firework.png" alt="Image of Fireworks" width="50%">

[Link to Game](/skills-github-pages/All%20Projects/Classwork/Fireworks/index.html)

The program uses a class for the Firework creation itself, and the individual particles. It uses some math within the firework class to simulate physics and the particles falling down the screen in a similar way to how they would with gravity. These variables are also customizable to make them as realistic or as random as you want. 

Below is just the constructor of the particle class, and the whole firework class.

```
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.a = random(TWO_PI);
    this.speed = random(1, 3);
    this.fall = 0;
    this.gravity = 0.05;
    this.moveX = cos(this.a) * this.speed;
    this.moveY = sin(this.a) * this.speed;
  }
```
```
class Firework {
  constructor() {
    this.p = [];
    this.numParticles = 200;

    for (let i = 0; i < this.numParticles; i++) {
      this.p.push(new Particle(mouseX, mouseY));
    }
  }

  update() {
    this.p.forEach(function (thingy) {
      if (thingy.update())
        thingy.update();
      thingy.show();
    })
  }

}
```
The program would push a new particle to the 'p' array in the Firework class * the numParticles variable, and then use the update and show functions in the Particle class to give the particle physics and create the particles. This would occur for every particle inside the 'p' array.


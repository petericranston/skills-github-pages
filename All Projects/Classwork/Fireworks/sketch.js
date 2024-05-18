

let firework;

let runtime = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  /*for (let i = 0; i < numParticles; i++) {
    p.push(new Particle(200, 200))
  }*/
  firework = new Firework();
}

function draw() {
  background(0, 10);

  if (firework) {
    firework.update();
  }
  firework.update();



}

function mousePressed() {
  firework = new Firework(mouseX, mouseY);
  runtime += 1;
}

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

  update() {
    this.x += this.moveX;
    this.y += this.moveY;
    this.y += this.fall;
    this.fall += this.gravity;

  }

  show() {
    fill(255, 0, 0);
    noStroke();
    ellipse(this.x, this.y, 5);

  }
}

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

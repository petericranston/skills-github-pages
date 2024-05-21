let angle = 1;
let dog;

function preload() {
  dog = loadModel('FancyDog.obj');
}


function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(200);

  ambientLight(100);
  directionalLight(255, 255, 255, 0, 0, -1);
  rotateX(angle);
  rotateY(angle * 1.4);
  rotateZ(angle * 0.7);

  scale(50)
  // box(100);
  model(dog)
  angle += 0.03;


}


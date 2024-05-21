let angle = 1;
let dog;

function preload() {
  dog = loadModel('Dog.obj');
}


function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(0);

  ambientLight(100);
  directionalLight(255, 255, 255, 0, 0, -1);
  rotateX(angle);
  rotateY(angle * 1.4);
  rotateZ(angle * 0.7);

  // box(100);
  model(dog)
  angle += 0.03;





}


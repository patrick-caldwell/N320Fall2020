var cWidth = 400;
var cHeight = 400;
var manager;

function setup() {
  createCanvas(cWidth, cHeight);
  manager = new Manager();
}

function draw() {
  background(220);
  //Draws a rectangle to the canvas.
  manager.drawGround();
  //Adds a rain object into the rainArr array every 10 frames.
  if (frameCount % 10 == 0) manager.createRain();
  //Draws rain, makes rain fall, deletes rain and updates ground color if rain touches the ground.
  manager.controlRain();
}

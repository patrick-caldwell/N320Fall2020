class Ground {
  constructor() {
    this.colorVal = 5;
    this.hitCount = 0;
  }

  //Draws a rectangle to the canvas.
  draw() {
    noStroke();
    fill(color(`rgb(0%, 0%, ${this.colorVal}%)`));
    rect(0, cHeight - 50, cWidth, 50);
  }

  //Makes the ground 5% more blue every 10 times it's hit by rain.
  updateColor() {
    this.hitCount++;
    if (this.hitCount % 10 == 0) this.colorVal += 5;
  }
}

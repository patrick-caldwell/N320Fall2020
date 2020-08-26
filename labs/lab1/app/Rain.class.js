class Rain {
  constructor(x) {
    this.x = x;
    this.y = 0;
  }

  //Draws a line to the canvas.
  draw() {
    stroke(0, 0, 255);
    line(this.x, this.y, this.x, this.y + 10);
  }

  //Moves rain down.
  fall() {
    this.y += 5;
  }

  //Checks if rain touches ground, if so delete the rain's properties and return true.
  splash() {
    if (this.y >= cHeight - 55) {
      delete this.x;
      delete this.y;
      return true;
    } else return false;
  }
}

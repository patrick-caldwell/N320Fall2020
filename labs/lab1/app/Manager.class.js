class Manager {
  constructor() {
    this.rainArr = [];
    this.ground = new Ground();
  }

  //Draws a rectangle to the canvas.
  drawGround() {
    this.ground.draw();
  }

  //Adds a rain object into the rainArr array.
  createRain() {
    this.rainArr.push(new Rain(Math.random() * cWidth));
  }

  //Draws rain, makes rain fall, deletes rain and updates ground color if rain touches the ground.
  controlRain() {
    for (let i = 0; i < this.rainArr.length; i++) {
      //Draws a line to the canvas.
      this.rainArr[i].draw();
      //Moves rain down.
      this.rainArr[i].fall();

      //Determines if rain touches the ground.
      if (this.rainArr[i].splash()) {
        //Delete rain from rainArr array.
        this.rainArr.splice(i, 1);
        //Makes the ground 5% more blue every 10 times it's hit by rain.
        this.ground.updateColor();
      }
    }
  }
}

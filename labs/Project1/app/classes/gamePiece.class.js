class gamePiece extends board {
  constructor(player, column) {
    super();
    this.player = player;
    this.column = parseInt(column, 10);
    this.color;
    this.row = 0; //start piece at row 0, then try to move it down
    this.assignColor();
  }

  assignColor() {
    if (this.player == -1) {
      this.color = "#ff0000";
    } else {
      this.color = "#0000ff";
    }
  }

  draw() {
    document.getElementById(
      `${this.row}${this.column}`
    ).style.fill = this.color;
  }
}

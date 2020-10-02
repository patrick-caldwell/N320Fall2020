class gameLogic {
  constructor() {
    this.playerTurn = -1;
    this.winner = 0;
    this.board = new board();
  }

  //Iterate through slots[] array, if user clicks on one, fill it with red.
  place() {
    slots.forEach((slot) => {
      $(`#${slot}`).click(() => {
        $(`#${slot}`).css("fill", "#ff0000");
      });
    });
  }
}

class board {
  constructor() {
    this.boardArr = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];
  }
}

class gamePiece {
  constructor(player, column) {
    this.player = player;
    this.column = column;
    this.row = 0; //start piece at row 0, then try to move it down
    this.assignColor();
  }
}

//Array that holds the IDs of every slot on the board
var slots = [];
for (let i = 0; i < 6; i++) {
  for (let x = 0; x < 7; x++) {
    let id = `${i}${x}`;
    slots.push(id);
  }
}

let newGame = new gameLogic();

updateFrame();
function updateFrame() {
  newGame.place();
  requestAnimationFrame(updateFrame);
}

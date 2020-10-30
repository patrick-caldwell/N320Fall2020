class gameLogic {
  constructor() {
    this.playerTurn = -1;
    this.winner = 0;
    this.board = new board();
  }

  //Iterate through slots[] array, if user clicks on one, fill it with red.
  place() {
    for (let i = 0; i < 7; i++) {
      let slot = `0${i}`;
      let slotElement = document.getElementById(slot);
      slotElement.addEventListener("click", () => {
        //document.getElementById(slot).style.fill = "ff0000";

        let col = slot.substring(1);
        let piece = new gamePiece(this.playerTurn, col);
        this.drop(piece);
        //this.board.boardArr[row][col] = piece;
      });
    }
  }

  drop(piece) {
    if (this.winner == 0) {
      let placed = false;
      let row;

      for (let i = 0; i < 6; i++) {
        if (this.board.boardArr[0][piece.column] == null) {
          if (this.board.boardArr[i][piece.column] != null) {
            row = i - 1;
            placed = true;
          }

          if (this.board.boardArr[5][piece.column] == null) {
            row = 5;
            placed = true;
          }

          if (placed) {
            piece.row = row;
            piece.draw();
            this.board.boardArr[row][piece.column] = piece;
            console.log(this.board.boardArr);

            if (this.checkWinner(piece) == false) {
              this.playerTurn *= -1;
            } else {
              this.endGame();
            }

            break;
          }
        }
      }
    }
  }

  checkWinner(piece) {
    let pieceCount = 1;

    for (let i = 1; i <= 3; i++) {
      //Check left of new piece
      if (piece.column - i >= 0) {
        //If piece is to the left
        if (this.board.boardArr[piece.row][piece.column - i] != null) {
          //If piece is owned by same player
          if (
            this.board.boardArr[piece.row][piece.column - i].player ==
            this.playerTurn
          ) {
            pieceCount++;
            console.log(pieceCount);
            continue;
          }
        }
      }

      //Check right of new piece
      if (piece.column + i <= 6) {
        //If piece is to the right
        if (this.board.boardArr[piece.row][piece.column + i] != null) {
          //If piece is owned by same player
          if (
            this.board.boardArr[piece.row][piece.column + i].player ==
            this.playerTurn
          ) {
            pieceCount++;
            console.log(pieceCount);
            continue;
          }
        }
      }

      //Check below of new piece
      if (piece.row + i <= 5) {
        //If piece is below
        if (this.board.boardArr[piece.row + i][piece.column] != null) {
          //If piece is owned by same player
          if (
            this.board.boardArr[piece.row + i][piece.column].player ==
            this.playerTurn
          ) {
            pieceCount++;
            console.log(pieceCount);
            continue;
          }
        }
      }

      //Check down-right of new piece
      if (piece.row + i <= 5 && piece.column + i <= 6) {
        //If piece is to the down-right
        if (this.board.boardArr[piece.row + i][piece.column + i] != null) {
          //If piece is owned by same player
          if (
            this.board.boardArr[piece.row + i][piece.column + i].player ==
            this.playerTurn
          ) {
            pieceCount++;
            console.log(pieceCount);
            continue;
          }
        }
      }

      //Check down-left of new piece
      if (piece.row + i <= 5 && piece.column - i >= 0) {
        //If piece is to the down-left
        if (this.board.boardArr[piece.row + i][piece.column - i] != null) {
          //If piece is owned by same player
          if (
            this.board.boardArr[piece.row + i][piece.column - i].player ==
            this.playerTurn
          ) {
            pieceCount++;
            console.log(pieceCount);
            continue;
          }
        }
      }
    }

    if (pieceCount >= 4) {
      console.log(`${this.playerTurn} wins!`);
      return true;
    }

    return false;
  }

  endGame() {
    this.winner = this.playerTurn;

    let color;
    if (this.playerTurn == -1) {
      color = "Red";
    } else {
      color = "Blue";
    }

    document.getElementById(
      "results"
    ).innerHTML = `<h3>${color} is the winner!</h3><br><button onClick="window.location.reload()">Play Again</button>`;
    document.getElementById("instructions").innerHTML = "";
  }
}

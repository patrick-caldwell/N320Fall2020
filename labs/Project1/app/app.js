//Array that holds the IDs of every slot on the board
var slots = [];
for (let i = 0; i < 6; i++) {
  for (let x = 0; x < 7; x++) {
    let id = `${i}${x}`;
    slots.push(id);
  }
}

var newGame = new gameLogic();
newGame.place();

window.addEventListener("mousemove", (e) => {
  gsap.to("#piecePreview", { left: e.pageX, duration: 0.1 });
  gsap.to("#piecePreview", { top: e.pageY, duration: 0.1 });
});
window.addEventListener("click", () => {
  if (newGame.playerTurn == -1) {
    gsap.to("#piecePreview", { "background-color": "#ff0000", duration: 0.25 });
  } else {
    gsap.to("#piecePreview", { "background-color": "#0000ff", duration: 0.25 });
  }
});

//buildin() starts the first animation of the rectangles fading in.
buildin();
function buildin() {
  gsap.to(".rect", { opacity: 1, duration: 0.75 });
  initListeners();
}

//initListeners() creates all the event listeners for mousing over, mousing away, and clicking on rectangles.
function initListeners() {
  //Loop used to dynamically create event listeners for each rectangle.
  for (let i = 1; i <= 6; i++) {
    let rect = document.getElementById(`rect${i}`);

    //Make rectangle yellow when the user mouses over it.
    rect.addEventListener("mouseover", () => {
      gsap.to(`#rect${i}`, { "background-color": "#b8bd31", duration: 0.5 });
    });

    //Make the rectangle purple again when the mouse goes away.
    rect.addEventListener("mouseout", () => {
      gsap.to(`#rect${i}`, { "background-color": "purple", duration: 0.5 });
    });

    //Animations for when the user clicks on a rectangle.
    rect.addEventListener("click", (rect) => {
      //Get the id of the clicked rectangle.
      let id = rect.path[0].id;
      //Loop used to iterate through rectangles again.
      for (let i = 1; i <= 6; i++) {
        //Used to animate the rectanges that the user didn't click on.
        if (id != `rect${i}`) {
          gsap.to(`#rect${i}`, {
            opacity: 0,
            duration: 0.25,
            onComplete: () => {
              document.getElementById(`rect${i}`).style.display = "none";
            },
          });
        } else {
          //Animate the rectangle the user clicked on
          document.getElementById(`rect${i}`).style.position = "absolute";
          gsap.to(`#rect${i}`, { margin: 0, duration: 2 });
          gsap.to(`#rect${i}`, { height: "100%", duration: 2 });
          gsap.to(`#rect${i}`, { width: "100%", duration: 2 });
        }
      }
    });
  }
}

//Set global variable that would contain the position, velocity and the html element "ball"
var positionX = 0;
var positionY = 0;
var velocity = 100;
var reverse = false;
var ball = document.getElementById("ball");

//Set global variable that would contain the position, velocity and the html element "ball2"
var positionX_2 = 0;
var positionY_2 = 0;
var velocity_2 = 150;
var reverse_2 = false;
var ball_2 = document.getElementById("ball2");

//Function that can change the position of the html element "ball"
function moveBall() {
  // two x-axis coordinates
  var Xmin = 0;
  var Xmax = 300;

  // two y-axis coordinates
  var Ymin = 0;
  var Ymax = 300;

  if (reverse) {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
  } else {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
  }

  if (
    positionX > Xmax ||
    positionX === Xmin ||
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }
}

//Function that can change the position of the html element "ball2"
function moveBall2() {
  // two x-axis coordinates
  var Xmin = 0;
  var Xmax = 250;

  // two y-axis coordinates
  var Ymin = 0;
  var Ymax = 250;

  if (reverse_2) {
    positionX_2 = positionX_2 - velocity_2;
    positionY_2 = positionY_2 - velocity_2;
    ball_2.style.left = positionX_2 + "px";
    ball_2.style.top = positionY_2 + "px";
  } else {
    positionX_2 = positionX_2 + velocity_2;
    positionY_2 = positionY_2 + velocity_2;
    ball_2.style.left = positionX_2 + "px";
    ball_2.style.top = positionY_2 + "px";
  }

  if (
    positionX_2 > Xmax ||
    positionX_2 === Xmin ||
    positionY_2 > Ymax ||
    positionY_2 === Ymin
  ) {
    reverse_2 = !reverse_2;
  }
}

setInterval(moveBall, 200);
setInterval(moveBall2, 150);

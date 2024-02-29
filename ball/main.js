const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let CANVAS_WIDTH = (canvas.width = window.innerWidth - 20);
let CANVAS_HEIGHT = (canvas.height = window.innerHeight - 20);
const canvasBg = "rgba(255, 255, 255, 0.05)";
// let gameFrame = 0;
// const staggerFrames = 10;

let dotSize = 20; // Change this to change the size of the dot
let positionX = CANVAS_WIDTH / 2 - dotSize / 2;
let positionY = CANVAS_HEIGHT / 10 - dotSize / 2;
let gravity = 0.2;
let velocityY = 0

ctx.fillStyle = canvasBg;
ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

window.addEventListener("resize", function () {
  CANVAS_WIDTH = canvas.width = window.innerWidth - 20;
  CANVAS_HEIGHT = canvas.height = window.innerHeight - 20;
  ctx.fillStyle = canvasBg;
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
});

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillStyle = canvasBg;
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  ctx.fillStyle = "red";
  velocityY += gravity;
  positionY += velocityY;

  if (positionY + dotSize > CANVAS_HEIGHT) {
    velocityY = -velocityY * 0.9;
    positionY = CANVAS_HEIGHT - dotSize;
  }

  ctx.fillRect(
    positionX - dotSize / 2,
    positionY - dotSize / 2,
    dotSize,
    dotSize
  );

  // gameFrame++;

  requestAnimationFrame(animate);
}

animate();

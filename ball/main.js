const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let CANVAS_WIDTH = (canvas.width = window.innerWidth - 20);
let CANVAS_HEIGHT = (canvas.height = window.innerHeight - 20);
const canvasBg = "rgba(255, 255, 255, 0.05)";
let gameFrame = 0;
const staggerFrames = 10;

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
  let dotSize = 20; // Change this to change the size of the dot

  // if (gameFrame % staggerFrames === 0) {
    // Generate random coordinates for the dot
    let positionX =  CANVAS_WIDTH / 2 - dotSize / 2;
    let positionY = CANVAS_HEIGHT / 2 - dotSize / 2;

    ctx.fillRect(
      positionX - dotSize / 2,
      positionY - dotSize / 2,
      dotSize,
      dotSize
    );
  // }

  gameFrame++;

  requestAnimationFrame(animate);
}

animate();

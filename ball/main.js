const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let CANVAS_WIDTH = (canvas.width = window.innerWidth - 20);
let CANVAS_HEIGHT = (canvas.height = window.innerHeight - 20);
const canvasBg = "rgba(255, 255, 255, 0.05)";
ctx.fillStyle = canvasBg;
ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

window.addEventListener("resize", function () {
  CANVAS_WIDTH = (canvas.width = window.innerWidth - 20);
  CANVAS_HEIGHT = (canvas.height = window.innerHeight - 20);
  ctx.fillStyle = canvasBg;
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
});

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillStyle = canvasBg;
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  
  requestAnimationFrame(animate);
}

animate();

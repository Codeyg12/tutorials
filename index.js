// canvas draw eyes with beginPath, moveTo, quadraticCurveTo,stroke
// first make to follow mouse
// make follow camera

const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
let clearing = false;

// Quads
function debug() {
  if (clearing) {
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.moveTo(0, 250);
    ctx.lineTo(500, 250);
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.moveTo(250, 0);
    ctx.lineTo(250, 500);
    ctx.stroke();
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function drawHead() {
  ctx.beginPath();
  // Top head
  ctx.moveTo(85, 250);
  ctx.quadraticCurveTo(75, 75, 250, 60);
  ctx.moveTo(415, 250);
  ctx.quadraticCurveTo(425, 75, 250, 60);
  // bottom half
  ctx.moveTo(85, 250);
  ctx.quadraticCurveTo(75, 425, 250, 440);
  ctx.moveTo(415, 250);
  ctx.quadraticCurveTo(425, 415, 250, 440);
  ctx.stroke();
  //mouth
  ctx.beginPath();
  ctx.fillStyle = "pink";
  ctx.moveTo(150, 320);
  ctx.lineTo(360, 320);
  ctx.beginPath();
  ctx.moveTo(150, 320);
  ctx.quadraticCurveTo(250, 450, 360, 320);
  ctx.fill();
}

ctx.beginPath()
ctx.moveTo(0, 190)
ctx.lineTo(500, 190)
ctx.stroke()
ctx.beginPath()
ctx.moveTo(175, 0)
ctx.lineTo(175, 500)
ctx.stroke()
ctx.beginPath()
ctx.moveTo(325, 0)
ctx.lineTo(325, 500)
ctx.stroke()

canvas.addEventListener("click", (e) => {
  console.log(`${e.offsetX} ${e.offsetY}`);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "d") {
    clearing = !clearing;
    debug();
    drawHead();
  }
});

drawHead();

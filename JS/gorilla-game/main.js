let state = {};

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

newGame();

function newGame() {
  state = {
    phase: "aiming",
    currentPlayer: 1,
    bomb: {
      x: undefined,
      y: undefined,
      rotation: 0,
      velocity: { x: 0, y: 0 },
    },
    backgroundBuildings: [],
    buildings: [],
    blastHoles: [],
  };

  for (let i = 0; i < 10; i++) {
    generateBackgroundBuilding(i);
  }

  for (let i = 0; i < 10; i++) {
    generateBuilding(i);
  }

  initalizeBombPosition();

  draw();
}

function generateBackgroundBuilding(i) {}

function generateBuilding(i) {}

function initalizeBombPosition() {}

function draw() {
  ctx.translate(0, canvas.height);
  ctx.scale(1, -1);

  drawBackground();
  drawBackgroundBuildings();
  drawBuildings();
  drawGorilla(1);
  drawGorilla(2);
  drawBomb();

  ctx.restore();
}

function throwBomb() {}

function animate(timestamp) {}

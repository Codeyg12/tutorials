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

function generateBackgroundBuilding(i) {
  const previousBuilding = state.backgroundBuildings[i - 1];

  const x = previousBuilding
    ? previousBuilding.x + previousBuilding.width + 4
    : -30;

  const minWidth = 60;
  const maxWidth = 110;
  const width = Math.random() * (maxWidth - minWidth) + minWidth;

  const minHeight = 80;
  const maxHeight = 350;
  const height = Math.random() * (maxHeight - minHeight) + minHeight;

  state.backgroundBuildings.push({ x, width, height });
}

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

function drawBackground() {
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(1, "#f8ba85");
  gradient.addColorStop(0, "#ffc28e");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
  ctx.beginPath();
  ctx.arc(300, 420, 60, 0, 2 * Math.PI);
  ctx.fill();
}

function drawBackgroundBuildings() {
  state.backgroundBuildings.forEach((building) => {
    ctx.fillStyle = "#947285";
    ctx.fillRect(building.x, 0, building.width, building.height);
  });
}

function drawBuildings() {}

function drawGorilla(player) {}

function drawBomb() {}

function throwBomb() {}

function animate(timestamp) {}

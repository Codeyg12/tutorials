let state = {};
let isDragging = false;
let dragStartX = undefined;
let dragStartY = undefined;

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Left info panel
const info1DOM = document.getElementById("info-left");
const name1DOM = document.querySelector("#info-left .name");
const angle1DOM = document.querySelector("#info-left .angle");
const velocity1DOM = document.querySelector("#info-left .velocity");

// Right info panel
const info2DOM = document.getElementById("info-right");
const name2DOM = document.querySelector("#info-right .name");
const angle2DOM = document.querySelector("#info-right .angle");
const velocity2DOM = document.querySelector("#info-right .velocity");
// The bomb's grab area
const bombGrabAreaDOM = document.getElementById("bomb-grab-area");

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
    scale: 1,
  };

  for (let i = 0; i < 10; i++) {
    generateBackgroundBuilding(i);
  }

  for (let i = 0; i < 10; i++) {
    generateBuilding(i);
  }

  calculateScale();

  initalizeBombPosition();

  draw();
}

function calculateScale() {
  const lastBuilding = state.buildings.at(-1);
  const totalWidthOfCity = lastBuilding.x + lastBuilding.width;

  state.scale = canvas.width / totalWidthOfCity;
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

function generateBuilding(i) {
  const previousBuilding = state.buildings[i - 1];

  const x = previousBuilding
    ? previousBuilding.x + previousBuilding.width + 4
    : 0;

  const minWidth = 80;
  const maxWidth = 130;
  const width = Math.random() * (maxWidth - minWidth) + minWidth;

  const platformWithGorilla = i === 1 || i === 6;

  const minHeight = 40;
  const maxHeight = 300;
  const minHeightWithGorilla = 30;
  const maxHeightWithGorilla = 150;

  const height = platformWithGorilla
    ? Math.random() * (maxHeightWithGorilla - minHeightWithGorilla) +
      minHeightWithGorilla
    : Math.random() * (maxHeight - minHeight) + minHeight;

  const lightsOn = [];
  for (let i = 0; i < 50; i++) {
    const light = Math.random() <= 0.33 ? true : false;
    lightsOn.push(light);
  }

  state.buildings.push({ x, width, height, lightsOn });
}

function initalizeBombPosition() {
  const building =
    state.currentPlayer === 1 ? state.buildings.at(1) : state.buildings.at(-2);

  const gorillaX = building.x + building.width / 2;
  const gorillaY = building.height;

  const gorillaHandOffsetX = state.currentPlayer === 1 ? -28 : 28;
  const gorillaHandOffsetY = 107;

  state.bomb.x = gorillaX + gorillaHandOffsetX;
  state.bomb.y = gorillaY + gorillaHandOffsetY;
  state.bomb.velocity = { x: 0, y: 0 };
  state.bomb.rotation = 0;

  const grabAreaRadius = 15;
  const left = state.bomb.x * state.scale - grabAreaRadius;
  const bottom = state.bomb.y * state.scale - grabAreaRadius;
  bombGrabAreaDOM.style.left = `${left}px`;
  bombGrabAreaDOM.style.bottom = `${bottom}px`;
}

function draw() {
  ctx.save();

  ctx.translate(0, canvas.height);
  ctx.scale(1, -1);
  ctx.scale(state.scale, state.scale);

  drawBackground();
  drawBackgroundBuildings();
  drawBuildings();
  drawGorilla(1);
  drawGorilla(2);
  drawBomb();

  ctx.restore();
}

function drawBackground() {
  const gradient = ctx.createLinearGradient(
    0,
    0,
    0,
    canvas.height / state.scale
  );
  gradient.addColorStop(1, "#f8ba85");
  gradient.addColorStop(0, "#ffc28e");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width / state.scale, canvas.height / state.scale);

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

function drawBuildings() {
  state.buildings.forEach((building) => {
    ctx.fillStyle = "#4a3c68";
    ctx.fillRect(building.x, 0, building.width, building.height);

    const windowWidth = 10;
    const windowHeight = 12;
    const gap = 15;

    const numOfFloors = Math.ceil(
      (building.height - gap) / (windowHeight + gap)
    );
    const numOfRoomsPerFloor = Math.floor(
      (building.width - gap) / (windowWidth + gap)
    );

    for (let floor = 0; floor < numOfFloors; floor++) {
      for (let room = 0; room < numOfRoomsPerFloor; room++) {
        if (building.lightsOn[floor * numOfRoomsPerFloor + room]) {
          ctx.save();

          ctx.translate(building.x + gap, building.height - gap);
          ctx.scale(1, -1);

          const x = room * (windowWidth + gap);
          const y = floor * (windowHeight + gap);

          ctx.fillStyle = "#ebb6a2";
          ctx.fillRect(x, y, windowWidth, windowHeight);

          ctx.restore();
        }
      }
    }
  });
}

function drawGorilla(player) {
  ctx.save();

  const building =
    player === 1 ? state.buildings.at(1) : state.buildings.at(-2);

  ctx.translate(building.x + building.width / 2, building.height);

  drawGorillaBody();
  drawGorillaFace(player);
  drawGorillaArmLeft(player);
  drawGorillaArmRight(player);

  ctx.restore();
}

function drawGorillaBody() {
  ctx.fillStyle = "#000000";

  ctx.beginPath();
  ctx.moveTo(0, 15);
  ctx.lineTo(-7, 0);
  ctx.lineTo(-20, 0);
  ctx.lineTo(-17, 18);
  ctx.lineTo(-20, 44);

  ctx.lineTo(-11, 77);
  ctx.lineTo(0, 84);
  ctx.lineTo(11, 77);

  ctx.lineTo(20, 44);
  ctx.lineTo(17, 18);
  ctx.lineTo(20, 0);
  ctx.lineTo(7, 0);
  ctx.fill();
}

function drawGorillaArmLeft(player) {
  ctx.strokeStyle = "black";
  ctx.lineWidth = 18;

  ctx.beginPath();
  ctx.moveTo(-14, 50);

  if (state.phase === "aiming" && state.currentPlayer === 1 && player === 1) {
    ctx.quadraticCurveTo(
      -44,
      63,
      -28 - state.bomb.velocity.x / 6.25,
      107 - state.bomb.velocity.y / 6.25
    );
  } else if (state.phase === "celebrating" && state.currentPlayer === player) {
    ctx.quadraticCurveTo(-44, 63, -28, 107);
  } else {
    ctx.quadraticCurveTo(-44, 63, -28, 107);
  }
  ctx.stroke();
}

function drawGorillaArmRight(player) {
  ctx.strokeStyle = "black";
  ctx.lineWidth = 18;

  ctx.beginPath();
  ctx.moveTo(14, 50);

  if (state.phase === "aiming" && state.currentPlayer === 2 && player === 2) {
    ctx.quadraticCurveTo(
      44,
      63,
      28 - state.bomb.velocity.x / 6.25,
      107 - state.bomb.velocity.y / 6.25
    );
  } else if (state.phase === "celebrating" && state.currentPlayer === player) {
    ctx.quadraticCurveTo(44, 63, 28, 107);
  } else {
    ctx.quadraticCurveTo(44, 63, 28, 107);
  }
  ctx.stroke();
}

function drawGorillaFace(player) {
  // Face
  ctx.fillStyle = "lightgray";
  ctx.beginPath();
  ctx.arc(0, 63, 9, 0, 2 * Math.PI);
  ctx.moveTo(-3.5, 70);
  ctx.arc(-3.5, 70, 4, 0, 2 * Math.PI);
  ctx.moveTo(3.5, 70);
  ctx.arc(3.5, 70, 4, 0, 2 * Math.PI);
  ctx.fill();

  // Eyes
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(-3.5, 70, 1.4, 0, 2 * Math.PI);
  ctx.moveTo(3.5, 70);
  ctx.arc(3.5, 70, 1.4, 0, 2 * Math.PI);
  ctx.fill();

  // Nose
  ctx.strokeStyle = "black";
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  ctx.moveTo(-3.5, 66.5);
  ctx.lineTo(-1.5, 65);
  ctx.moveTo(3.5, 66.5);
  ctx.lineTo(1.5, 65);
  ctx.stroke();

  // Mouth
  ctx.beginPath();
  if (state.phase === "celebrating" && state.currentPlayer === player) {
    ctx.moveTo(-5, 60);
    ctx.quadraticCurveTo(0, 56, 5, 60);
  } else {
    ctx.moveTo(-5, 56);
    ctx.quadraticCurveTo(0, 60, 5, 56);
  }
  ctx.stroke();
}

function drawBomb() {
  ctx.save();
  ctx.translate(state.bomb.x, state.bomb.y);

  if (state.phase === "aiming") {
    ctx.translate(-state.bomb.velocity.x / 6.25, -state.bomb.velocity.y / 6.25);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
    ctx.setLineDash([3, 8]);
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(state.bomb.velocity.x, state.bomb.velocity.y);
    ctx.stroke();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(0, 0, 6, 0, 2 * Math.PI);
    ctx.fill();
  } else if (state.phase === "in flight") {
    ctx.fillStyle = "yellow";
    ctx.rotate(state.bomb.rotation);
    ctx.beginPath();
    ctx.moveTo(-8, -2);
    ctx.quadraticCurveTo(0, 12, 8, -2);
    ctx.quadraticCurveTo(0, 2, -8, -2);
    ctx.fill();
  } else {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(0, 0, 6, 0, 2 * Math.PI);
    ctx.fill();
  }

  ctx.restore();
}

function throwBomb() {
  state.phase = "in flight";
  previousAnimationTimestamp = undefined;
  requestAnimationFrame(animate);
}

function animate(timestamp) {
  if (previousAnimationTimestamp === undefined) {
    previousAnimationTimestamp = timestamp;
    requestAnimationFrame(animate);
    return;
  }

  const elapsedTime = timestamp - previousAnimationTimestamp;

  moveBomb(elapsedTime);

  // Hit detection
  const miss = checkFrameHit() || checkBuildingHit();
  const hit = false;

  if (miss) {
    state.currentPlayer = state.currentPlayer === 1 ? 2 : 1;
    state.phase = "aiming";
    initalizeBombPosition();

    draw();
    return;
  }

  if (hit) {
    return;
  }

  draw();
  previousAnimationTimestamp = timestamp;
  requestAnimationFrame(animate);
}

function checkFrameHit() {
  if (
    state.bomb.y < 0 ||
    state.bomb.x < 0 ||
    state.bomb.x > canvas.width / state.scale
  ) {
    return true;
  }
}

function checkBuildingHit() {
  for (let i = 0; i < state.buildings.length; i++) {
    const building = state.buildings[i];

    if (
      state.bomb.x + 4 > building.x &&
      state.bomb.x - 4 < building.x + building.width &&
      state.bomb.y - 4 < 0 + building.height
    ) {
      state.blastHoles.push({ x: state.bomb.x, y: state.bomb.y });
      return true;
    }
  }
}

function moveBomb(elapsedTime) {
  const multiplier = elapsedTime / 200;

  state.bomb.velocity.y -= 20 * multiplier;

  state.bomb.x += state.bomb.velocity.x * multiplier;
  state.bomb.y += state.bomb.velocity.y * multiplier;

  const direction = state.currentPlayer === 1 ? -1 : 1;
  state.bomb.rotation += direction * 5 * multiplier;
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  calculateScale();
  initalizeBombPosition();
  draw();
});

bombGrabAreaDOM.addEventListener("mousedown", (event) => {
  if (state.phase === "aiming") {
    isDragging = true;
    dragStartX = event.clientX;
    dragStartY = event.clientY;

    document.body.style.cursor = "grabbing";
  }
});

window.addEventListener("mousemove", function (e) {
  if (isDragging) {
    let deltaX = e.clientX - dragStartX;
    let deltaY = e.clientY - dragStartY;

    state.bomb.velocity.x = -deltaX;
    state.bomb.velocity.y = deltaY;
    setInfo(deltaX, deltaY);

    draw();
  }
});

window.addEventListener("mouseup", (event) => {
  if (isDragging) {
    isDragging = false;
    document.body.style.cursor = "default";

    throwBomb();
  }
});

function setInfo(deltaX, deltaY) {
  const hypotenuse = Math.sqrt(deltaX ** 2 + deltaY ** 2);
  const angleInRadians = Math.asin(deltaY / hypotenuse);
  const angleInDegrees = angleInRadians * (180 / Math.PI);

  if (state.currentPlayer === 1) {
    angle1DOM.innerText = Math.round(angleInDegrees);
    velocity1DOM.innerText = Math.round(hypotenuse);
  } else {
    angle2DOM.innerText = Math.round(angleInDegrees);
    velocity2DOM.innerText = Math.round(hypotenuse);
  }
}

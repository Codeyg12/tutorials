let state = {};

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

newGame();

function newGame() {
  state = {};

  draw();
}

function draw() {}

function throwBomb() {}

function animate(timestamp) {}

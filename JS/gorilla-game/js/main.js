import { BackgroundBuildings } from "./background.js";
import { Building } from "./building.js";
window.addEventListener("load", () => {
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.currentPlayer = 1;
      this.round = 1;
      this.background = new BackgroundBuildings(this);
      this.building = new Building(this);
      this.backgroundBuildings = [];
      this.buildings = [];
      this.blastHoles = [];
      this.scale = 1.5;
    }

    update() {
      for (let i = 0; i < 10; i++) {
        this.background.update(i);
      }

      for (let i = 0; i < 10; i++) {
        this.building.update(i)
      }
    }

    draw(context) {
      ctx.save();

      ctx.translate(0, canvas.height);
      ctx.scale(1, -1);
      ctx.scale(this.scale, this.scale);

      this.background.draw(context);
      this.building.draw(context)
      ctx.restore();
    }
  }
  const game = new Game(canvas.width, canvas.height);
  let lastTime = 0;
  function animate(timestamp) {
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update(deltaTime);
    game.draw(ctx);
  }
  animate(0);
});

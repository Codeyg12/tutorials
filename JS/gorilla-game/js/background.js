export class BackgroundBuildings {
  constructor(game, width, height) {
    this.game = game;
    this.height = height;
    this.width = width;
    this.x = 0;
    this.y = 0;
  }

  update(i) {
    const previousBuilding = this.game.backgroundBuildings[i - 1];

    const x = previousBuilding
      ? previousBuilding.x + previousBuilding.width + 4
      : -30;

    const minWidth = 60;
    const maxWidth = 110;
    const width = Math.random() * (maxWidth - minWidth) + minWidth;

    const minHeight = 80;
    const maxHeight = 350;
    const height = Math.random() * (maxHeight - minHeight) + minHeight;

    this.game.backgroundBuildings.push({ x, width, height });
  }

  draw(ctx) {
    const gradient = ctx.createLinearGradient(
      0,
      0,
      0,
      canvas.height / this.game.scale
    );
    gradient.addColorStop(1, "#f8ba85");
    gradient.addColorStop(0, "#ffc28e");

    ctx.fillStyle = gradient;
    ctx.fillRect(
      0,
      0,
      canvas.width / this.game.scale,
      canvas.height / this.game.scale
    );

    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
    ctx.beginPath();
    ctx.arc(300, 420, 60, 0, 2 * Math.PI);
    ctx.fill();
    this.game.backgroundBuildings.forEach((building) => {
      ctx.fillStyle = "#947285";
      ctx.fillRect(building.x, 0, building.width, building.height);
    });
  }
}

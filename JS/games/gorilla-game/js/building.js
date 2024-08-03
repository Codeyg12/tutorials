export class Building {
  constructor(game, width, height) {
    this.game = game;
    this.height = height;
    this.width = width;
    this.x = 0;
    this.y = 0;
  }

  update(i) {
    const previousBuilding = this.game.buildings[i - 1];

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

    this.game.buildings.push({ x, width, height, lightsOn });
  }

  draw(ctx) {
    this.game.buildings.forEach((building) => {
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
}

import { Player } from "./player";

export class World {
  background_color: string;

  friction: number;
  old_flying_loader: number;

  player: Player;

  columns: number;
  rows: number;
  tile_width: number;
  tile_height: number;
  width: number;
  height: number;

  constructor() {
    (this.background_color = "rgb(40, 48, 56)"),
      (this.friction = 0.8),
      (this.old_flying_loader = 0),
      (this.player = new Player()),
      (this.columns = 10);
    this.rows = 6;
    this.tile_width = 164;
    this.tile_height = 95;
    this.height = this.tile_height * this.rows;
    this.width = this.tile_width * this.columns;
  }

  collideObject(object: Player): void {
    if (object.x < 0) {
      object.x = 0;
      object.velocity_x = 0;
    } else if (object.x + object.width > this.width) {
      object.x = this.width - object.width;
      object.velocity_x = 0;
    }
    if (object.y < 0) {
      object.y = 0;
      object.velocity_y = 0;
    } else if (object.y + object.height > this.height) {
      object.flying = false;
      object.y = this.height - object.height;
      object.velocity_y = 0;
    }
  }

  update() {
    //this.player.velocity_y += this.gravity;

    this.player.velocity_x *= this.friction;
    //this.player.velocity_y *= this.friction;

    this.player.update();

    this.collideObject(this.player);
    console.log(this.player.velocity_y);
  }
}

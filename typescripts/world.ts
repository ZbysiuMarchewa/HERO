import { Collider } from "./collider";
import { Frame_Sets } from "./frame_sets_interface";
import { Player } from "./player";
import { TileSet } from "./tileSet";

export class World {
  collider: Collider;

  frame_sets: Frame_Sets;
  player: Player;

  columns: number;
  rows: number;

  tile_set: TileSet;

  map: number[];
  collision_map: number[];
  width: number;
  height: number;

  constructor() {
    this.collider = new Collider();
    this.frame_sets = {
      "fly-right": [0],
      "walk-right": [1, 2, 3, 4, 5],
      "idle-right": [6],
      "fly-left": [7],
      "walk-left": [8, 9, 10, 11, 12],
      "idle-left": [13],
    };
    (this.player = new Player(300, 0, this.frame_sets)), (this.columns = 10);
    this.rows = 6;

    this.tile_set = new TileSet(10, 164, 95);

    this.map = [
      0, 1, 2, 3, 4, 3, 4, 3, 4, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
      17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
      35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 45, 46, 47, 48, 45, 46,
      45, 46,
    ];

    //Collisions System
    /*
        0: full air
        1: full block
        2: left half block
        3: right half block
        4: left little part block
        5: right little part block
    */
    this.collision_map = [
      0, 16, 17, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 4, 4, 4, 4, 4, 4, 0, 2, 0, 0,
      0, 0, 0, 0, 0, 0, 8, 2, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 1, 1, 1, 20, 21, 1,
      1, 1, 0, 0, 0, 0, 0, 22, 23, 0, 0, 0, 0,
    ];

    this.height = this.tile_set.tile_height * this.rows + 369;
    this.width = this.tile_set.tile_width * this.columns;
  }

  collideObject(object: Player): void {
    /* Let's make sure we can't leave the world boundaries. */
    if (object.getLeft() < 0) {
      object.setLeft(0);
      object.velocity_x = 0;
    } else if (object.getRight() > this.width) {
      object.setRight(this.width);
      object.velocity_x = 0;
    }
    if (object.getTop() < 0) {
      object.setTop(0);
      object.velocity_y = 0;
    } else if (
      object.getBottom() >
      this.tile_set.tile_height * this.rows + 19
    ) {
      object.setBottom(this.tile_set.tile_height * this.rows + 19);
      object.velocity_y = 0;
      object.flying = false;
    }

    let bottom, left, right, top, value: number;

    top = Math.floor((object.getTop() - 19) / this.tile_set.tile_height);
    left = Math.floor(object.getLeft() / this.tile_set.tile_width);
    value = this.collision_map[top * this.columns + left];
    this.collider.collide(
      value,
      object,
      left * this.tile_set.tile_width,
      top * this.tile_set.tile_height,
      this.tile_set.tile_width,
      this.tile_set.tile_height
    );

    top = Math.floor((object.getTop() - 19) / this.tile_set.tile_height);
    right = Math.floor(object.getRight() / this.tile_set.tile_width);
    value = this.collision_map[top * this.columns + right];
    this.collider.collide(
      value,
      object,
      right * this.tile_set.tile_width,
      top * this.tile_set.tile_height,
      this.tile_set.tile_width,
      this.tile_set.tile_height
    );

    bottom = Math.floor((object.getBottom() - 19) / this.tile_set.tile_height);
    left = Math.floor(object.getLeft() / this.tile_set.tile_width);
    value = this.collision_map[bottom * this.columns + left];
    this.collider.collide(
      value,
      object,
      left * this.tile_set.tile_width,
      bottom * this.tile_set.tile_height,
      this.tile_set.tile_width,
      this.tile_set.tile_height
    );

    bottom = Math.floor((object.getBottom() - 19) / this.tile_set.tile_height);
    right = Math.floor(object.getRight() / this.tile_set.tile_width);
    value = this.collision_map[bottom * this.columns + right];
    this.collider.collide(
      value,
      object,
      right * this.tile_set.tile_width,
      bottom * this.tile_set.tile_height,
      this.tile_set.tile_width,
      this.tile_set.tile_height
    );
  }

  update() {
    this.player.updatePosition();
    this.collideObject(this.player);
    this.player.updateAnimation();
  }
}

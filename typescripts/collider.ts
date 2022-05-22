import { Player } from "./player";

export class Collider {
  constructor() {}

  collidePlatformBottom(object: Player, tile_bottom: number) {
    if (object.getTop() < tile_bottom && object.getOldTop() >= tile_bottom) {
      object.setTop(tile_bottom); //Move the top of the object to the bottom of the tile
      object.velocity_y = 0; //Stop moving in that direction.
      return true;
    }
    return false;
  }

  //partly collisions
  collideRightPlatformBottom(
    object: Player,
    tile_bottom: number,
    coll_x: number,
    coll_width: number
  ) {
    if (
      object.getTop() < tile_bottom &&
      object.getOldTop() >= tile_bottom &&
      object.getLeft() < coll_x + coll_width
    ) {
      object.setTop(tile_bottom); //Move the top of the object to the bottom of the tile
      object.velocity_y = 0; //Stop moving in that direction.
      return true;
    }
    return false;
  }

  collideLeftPlatformBottom(
    object: Player,
    tile_bottom: number,
    coll_x: number,
    coll_width: number
  ) {
    if (
      object.getTop() < tile_bottom &&
      object.getOldTop() >= tile_bottom &&
      object.getRight() > coll_x
    ) {
      object.setTop(tile_bottom); //Move the top of the object to the bottom of the tile
      object.velocity_y = 0; //Stop moving in that direction.
      return true;
    }
    return false;
  }

  collidePlatformTop(object: Player, tile_top: number) {
    if (object.getBottom() > tile_top && object.getOldBottom() <= tile_top) {
      object.setBottom(tile_top - 0.01); //Move the top of the object to the bottom of the tile
      object.velocity_y = 0; //Stop moving in that direction.
      object.flying = false;
      return true;
    }
    return false;
  }

  collideRightPlatformTop(
    object: Player,
    tile_top: number,
    coll_x: number,
    coll_width: number
  ) {
    if (
      object.getBottom() > tile_top &&
      object.getOldBottom() <= tile_top &&
      object.getLeft() < coll_x + coll_width
    ) {
      object.setBottom(tile_top - 0.01); //Move the top of the object to the bottom of the tile
      object.velocity_y = 0; //Stop moving in that direction.
      object.flying = false;
      return true;
    }
    object.flying = true;
    return false;
  }

  collideLeftPlatformTop(
    object: Player,
    tile_top: number,
    coll_x: number,
    coll_width: number
  ) {
    if (
      object.getBottom() > tile_top &&
      object.getOldBottom() <= tile_top &&
      object.getRight() > coll_x
    ) {
      object.setBottom(tile_top - 0.01);
      object.velocity_y = 0;
      object.flying = false;
      return true;
    }
    object.flying = true;
    return false;
  }

  collidePlatformLeft(object: Player, tile_left: number) {
    if (object.getRight() > tile_left && object.getOldRight() <= tile_left) {
      object.setRight(tile_left - 0.01);
      object.velocity_x = 0;
      return true;
    }
    return false;
  }

  collidePlatformRight(object: Player, tile_right: number) {
    if (object.getLeft() < tile_right && object.getOldLeft() >= tile_right) {
      object.setLeft(tile_right);
      object.velocity_x = 0;
      return true;
    }
    return false;
  }

  collide(
    value: number,
    object: Player,
    tile_x: number,
    tile_y: number,
    tile_width: number,
    tile_height: number
  ) {
    tile_y += 19;
    switch (value) {
      case 0:
        break;
      case 1:
        if (this.collidePlatformTop(object, tile_y)) return;
        break;
      case 2:
        if (this.collidePlatformRight(object, tile_x + tile_width)) return;
        break;
      case 3:
        if (this.collidePlatformTop(object, tile_y)) return; // If there's a collision, we don't need to check for anything else.
        if (this.collidePlatformRight(object, tile_x + tile_width)) return;
        break;
      case 4:
        if (this.collidePlatformBottom(object, tile_y + tile_height)) return;
        break;
      case 5:
        if (this.collidePlatformTop(object, tile_y)) return;
        if (this.collidePlatformBottom(object, tile_y + tile_height)) return;
        break;
      case 6:
        if (this.collidePlatformRight(object, tile_x + tile_width)) return;
        if (this.collidePlatformBottom(object, tile_y + tile_height)) return;
        break;
      case 7:
        if (this.collidePlatformTop(object, tile_y)) return;
        if (this.collidePlatformRight(object, tile_x + tile_width)) return;
        if (this.collidePlatformBottom(object, tile_y + tile_height)) return;
        break;
      case 8:
        if (this.collidePlatformLeft(object, tile_x)) return;
        break;
      case 9:
        if (this.collidePlatformTop(object, tile_y)) return;
        if (this.collidePlatformLeft(object, tile_x)) return;
        break;
      case 10:
        if (this.collidePlatformLeft(object, tile_x)) return;
        if (this.collidePlatformRight(object, tile_x + tile_width)) return;
        break;
      case 11:
        if (this.collidePlatformTop(object, tile_y)) return;
        if (this.collidePlatformLeft(object, tile_x)) return;
        if (this.collidePlatformRight(object, tile_x + tile_width)) return;
        break;
      case 12:
        if (this.collidePlatformLeft(object, tile_x)) return;
        if (this.collidePlatformBottom(object, tile_y + tile_height)) return;
        break;
      case 13:
        if (this.collidePlatformTop(object, tile_y)) return;
        if (this.collidePlatformLeft(object, tile_x)) return;
        if (this.collidePlatformBottom(object, tile_y + tile_height)) return;
        break;
      case 14:
        if (this.collidePlatformLeft(object, tile_x)) return;
        if (this.collidePlatformRight(object, tile_x)) return;
        if (this.collidePlatformBottom(object, tile_y + tile_height)) return;
        break;
      case 15:
        if (this.collidePlatformTop(object, tile_y)) return;
        if (this.collidePlatformLeft(object, tile_x)) return;
        if (this.collidePlatformRight(object, tile_x + tile_width)) return;
        if (this.collidePlatformBottom(object, tile_y + tile_height)) return;
        break;
      case 16:
        if (this.collidePlatformRight(object, tile_x + tile_width / 4)) return;
        break;
      case 17:
        if (this.collidePlatformLeft(object, tile_x + (3 * tile_width) / 4))
          return;
        break;
      case 18:
        if (
          this.collideRightPlatformBottom(
            object,
            tile_y + tile_height,
            tile_x,
            tile_width / 4
          )
        )
          return;
        if (this.collidePlatformRight(object, tile_x + tile_width / 4)) return;
        break;
      case 19:
        if (
          this.collideLeftPlatformBottom(
            object,
            tile_y + tile_height,
            tile_x + (3 * tile_width) / 4,
            tile_width / 4
          )
        )
          return;
        if (this.collidePlatformLeft(object, tile_x + (3 * tile_width) / 4))
          return;
        break;
      case 20:
        if (
          this.collideRightPlatformTop(object, tile_y, tile_x, tile_width / 2)
        )
          return;
        object.flying = true;
        if (this.collidePlatformRight(object, tile_x + tile_width / 2)) return;
        break;
      case 21:
        if (
          this.collideLeftPlatformTop(
            object,
            tile_y,
            tile_x + tile_width / 2,
            tile_width / 2
          )
        )
          return;
        object.flying = true;
        if (this.collidePlatformLeft(object, tile_x + tile_width / 2)) return;
        break;
      case 22:
        if (this.collidePlatformRight(object, tile_x + tile_width / 2)) return;
        break;
      case 23:
        if (this.collidePlatformLeft(object, tile_x + tile_width / 2)) return;
        break;
    }
  }
}

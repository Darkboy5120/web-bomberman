"use strict";

import Rect from "./Rect.js";
import Hitbox from "./foo.js";

class Player {
  constructor(game, keysCodes, x, y, width, height) {
    this.rect = new Rect(x, y, width, height, "player");
    this.previusRect = this.rect;
    this.game = game;
    this.speed = 1;
    this.keys = keysCodes;
    this.rect.initRender(game);
    this.hitbox = new Hitbox(game, keysCodes, this.rect);
    this.hitbox.initRender();
    this.lastMapCell = null;
  }

  checkBlockCollision = (blocks) => {
    return this.hitbox.checkCollision(blocks);
  }

  rollback = () => {
    this.rect.x = this.previusRect.x;
    this.rect.y = this.previusRect.y;
    this.rect.width = this.previusRect.width;
    this.rect.height = this.previusRect.height;
    this.hitbox.update(this.rect);
  }

  render = () => {
    this.rect.render();
    this.hitbox.render();
  }
  
  move = (direction) => {
    this.previusRect = {...this.rect};
    if (direction === this.keys.right) {
      this.rect.x += this.speed;
    } else if (direction === this.keys.top) {
      this.rect.y -= this.speed;
    } else if (direction === this.keys.left) {
      this.rect.x -= this.speed;
    } else if (direction === this.keys.bottom) {
      this.rect.y += this.speed;
    }
    this.hitbox.update(this.rect);
  }
}

export default Player;

"use strict";

import Rect from "./Rect.js";
import Hitbox from "./foo.js";

class Player {
  constructor(game, keysCodes, x, y, width, height) {
    this.rect = new Rect(x, y, width, height, "player");
    this.game = game;
    this.speed = 1;
    this.keys = keysCodes;
    this.rect.initRender(game);
    this.hitbox = new Hitbox(game, keysCodes, this.rect);
    this.hitbox.initRender();
  }

  getCollision = (rect1, rect2) => {
    
  }

  checkCollision = (blocks) => {
    for (let block of blocks) {
      for (let rect in this.rects) {
        let collision = this.getCollision(rect, this.rects[rect].rect);
        console.log(collision);
      }
    }
  }

  render = () => {
    this.rect.render();
    this.hitbox.render();
  }
  
  move = (direction) => {
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
    this.render();
  }
}

export default Player;

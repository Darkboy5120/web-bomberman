"use strict";

import Rect from "./Rect.js";

class Hitbox {
  constructor(game, keys, rect) {
    this.game = game;
    this.keys = keys;
    this.root = rect;
    this.hitSize = 2;
    this.rects = {};
    this.create(rect);
  }

  initRender = () => {
    for (let rect in this.rects) {
      this.rects[rect].rect.initRender(this.game);
    }
  }

  render = () => {
    for (let rect in this.rects) {
      this.rects[rect].rect.render();
    }
  }

  getCollision = (rect1, rect2) => {
    return rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.height + rect1.y > rect2.y;
  }

  checkCollision = (blocks) => {
    for (let block of blocks) {
      for (let rect in this.rects) {
        let collision = this.getCollision(block, this.rects[rect].rect);
        if (collision) return collision;
      }
    }
    return false;
  }

  create = (root) => {
    this.rects = {
      right: {
        code: this.keys.right,
        rect: new Rect(
          root.x+root.width, root.y, this.hitSize, root.height, "hitbox"
          ),
      },
      top: {
        code: this.keys.top,
        rect: new Rect(
          root.x, root.y-this.hitSize, root.width, this.hitSize, "hitbox"
          ),
      },
      left: {
        code: this.keys.left,
        rect: new Rect(
          root.x-this.hitSize, root.y, this.hitSize, root.height, "hitbox"
          ),
      },
      bottom: {
        code: this.keys.bottom,
        rect: new Rect(
          root.x, root.y+root.height, root.width, this.hitSize, "hitbox"
          ),
      }
    };
  }

  update = (root) => {
    this.rects.right.rect.set(root.x+root.width, root.y, this.hitSize, root.height);
    this.rects.top.rect.set(root.x, root.y-this.hitSize, root.width, this.hitSize);
    this.rects.left.rect.set(root.x-this.hitSize, root.y, this.hitSize, root.height);
    this.rects.bottom.rect.set(root.x, root.y+root.height, root.width, this.hitSize);
  }
}

export default Hitbox;

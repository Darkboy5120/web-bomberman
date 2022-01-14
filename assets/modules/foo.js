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

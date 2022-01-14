"use strict";

import Rect from "./Rect.js";

class Block extends Rect {
  constructor(game, x, y, width, height) {
    super(x, y, width, height, "block");
    this.game = game;
    this.initRender(game);
  }
};

export default Block;

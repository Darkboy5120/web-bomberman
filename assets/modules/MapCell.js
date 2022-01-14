"use strict";

import Rect from "./Rect.js";

class MapCell {
  constructor(game, x, y, width, height, keysCodes) {
    this.rect = new Rect(x, y, width, height, "mapCell");
    this.game = game;
    this.keys = keysCodes;
    this.rect.initRender(game);
  }

  render = () => {
    this.rect.render();
  }
};

export default MapCell;

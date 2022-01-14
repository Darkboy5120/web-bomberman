'use strict';

import Player from "./../../modules/Player.js";
import Control from "./../../modules/Control.js";
import Block from "../../modules/Block.js";

class Game {
  constructor() {
    this.fps = 30;
    this.game = document.querySelector("#game");
    this.control = new Control();
    this.blocks = [
      new Block(this.game, 100, 100, 30, 30)
    ];
    this.player = new Player(game, this.control.getKeysCodes(), 0, 0, 50, 50);
    this.gameLoop = window.setInterval(() => {
      this.getFrame();
    }, 1000/this.fps);
  }

  renderBlocks = () => {
    for (let block of this.blocks) {
      block.render();
    }
  }

  getFrame = () => {
    if (this.control.isAnyPressed()) {
      this.player.move(this.control.getDirection());
    }

    this.player.checkCollision(this.blocks);

    this.renderBlocks();
    this.player.render();
  };
}

new Game();
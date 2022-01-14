'use strict';

import Player from "./../../modules/Player.js";
import Control from "./../../modules/Control.js";
import Block from "../../modules/Block.js";
import MapCell from "../../modules/MapCell.js";

const GLOBALS = {
  mapCell: {
    size: 60,
  },
  block: {
    size: 60,
  },
  player: {
    size: 35,
  },
};

class Game {
  constructor() {
    this.fps = 60;
    this.game = document.querySelector("#game");
    this.control = new Control();
    this.blocksDesign = [
      [0, 1, 1, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 1, 0],
      [0, 1, 0, 1, 1, 0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
      [0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
      [0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
      [0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
    ];
    this.blocks = [];
    this.mapCells = [];
    this.genMap();
    this.player = new Player(game, this.control.getKeysCodes(), 0, 0,
      GLOBALS.player.size, GLOBALS.player.size);
    this.gameLoop = window.setInterval(() => {
      this.getFrame();
    }, 1000/this.fps);
  }

  genMap = () => {
    const x = Math.floor(600/GLOBALS.mapCell.size);
    const y = Math.floor(600/GLOBALS.mapCell.size);
    let result = [];
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        this.mapCells.push(
          new MapCell(this.game, GLOBALS.mapCell.size*i,
            GLOBALS.mapCell.size*j, GLOBALS.mapCell.size,
            GLOBALS.mapCell.size, this.control.getKeysCodes())
        );
        if (this.blocksDesign[i][j] === 1) {
          this.blocks.push(
            new Block(this.game, GLOBALS.block.size*i, GLOBALS.block.size*j, GLOBALS.block.size, GLOBALS.block.size)
          );
        }
      }
    }
  }

  renderBlocks = () => {
    for (let block of this.blocks) {
      block.render();
    }
  }

  renderMapCells = () => {
    for (let mapCell of this.mapCells) {
      mapCell.render();
    }
  }

  getFrame = () => {
    if (this.control.isAnyPressed()) {
      this.player.move(this.control.getDirection());
    }

    if (this.player.checkBlockCollision(this.blocks)) {
      this.player.rollback();
    }

    this.player.render();
  };
}

new Game();
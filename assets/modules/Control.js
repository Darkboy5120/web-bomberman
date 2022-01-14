"use strict";

class Control {
  constructor() {
    this.keys = {
      right: {
        code: 39,
        status: false,
      },
      top: {
        code: 38,
        status: false,
      },
      left: {
        code: 37,
        status: false,
      },
      bottom: {
        code: 40,
        status: false,
      },
    }
    this.keysDownListener = this.listenDownKeys();
    this.keysUpListener = this.listenUpKeys();
  }

  getKeysCodes = () => {
    return {
      right: this.keys.right.code,
      top: this.keys.top.code,
      left: this.keys.left.code,
      bottom: this.keys.bottom.code,
    };
  }

  update = (value, e) => {
    for (let key in this.keys) {
      if (this.keys[key].code === e.which) {
        this.keys[key].status = value;
      }
    }
  }

  isAnyPressed = () => {
    for (let key in this.keys) {
      if (this.keys[key].status === true) {
        return true;
      }
    }
    return false;
  }

  getDirection = () => {
    for (let key in this.keys) {
      if (this.keys[key].status === true) {
        return this.keys[key].code;
      }
    }
    return null;
  }

  listenDownKeys = () => {
    return document.addEventListener("keydown", e => {
      this.update(true, e);
    });
  }

  listenUpKeys = () => {
    return document.addEventListener("keyup", e => {
      this.update(false, e);
    });
  }
}

export default Control;

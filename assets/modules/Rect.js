"use strict";

class Rect {
  constructor(x, y, width, height, style) {
    this.set(x, y, width, height);
    this.style = style;
  }

  set = (x, y, width, height) => {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  initRender = (target) => {
    this.node = document.createElement("div");
    this.render(target);
    target.appendChild(this.node);
  }

  render = () => {
    this.node.classList.add(this.style);
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
    this.node.style.width = `${this.width}px`;
    this.node.style.height = `${this.height}px`;
  };
}

export default Rect;

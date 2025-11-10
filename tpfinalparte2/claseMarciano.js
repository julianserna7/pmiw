class Marciano {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.colorin = color(55, 195, 230);
    this.vida = 1;
    this.direccion = 1;
  }

  dibujar() {
    if (this.vida === 1) {
      fill(this.colorin);
      ellipse(this.posX, this.posY, 30, 30);
    }
  }

  mover() {
    this.posX = this.posX + (2 * this.direccion);
    if (this.posX > width - 30) {
      this.direccion = -1;
      this.posY = this.posY + 30;
    }
    if (this.posX < 30) {
      this.direccion = 1;
      this.posY = this.posY + 30;
    }
  }

  estaVivo() {
    return this.vida === 1;
  }
}

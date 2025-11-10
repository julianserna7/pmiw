class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.colorin = color(245, 160, 95);
    this.vida = 1;
  }

  dibujar() {
    fill(this.colorin);
    rectMode(CENTER);
    rect(this.posX, this.posY, 40, 20);

    if (keyIsPressed) {
      if (keyCode === LEFT_ARROW) {
        this.moverIzquierda();
      }
      if (keyCode === RIGHT_ARROW) {
        this.moverDerecha();
      }
    }
  }

  moverIzquierda() {
    if (this.posX > 20) {
      this.posX = this.posX - 5;
    }
  }

  moverDerecha() {
    if (this.posX < width - 20) {
      this.posX = this.posX + 5;
    }
  }

  estaVivo() {
    return this.vida === 1;
  }
}

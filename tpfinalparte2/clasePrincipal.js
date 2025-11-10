class Juego {
  constructor() {
    this.cantidadMarcianos = 21;
    this.crearPersonaje();
    this.crearMarcianos();
    this.laserActivo = false;
  }

  dibujar() {
    this.personaje.dibujar();
      for (let i = 0; i < this.cantidadMarcianos; i++) { //dibujo y movimiento de marcianos
        let marciano = this.marcianos[i];
        if (marciano.estaVivo() === true) {
          marciano.mover();
          marciano.dibujar();

          if (marciano.posY > height - 60) {
            this.personaje.vida = 0;
          }
        }
      }

      if (this.laserActivo === true && this.laser.activo === true) { //dibujo y movimiento del laser
        this.laser.mover();
        this.laser.dibujar();
        this.detectarColisiones();
      } else {
        this.laserActivo = false;
      }
      
      if (this.personajeGano() === true) { //condicines de victoria y derrota
        this.textoFinal("Ganaste");
      } else if (this.personaje.estaVivo() === false) {
      this.textoFinal("Perdiste");
    }
  }

  crearMarcianos() {
    this.marcianos = [];
    let x = 80;
    let y = 30;

    for (let i = 0; i < this.cantidadMarcianos; i++) {
      this.marcianos[i] = new Marciano(x, y);
      x = x + 70;
      if (x > width - 80) {
        x = 80;
        y = y + 60;
      }
    }
  }

  crearPersonaje() {
    this.personaje = new Personaje(width / 2, height - 40);
  }

  disparar() {
    if (this.laserActivo === false && this.personaje.estaVivo() === true) {
      this.laser = new Laser(this.personaje.posX, this.personaje.posY - 25);
      this.laserActivo = true;
    }
  }

  detectarColisiones() {
    for (let i = 0; i < this.cantidadMarcianos; i++) {
      let marciano = this.marcianos[i];
      if (marciano.estaVivo() === true && this.laser.activo === true) {
        let distancia = dist(this.laser.posX, this.laser.posY, marciano.posX, marciano.posY);
        if (distancia < 25) {
          marciano.vida = 0;
          this.laser.activo = false;
          this.laserActivo = false;
        }
      }
    }
  }

  personajeGano() {
    let cantidadVivos = 0;
    for (let i = 0; i < this.cantidadMarcianos; i++) {
      if (this.marcianos[i].estaVivo() === true) {
        cantidadVivos = cantidadVivos + 1;
      }
    }
    if (cantidadVivos === 0) {
      return true;
    } else {
      return false;
    }
  }

  textoFinal(texto) {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(28);
    text(texto, width / 2, height / 2);
  }
}

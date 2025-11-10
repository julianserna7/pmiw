let ppal;

function setup() {
  createCanvas(640, 480);
  ppal = new Juego();
}

function draw() {
  background(0);
  ppal.dibujar();
}

function mousePressed() {
  ppal.disparar();
}

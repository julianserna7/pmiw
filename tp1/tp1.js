//https://www.youtube.com/watch?v=17BTdTAXtao
//Serna, Julián Octavio
//Comisión 1

let obra16;
let cant = 14;
let fondo;
let circulos;

function preload() {
  obra16 = loadImage('data/16.png');
}

function setup() {
  createCanvas(800, 400);
  noStroke();
  fondo = color(255);
  circulos = color(0);
}

function draw() {
  let tamCelda = width / 2.0 / cant;
  let desplazamientoX = width / 2.0;
  let desplazamientoY = 0;
  background(fondo);
  image(obra16, 0, 0);
  fill(circulos);
  dibujarGrilla(cant, tamCelda, desplazamientoX, desplazamientoY);
}

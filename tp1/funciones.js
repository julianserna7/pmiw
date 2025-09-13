function dibujarGrilla(dimGrilla, tamCelda, desplazamientoX, desplazamientoY) {
  for (let i = 0; i < dimGrilla; i++) {
    for (let j = 0; j < dimGrilla; j++) {
      let posX = calcularPosX(i, tamCelda, desplazamientoX);
      let posY = calcularPosY(j, tamCelda, desplazamientoY);
      let tamCirculo = calcularTam(i, j, dimGrilla, tamCelda);
      ellipse(posX, posY, tamCirculo, tamCirculo);
    }
  }
}

function calcularPosX(i, tamCelda, desplazamientoX) {
  return desplazamientoX + i * tamCelda + tamCelda / 2;
}

function calcularPosY(j, tamCelda, desplazamientoY) {
  return desplazamientoY + j * tamCelda + tamCelda / 2;
}

function calcularTam(i, j, dimGrilla, tamCelda) {
  let xDiag = i;
  let yDiag = dimGrilla - 1 - i;
  let distan = dist(i, j, xDiag, yDiag);
  let distanMax = dist(0, dimGrilla - 1, dimGrilla - 1, 0);
  let tamMax = tamCelda;
  let tamMin = tamCelda * 0.1;
  return map(distan, 0, distanMax, tamMax, tamMin);
}

function mousePressed() {
  if (mouseButton === LEFT) {
    fondo = color(random(250), random(255), random(255));
    circulos = color(random(127), random(127), random(127));
  } else if (mouseButton === RIGHT) {
    cant++;
  }
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    fondo = color(255);
    circulos = color(0);
    cant = 14;
  }
}

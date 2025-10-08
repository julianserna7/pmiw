function fondo(img, texto) {
  if (img) {
    image(img, 0, 0);
  }
  fill(255);
  text(texto, 40, 40, 560, 100);
}

function fondoFinal(img, texto) {
  if (img) {
    image(img, 0, 0);
  }
  fill(255);
  text(texto, 40, 40, 560, 100);
  boton(width / 2 - 75, 350, 150, 60, "Volver al inicio");
}

function boton(posX, posY, tamX, tamY, texto) {
  if (overMouse(posX, posY, tamX, tamY)) {
    fill(0);
  } 
  else {
    fill(200, 100, 0);
  }
  rect(posX, posY, tamX, tamY, tamY / 6);
  fill(134, 173, 255);
  textAlign(CENTER, CENTER);
  text(texto, posX + tamX / 2, posY + tamY / 2);
}

function overMouse(posX, posY, tamX, tamY) {
  return (mouseX > posX && mouseX < posX + tamX && mouseY > posY && mouseY < posY + tamY);
}

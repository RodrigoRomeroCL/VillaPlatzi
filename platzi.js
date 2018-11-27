document.addEventListener("keydown", moverCerdo);
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var xcerdo = 0;
var ycerdo = 0;

var fondo = {
  url: "images/tile.png",
  cargaOk: false
}
var vaca = {
  url: "images/vaca.png",
  cargaOk: false
}
var pollo = {
  url: "images/pollo.png",
  cargaOk: false
}
var cerdo = {
  url: "images/cerdo.png",
  cargaOk: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarAnimal);


pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarAnimal);


cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

function cargarFondo()
{
  fondo.cargaOk = true;
  dibujar();
}
function cargarAnimal(){
  vaca.cargaOk = true;
  var cantidadVacas = aleatorio(0, 15);
  console.log(cantidadVacas);
  for(var v=0; v < cantidadVacas; v++)
  {
    xVaca = aleatorio(0, 420);
    yVaca = aleatorio(0, 420);
    dibujar();
  }
  pollo.cargaOk = true;
  var cantidadPollos = aleatorio(0, 15);
  console.log(cantidadPollos);
  for(var v=0; v < cantidadPollos; v++)
  {
    xPollo = aleatorio(0, 420);
    yPollo = aleatorio(0, 420);
    dibujar();
  }
}

function cargarCerdo()
{
  cerdo.cargaOk = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOk){
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOk){
    papel.drawImage(vaca.imagen, xVaca, yVaca);
  }
  if(pollo.cargaOk){
    papel.drawImage(pollo.imagen, xPollo, yPollo);
  }
  if(cerdo.cargaOk){
    papel.drawImage(cerdo.imagen, xcerdo, ycerdo);
  }
}


function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min
  return resultado;
}

function moverCerdo(evento)
{
  var movimiento = 10;
  var teclas =
  {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };
  switch(evento.keyCode)
  {
    case teclas.UP:
      ycerdo = ycerdo - movimiento;
      dibujar();
    break;
    case teclas.DOWN:
      ycerdo = ycerdo + movimiento;
      dibujar();
    break;
    case teclas.LEFT:
      xcerdo = xcerdo - movimiento;
      dibujar();
    break;
    case teclas.RIGHT:
      xcerdo = xcerdo + movimiento;
      dibujar();
    break;
  }
}

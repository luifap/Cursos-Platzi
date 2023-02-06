var vp = document.getElementById("villa");
var papel = vp.getContext("2d");
document.addEventListener("keyup", moverCerdo);

var cerx = 150;
var cery = 150;

var fondo = {
  url: "tile.png",
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var pollo = {
  url: "pollo.png",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false,
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};



fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}

function cargarCerdo()
{
  cerdo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    var cantidad = aleatorio(2, 20);
    console.log(cantidad);
    for(var v = 0; v < cantidad; v++)
    { 
    var x = aleatorio(0, 7);
    var y = aleatorio(0, 7);
    var x = x * 60;
    var y = y * 60;
    papel.drawImage(vaca.imagen, x, y);
   }
  }
  if(pollo.cargaOK)
  {
    var cantidad = aleatorio(2, 20);
    console.log(cantidad);
    for(var p = 0; p < cantidad; p++)
    { 
    var x = aleatorio(0, 7);
    var y = aleatorio(0, 7);
    var x = x * 60;
    var y = y * 60;
    papel.drawImage(pollo.imagen, x, y);
   }
  }
  if(cerdo.cargaOK)
  {
   papel.drawImage(cerdo.imagen, cerx, cery);
  }
}


function moverCerdo(cerdito)
{
  var movimiento = 15;

  switch(cerdito.keyCode)
  {
		case cerdo.UP:
		
			cery -= movimiento;
			
			dibujar(cerx, cery);
			
			break;
			
		case cerdo.DOWN:
		
			cery += movimiento;
			
			dibujar(cerx,cery);
			
			break;
			
		case cerdo.RIGHT:
		
			cerx += movimiento;
			
			dibujar(cerx,cery);
			
			break;
			
		case cerdo.LEFT:
		
			cerx -= movimiento;
			
			dibujar(cerx,cery);
			
			break;
  }
}

function aleatorio(mini, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - mini + 1)) + mini;
  return resultado;
}


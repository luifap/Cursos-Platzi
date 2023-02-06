var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botonsito");
var opciones_color = document.getElementById("colorsote")
var captura = "red";

opciones_color.addEventListener("change",function(){
  captura = opciones_color.value;
});

boton.addEventListener("click", dibujoPorClick); //añadir un escuchador al boton
var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{ 
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf, xi, yf;
  var lxf, lyf;
  var espacio = ancho / lineas;
  var colorsito = captura

  for(l = 0; l  < lineas; l++ )
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    xi = espacio * l;
    yf = espacio * (l + 1);
    lxf = 300 - xi;
    lyf = 300 - yf;

    dibujarLinea(colorsito, 0, yi, xf, 300);
    dibujarLinea(colorsito, xi, 0, 300, yf);
    dibujarLinea(colorsito, xi, 300, 300, lyf);
    dibujarLinea(colorsito, lxf, 0, 0, yf);
    console.log("Linea" + l);
  }
  dibujarLinea("red", 1,1,1,299)
  dibujarLinea("red", 1,1,299,1)
  dibujarLinea("red", 1,299,299,299)
  dibujarLinea("red", 299,299,299,1)
}

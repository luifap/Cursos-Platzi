var texto = document.getElementById("numero_lineas");
var texto_two = document.getElementById("numero_lineas_two");
var boton = document.getElementById("boton_enviar");
var boton_two = document.getElementById("boton_enviar_two");
var colores_opciones_two = document.getElementById("colores_two")
var captura_two = "#FF0000";

colores_opciones_two.addEventListener("change",function(){
  captura = colores_opciones_two.value;
});

var colores_opciones = document.getElementById("colores")
var captura = "#FF0000";

colores_opciones.addEventListener("change",function(){
  captura = colores_opciones.value;
});

boton.addEventListener("click", ClickDibujo);
boton_two.addEventListener("click", ClickDibujo_two);
var d_two = document.getElementById("dibujo_canvas_two");
var ancho_two = d_two.width;
var lienzo_two = d_two.getContext("2d");

var d = document.getElementById("dibujo_canvas");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLineas(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarLineas_two(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo_two.beginPath();
  lienzo_two.strokeStyle = color;
  lienzo_two.moveTo(x_inicial, y_inicial);
  lienzo_two.lineTo(x_final, y_final);
  lienzo_two.stroke();
  lienzo_two.closePath();
}

function ClickDibujo()
{
  var lineas = parseInt(texto.value);
  var l = 0
  var yi, xi, yf, xf;
  var lxf, lyf;
  var espacio = ancho / lineas;
  var colorsitos = captura

  for(l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    yf = espacio * (l + 1);
    xi = espacio * l;
    lxf = 300 - xi;
    lyf = 300 - yf;

    dibujarLineas(colorsitos, 0, yi, xf, 300);
    dibujarLineas(colorsitos, xi, 0, 300, yf);
    dibujarLineas(colorsitos, xi, 300, 300, lyf);
    dibujarLineas(colorsitos, lyf, 0, 0, yf);

  }

  dibujarLineas("#000", 1,1,1,299)
  dibujarLineas("#000", 1,1,299,1)
  dibujarLineas("#000", 1,299,299,299)
  dibujarLineas("#000", 299,299,299,1)
}

function ClickDibujo_two()
{
  var lineas = parseInt(texto_two.value);
  var l = 0
  var yi, xi, yf, xf;
  var lxf, lyf;
  var espacio = ancho_two / lineas;
  var colorsitos = captura

  for(l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    yf = espacio * (l + 1);
    xi = espacio * l;
    lxf = 300 - xi;
    lyf = 300 - yf;

    dibujarLineas_two(colorsitos, 0, yi, xf, 300);
    dibujarLineas_two(colorsitos, xi, 0, 300, yf);
    dibujarLineas_two(colorsitos, xi, 300, 300, lyf);
    dibujarLineas_two(colorsitos, lyf, 0, 0, yf);

  }

  dibujarLineas_two("#000", 1,1,1,299)
  dibujarLineas_two("#000", 1,1,299,1)
  dibujarLineas_two("#000", 1,299,299,299)
  dibujarLineas_two("#000", 299,299,299,1)
}
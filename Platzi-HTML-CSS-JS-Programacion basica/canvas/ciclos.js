var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf, xi, yf;


for(l = 0; l  < lineas; l++ )
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  xi = 300 - yi;
  yf =  10 * (l + 1);
  dibujarLinea("#AAF", 0, yi, xf, 300);
  dibujarLinea("#AAF", 300, yi, xf, 0);
  dibujarLinea("#AAF", 0, xi, yf, 0);
  dibujarLinea("#AAF", yf, 300, 300, xi);
  l++
}

/*while( l < lineas)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea("#AAF", 0, yi, xf, 300);
  l++
}*/

dibujarLinea("red", 0,1,1,299)
dibujarLinea("red", 0,1,299,1)
dibujarLinea("red", 1,299,299,299)
dibujarLinea("red", 299,299,299,1)
function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

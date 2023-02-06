var d = document.getElementById("dibujito")
var lienzo = d.getContext("2d");

dibujarLinea("blue", 10, 200, 100, 200);
dibujarLinea("red", 200, 10, 200, 100);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

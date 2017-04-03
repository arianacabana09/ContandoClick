var contador = 1;
var mostrarNumeroClick = function(){
  var mostrar = document.getElementById("Imprimir");
  var mostrar2 = document.createElement('div');
  var nContador = document.createTextNode("Click " + contador);

  contador ++;

  mostrar2.appendChild(nContador);
  mostrar.appendChild(mostrar2);
  /* mostrar.innerHTML = contador; */
}
document.getElementById("presionar").addEventListener("click",mostrarNumeroClick);

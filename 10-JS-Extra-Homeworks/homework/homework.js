// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz= [];
  for (let clave in objeto){
    matriz.push([clave,objeto[clave]]);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var Caracteres={};
  
  // Esto genera un array con todas las letras del abecedario
  var abecedario = [];
  for(var i=97;i <=122;i++){
      abecedario.push(String.fromCharCode(i));
  }
  abecedario.forEach(function(elemento){
    var contador = 0;
    for(var j = 0; j < string.length; j++){
      if(elemento === string[j]){
        contador++; 
      } 
    }
    if(contador > 0){
      Caracteres[elemento] = contador;
    }
  })
  return Caracteres;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var aux ='';
  var mayus ='';
  var minus ='';
  // Recorro el string buscando caracteres en MAYUS
  for(var i = 0; i < s.length; i++){
    aux = s[i];
    if(aux.toUpperCase() === s[i]){
      mayus += s[i];
    }
    else{
      minus += s[i];
    }
  }
  return mayus + minus;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  /*
  var nuevaFrase = '';
  var inicio = 0;
  // Recorro el argumento str de principio a fin buscando de a una palabra (cada una termina con un espacio, excepto la ultima)
  for(var i = 0; i < str.length; i++){
    fin = str.indexOf(' ',inicio); // Devuelve el indice de la primer aparicio de ' '. El segundo parametro determina desde donde se busca
    sub = str.substring(inicio,fin); // Copia el substring y lo guarda en la variable aux
    inicio = fin + 1; // Actualiza la variable inicio, para buscar el proximo substring de la frase
    // Invierte el substring
    var subInvertido ='';
    for(var j = 0; j < sub.length; j++){
      subInvertido = sub[j] + subInvertido;
    }
    // Se agrega el substring a la variable de retorno
    nuevaFrase = nuevaFrase.concat(" ", subInvertido);
  }
  // Quita el espacio que sobra en el principio de la frase
  return nuevaFrase.trimStart();
  */
  var nuevaFrase = '';
  var inicio = 0;
  var ultimaAparicion = str.lastIndexOf(' ');
  // Recorro el argumento str de principio a fin buscando de a una palabra (cada una termina con un espacio, excepto la ultima)
  while(inicio < ultimaAparicion){
    fin = str.indexOf(' ',inicio); // Devuelve el indice de la primer aparicio de ' '. El segundo parametro determina desde donde se busca
    sub = str.substring(inicio,fin); // Copia el substring y lo guarda en la variable aux
    inicio = fin + 1; // Actualiza la variable inicio, para buscar el proximo substring de la frase
    // Invierte el substring
    var subInvertido ='';
    for(var j = 0; j < sub.length; j++){
      subInvertido = sub[j] + subInvertido;
    }
    // Se agrega el substring a la variable de retorno
    nuevaFrase = nuevaFrase.concat(" ", subInvertido);
  }
  // Ultima palabra de la frase 
  sub = str.substring(inicio,str.length);
  // Invierte el substring
  var subInvertido ='';
  for(var j = 0; j < sub.length; j++){
    subInvertido = sub[j] + subInvertido;
  }
  // Se agrega el substring a la variable de retorno
  nuevaFrase = nuevaFrase.concat(" ", subInvertido);
  // Quita el espacio que sobra en el principio de la frase y la retorna
  return nuevaFrase.trimStart();
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  
  if(numero > 9){
    // Convierte en arreglo al numero para poder comparar sus digitos
    var arregloDeDigitos = Array.from(String(numero), Number);
    // Invierte el numero para despues compararlo con el original
    var numInvertido ='';
    for(var j = 0; j < arregloDeDigitos.length; j++){
      numInvertido = arregloDeDigitos[j] + numInvertido;
    }
    if(String(numero) === numInvertido){
      return 'Es capicua';
    }
  }
  return 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nuevaCadena = cadena.replace(/a/g,"");
  nuevaCadena = nuevaCadena.replace(/b/g,"");
  nuevaCadena = nuevaCadena.replace(/c/g,"");
  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  /*
  var aux = '';
  for(var i = 0; i < arr.length - 1; i++){
    if(arr[i].length > arr[i+1].length){
      aux = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = aux;
    }
  }
  */
 // Algoritmo de Ordenacion por insercion (poco eficiente), trabaja analizando de forma secuencial cada elemento para 
 // trasladarlo a su posicion correcta dentro del conjunto desplazando al resto.
  for (var i = 1; i < arr.length; i++) {
    aux = i;
    actual = arr[i];
    while (aux > 0 && arr[aux - 1].length > actual.length) {
      arr[aux] = arr[aux - 1];
      aux--;
    }
    arr[aux] = actual;
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  var nuevoArreglo = [];
  for(var i = 0; i < arreglo1.length; i ++){
    for (var j = 0; j < arreglo2.length; j ++){
      if(arreglo1[i] === arreglo2[j]){
        nuevoArreglo.push(arreglo2[j]);
      }
    }
  }
  return nuevoArreglo;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};


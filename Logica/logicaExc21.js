// Exc 21

document.write("Exercicio 21" + "<br>");

var numArray = [];
var x = 0;
var y = 0;
var soma = 0;

for (0; x < 3; x++) {
    var numeros = prompt("Digite um numero");
    numArray[numArray.length] = numeros;    
}

document.write("Quantidade de numeros na array: " + numArray.length + "<br>");

for (0; y < numArray.length; y++) {
    soma = soma + parseInt(numArray[y]);
}

document.write("Soma dos numeros da array: " + soma + "<br>");





// Exc 23

var tabuada = prompt("Escolha o numero para tabuada: ")
document.write("Exc 23: tabuada de " + tabuada + "<br>");


for (var index = 0; index < 11; index++) {
    var element = index * parseInt(tabuada);
    document.write(index + " * " + tabuada + " = " + element + "<br>");
}
// Exc 24

var tabuada = 0;
var element = 0;
document.write("Exc 24: Tabela de tabuada" + "<br>");

for (var tabuada = 0; tabuada < 11; tabuada++) {
    document.write("Tabuada do: " + tabuada + "<br>");
    
    for (var index = 0; index < 11; index++) {
        var element = index * tabuada;
        document.write(index + " * " + tabuada + " = " + element + " | " + "<br>");
    }
    
    
}

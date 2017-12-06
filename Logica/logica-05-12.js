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


// Exc 22

document.write("Exercicio 22" + "<br>");

var par = 0;

while (par < 50) {
    if (par % 2 == 0) {
        
    } else if (par % 2 == 1) {
        document.write("Numero impar: " + par + "<br>");
    }

    par++;
}

// Exc 23

var tabuada = prompt("Escolha o numero para tabuada: ")
document.write("tabuada de " + tabuada + "<br>");


for (var index = 0; index < 11; index++) {
    var element = index * parseInt(tabuada);
    document.write(index + " * " + tabuada + " = " + element + "<br>");
}

// Exc 24



// Exc 25

// function bool () {
    
//     var o = document.createElement("select");
//     o.setAttribute("id", "my");
//     document.body.appendChild(o);            
//     var o1 = document.createElement("option");
//     var t1 = document.createTextNode("Sim");
//     o1.appendChild(t1);
//     var o2 = document.createElement("option");
//     var t2 = document.createTextNode("Não");
//     o2.appendChild(t2);
//     document.getElementById("my").appendChild(o1);
//     document.getElementById("my").appendChild(o2);

// }

// function sex () {
        
//     var s = document.createElement("select");
//     s.setAttribute("id", "mysex");
//     document.body.appendChild(s);            
//     var s1 = document.createElement("option");
//     var f = document.createTextNode("Feminino");
//     s1.appendChild(f);
//     var s2 = document.createElement("option");
//     var m = document.createTextNode("Masculino");
//     s2.appendChild(m);
//     document.getElementById("mysex").appendChild(s1);
//     document.getElementById("mysex").appendChild(s2);
// }

// var pessoas = [[],[]];

// for (var index = 0; index < 2; index++) {
//     var sex = sex();
//     var bool = bool();
//     pessoas[[pessoas.length],[index]] = sex;
//     pessoas[[index],[pessoas.length]] = bool;   
    
// }

class resposta {
    constructor(resp, sex) {
        this.resp = resp;
        this.sex = sex;
    }
}

var p1 = new resposta("Não", "Masculino");
var p2 = new resposta("Não", "Feminino");
var p3 = new resposta("Não", "Feminino");
var p4 = new resposta("Sim", "Feminino");
var p5 = new resposta("Não", "Masculino");
var p6 = new resposta("Sim", "Masculino");
var p7 = new resposta("Não", "Feminino");
var p8 = new resposta("Sim", "Feminino");
var p9 = new resposta("Sim", "Feminino");
var p10 = new resposta("Sim", "Masculino");

var não = 0;
var sim = 0;
var m = 0;
var f = 0;
var sf = 0;
var nf = 0;
var sm = 0;
var nm = 0;

for (var index = 1; index < 3; index++) {
    if (p[index].resp == "Não") {
        não = não + 1;
    } else {
        sim = sim + 1;
    }

    if (p[index].sex == "Feminino") {
        f = f + 1;
    } else {
        m = m + 1;
    }
    
    if (p[index].resp == "Sim" && p[index].sex == "Feminino") {
        sf = sf + 1;
    } else if (p[index].resp == "Não" && p[index].sex == "Feminino") {
        nf = nf + 1;
    } else if (p[index].resp == "Sim" && p[index].sex == "Masculino") {
        sm = sm + 1;
    } else if (p[index].resp == "Não" && p[index].sex == "Masculino") {
        nm = nm + 1;
    }
}

function perc (m, nm) {
    return nm/m
}

document.write("Número de pessoas que responderam sim: " + sim) + "<br>";

document.write("Número de pessoas que responderam não: " + não + "<br>");

document.write("Mulheres que responderam sim: " + sf + "<br>");

document.write("% de homens que responderam não dentre todos os homens: " + perc(m, nm) + "<br>");

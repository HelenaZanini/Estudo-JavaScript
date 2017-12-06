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

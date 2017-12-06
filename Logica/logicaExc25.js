// Exc 25

class resposta {
    constructor (gender, bool) {
        this.gender = gender;
        this.bool = bool;
    }
}

var resp = [];

var resp1 = new resposta(prompt("Qual seu genero"), prompt("Sim ou Não?"));
resp.push(resp1);
var resp2 = new resposta(prompt("Qual seu genero"), prompt("Sim ou Não?"));
resp.push(resp2);
var resp3 = new resposta(prompt("Qual seu genero"), prompt("Sim ou Não?"));
resp.push(resp3);
var resp4 = new resposta(prompt("Qual seu genero"), prompt("Sim ou Não?"));
resp.push(resp4);
var resp5 = new resposta(prompt("Qual seu genero"), prompt("Sim ou Não?"));
resp.push(resp5);
var resp6 = new resposta(prompt("Qual seu genero"), prompt("Sim ou Não?"));
resp.push(resp6);
var resp7 = new resposta(prompt("Qual seu genero"), prompt("Sim ou Não?"));
resp.push(resp7);
var resp8 = new resposta(prompt("Qual seu genero"), prompt("Sim ou Não?"));
resp.push(resp8);

var não = 0;
var sim = 0;
var fem = 0;
var mas = 0;
var fs = 0;
var fn = 0;
var ms = 0;
var mn = 0;

for (var index = 0; index < resp.length; index++) {
    
    if (resp[index].bool == "Não") {
        não = não + 1;         
    } else if (resp[index].bool == "Sim") {
        sim = sim + 1;        
    }   
    
    if (resp[index].gender == "Feminino") {
        fem = fem + 1;
    } else if (resp[index].gender == "Masculino") {
        mas = mas + 1;        
    }
    
    if (resp[index].gender == "Feminino" && resp[index].bool == "Sim") {
        fs = fs + 1;
    } else if (resp[index].gender == "Feminino" && resp[index].bool == "Não") {
        fn = fn + 1;
    } else if (resp[index].gender == "Masculino" && resp[index].bool == "Sim") {
        ms = ms + 1;
    } else if (resp[index].gender == "Masculino" && resp[index].bool == "Não") {
        mn = mn + 1;
    }
}

function perc (mas, mn) {
    return mn/mas;
}

document.write("Quantidade de pessoas que responderam sim: " + sim + "<br>");
document.write("Quantidade de pessoas que responderam não: " + não) + "<br>";
document.write("Quantidade de mulheres que responderam sim: " + fs) + "<br>";
document.write("Percentagem de homens que responderam não: " + perc(mas, mn));
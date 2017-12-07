var resp = 0;

function parametros () {
    
    resp = document.getElementById('Q').value;
    
    switch (parseInt(resp)) {
        case 1: 
            exc1();
            break;
        case 2: 
            exc2();
            break;
        case 3: 
            exc3();
            break;
        case 4: 
            exc4();
            break;
        case 5: 
            exc5();
            break;
        case 6: 
            exc6();
            break;
        case 7: 
            exc7();
            break;
        case 8: 
            exc8();
            break;
        case 9: 
            exc9();
            break;
        case 10: 
            exc10();
            break;
        case 11: 
            exc11();
            break;
        case 12: 
            exc12();
            break;
        case 13: 
            exc13();
            break;
        case 14: 
            exc14();
            break;
        case 15: 
            exc15();
            break;
        case 16: 
            exc16();
            break;
        case 17: 
            exc17();
            break;
        case 18: 
            exc18();
            break;
        case 19: 
            exc19();
            break;
        case 20: 
            exc20();
            break;
        case 21: 
            exc21();
            break;
        case 22: 
            exc22();
            break;
        case 23: 
            exc23();
            break;
        case 24: 
            exc24();
            break;
        case 25: 
            exc25();
            break;
        case 26: 
            exc26();
            break;
        case 27: 
            exc27();
            break;
        case 28: 
            exc28();
            break;
        default:
            alert("Excercicio não encontrado :(")
            break;            
    }
}

// function reload () {
//     location.reload();
    
// }

// Exc 1

function exc1 () {
    var data = parseInt(prompt("Quantos anos voce tem?"));
    
    var dataM = data * 12;
    var dataD = data * 365.2;
    var dataH = data * (365.2*24);
    var dataMin = data * (365.2*24*60);
    
    document.write("Sua idade em meses é: " + dataM + " meses" + "<br>" + "Sua idade em dias é: " + dataD + 
    " dias" + "<br>" + "Sua idade em horas é: " + dataH + " horas" + "<br>" + "Sua idade em minutos é: " + dataMin + " minutos");
}


// Exc 2

function exc2 () {
    var anoNasc = parseInt(prompt("Digite o ano que voce nasceu que vou calcular sua idade"));
    var data = new Date();
    var anoHoje = data.getFullYear();

    var idade = anoHoje - anoNasc;
    var semana = idade * 52;

    document.write("Você tem: " + idade + " anos, ou: " + semana + " semanas")
}

// Exc 3

function exc3 () {
    var num = parseInt(prompt("Digite um número que vou dobra-lo"));
    
    num = num * 2;

    alert("O dobro de seu número é: " + num);
}

// Exc 4

function exc4 () {
    var nome = prompt("Vamos calcular seu IMC? Qual seu nome?");
    var peso = parseInt(prompt("Agora seu peso"));
    var altura = parseInt(prompt("Por ultimo, a sua altura em cm"));

    function imc (peso, altura) {
        return (peso/(Math.pow((altura/100),2)))
    }

    alert(nome + ", Seu IMC" + " é: " + imc(peso, altura));

}

// Exc 5

function exc5 () {
    var medidaCm = parseInt(prompt("Digite uma medida em cm que vou converte-la para polegadas"));

    var medidaPol = medidaCm / 2.5;

    alert("Sua medida em polegadas é: " + medidaPol);
}

// Exc 6

function exc6 () {
    var medidaPol = parseInt(prompt("Digite uma medida em polegadas que vou converte-la para centimetros"));

    var medidaCm = medidaPol * 2.5;

    alert("Sua medida em centimetros é: " + medidaCm);
}

// Exc 7

function exc7 () {
    var nome = prompt("Qual seu nome?");
    var cargo = prompt("Agora seu cargo");
    var salario = parseInt(prompt("Por ultimo, seu salario"));

    function aumentoSalario (salario) {
        salario = salario + salario * 0.1;
        return salario
    }

    alert(nome + ", cargo: " + cargo + " , seu salario aumentou para: " + aumentoSalario(salario) + " :)");

}

// Exc 8


// Exc 9


// Exc 10


// Exc 11


// Exc 12


// Exc 13


// Exc 14


// Exc 15


// Exc 16


// Exc 17


// Exc 18


// Exc 19


// Exc 20


// Exc 21

function exc21 () {
    
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



}    

// Exc 22

function exc22 () {
        
    document.write("Exercicio 22" + "<br>");

    var par = 0;

    while (par < 50) {
        if (par % 2 == 0) {
            
        } else if (par % 2 == 1) {
            document.write("Numero impar: " + par + " | ");
        }

        par++;
    }
}

// Exc 23


function exc23 () {
    
    var tabuada = prompt("Escolha o numero para tabuada: ")
    document.write("Exc 23: tabuada de " + tabuada + "<br>");


    for (var index = 0; index < 11; index++) {
        var element = index * parseInt(tabuada);
        document.write(index + " * " + tabuada + " = " + element + "<br>");
    }
}

// Exc 24

function exc24 () {
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
 
}

// Exc 25

function exc25 () {

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
}
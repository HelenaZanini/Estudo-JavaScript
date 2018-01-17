var resp = 0;
var questões = [
    "Exc 1: Faça um programa que receba a idade de uma pessoa em anos e imprima essa idade em: Meses, Dias, Horas, Minutos.",

    "Exc 2: Faça um programa que receba o ano de nascimento de uma pessoa e o ano atual. Calcule e imprima:" + "<br>"
    + "a. A id ade dessa pessoa" + "<br>" + "b. Essa idade convertida em semana",

    "Exc 3: Faça um programa que receba um número e exiba o seu dobro.",

    "Exc 4: Faça um programa que receba o nome, o peso e a altura de uma pessoa. Calcule e imprima o nome e o IMC dessa pessoa. (IMC = peso/altura2).",

    "Exc 5: Faça um programa que receba a medida em centímetros e exiba esse número em polegadas. OBS: Uma polegada equivale a 2.5 centímetros.",

    "Exc 6: Faça um programa que receba a medida em polegadas e exiba esse número em centímetros.",

    "Exc 7: Faça um programa que receba o nome, cargo e salário de um funcionário. Calcule o salário acrescido de 10%. Ao final exiba o nome, o cargo e o novo salário desse funcionário.",

    "Exc 8: Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de APROVADO para média superior ou igual a 7,0 ou a mensagem de REPROVADO. ",

    "Exc 9: Uma empresa decide dar aumento de 30% aos funcionários cujo salário é inferior a 500 reais. Escreva um programa que receba o salário de um funcionário e imprima o valor do salário reajustado ou uma mensagem caso o funcionário não tenha direito a aumento",
    
    "Exc 10: Faça um programa que receba um número inteiro do usuário e informe se este número é positivo ou negativo.",

    "Exc 11: Faça um programa que receba um número do usuário e informe se este número é par ou ímpar.",

    "Exc 12: Faça um programa que receba um número de usuário e exiba este número, apenas se for par.",
    
    "Exc 13: Faça um programa que receba o preço de um produto e o seu código de origem e imprima a sua procedência, utilizando uma estrutura IF sem o ELSE, para cada item abaixo.",

    "Exc 14: Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0. ",

    "Exc 15: Uma empresa decide dar aumento aos funcionários de acordo com o seu cargo: Produção = 6,5%; Administrativo = 7,5%; Diretoria = 12%.",
    
    "Exc 16: Faça um programa que receba um número de usuário e exiba este número, apenas se for par. Caso contrário informe apenas “DIGITE APENAS NÚMEROS PARES”",

    "Exc 17: Faça um programa que receba a idade de uma pessoa e classifique usando o seguinte critério: 0 a 2 anos = Recém-Nascido; 3 a 11 anos = Criança; 12 a 19 anos = Adolescente; 20 a 55 anos = Adulto; Acima de 55 anos = Idoso",

    "Exc 18: Faça um programa que receba o nome, salário e código correspondente ao cargo do funcionário e imprima o seu nome, salário, código, cargo, Percentual de aumento e salário com aumento de acordo com o percentual da tabela abaixo:",
    
    "Exc 19:",

    "Exc 20:",

    "Exc 21:",
    
    "Exc 22:",

    "Exc 23:",

    "Exc 24:",
    
    "Exc 25:",

    "Exc 26:",

    "Exc 27:",

]

function questao () {
    
    var quest = document.getElementById("Seleção").value;

    var exc = questões[quest - 1]; 

    document.getElementById("Questão").innerHTML = exc;

    console.log(exc); 

}

function respostas () {
    
    resp = document.getElementById('Seleção').value;
    
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

function exc1 () {
    var data = parseInt(prompt("Quantos anos voce tem?"));
    
    var dataM = data * 12;
    var dataD = data * 365.2;
    var dataH = data * (365.2*24);
    var dataMin = data * (365.2*24*60);
    
    document.write("Sua idade em meses é: " + dataM + " meses" + "<br>" + "Sua idade em dias é: " + dataD + 
    " dias" + "<br>" + "Sua idade em horas é: " + dataH + " horas" + "<br>" + "Sua idade em minutos é: " + dataMin + " minutos");
}

function exc2 () {
    var anoNasc = parseInt(prompt("Digite o ano que voce nasceu que vou calcular sua idade"));
    var data = new Date();
    var anoHoje = data.getFullYear();

    var idade = anoHoje - anoNasc;
    var semana = idade * 52;

    document.write("Você tem: " + idade + " anos, ou: " + semana + " semanas")
}

function exc3 () {
    var num = parseInt(prompt("Digite um número que vou dobra-lo"));
    
    num = num * 2;

    alert("O dobro de seu número é: " + num);
}

function exc4 () {
    var nome = prompt("Vamos calcular seu IMC? Qual seu nome?");
    var peso = parseInt(prompt("Agora seu peso"));
    var altura = parseInt(prompt("Por ultimo, a sua altura em cm"));

    function imc (peso, altura) {
        return (peso/(Math.pow((altura/100),2)))
    }

    alert(nome + ", Seu IMC" + " é: " + imc(peso, altura));

}

function exc5 () {
    var medidaCm = parseInt(prompt("Digite uma medida em cm que vou converte-la para polegadas"));

    var medidaPol = medidaCm / 2.5;

    alert("Sua medida em polegadas é: " + medidaPol);
}

function exc6 () {
    var medidaPol = parseInt(prompt("Digite uma medida em polegadas que vou converte-la para centimetros"));

    var medidaCm = medidaPol * 2.5;

    alert("Sua medida em centimetros é: " + medidaCm);
}

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

function exc8 () {
    var notas = [];
    var mes = ["Março","Abril","Maio","Junho"];

    for (let index = 0; mes.length; index++) {

        notas.push(parseInt(prompt("Digite a nota do mês de " + mes[index])));
    }

    var soma = 0;

    for (let index = 0; index < notas.length; index++) {
        soma = soma + notas[index];
    }

    var media = soma/notas.length;
    
    if (media < 7) {
        document.write("Nota: " + media + " é abaixo da média, você está reprovado");    
    } else {
        document.write("Nota: " + media + " é acima da média, você está aprovado");
    }
        

}

function exc9 () {

    var salario = parseInt(prompt("Qual é o seu salario mensal?"));

    if (salario < 500) {

        salario = salario + salario*0.3;

        alert("Parabens, seu salario foi resjustado para: " + salario);
    } else {
        alert("Seu salario continua o mesmo")
    }
    
}

function exc10 () {
    
    var num = parseInt(prompt("Digite um numero que vou adivinhar se é positivo ou negativo"));
    
    if (num < 0) {
        alert("O numero: " + num + " é negativo");
    } else {
        alert("O numero: " + num + " é positivo");
    }

}

function exc11 () {
    
    var num = parseInt(prompt("Digite um numero que vou adivinhar se é par ou impar"));
    
    if (num%2 == 0) {
        alert("O numero: " + num + " é par");
    } else {
        alert("O numero: " + num + " é impar");
    }

}

function exc12 () {
    
    var num = parseInt(prompt("Digite um numero que vou exibir se for par"));
    
    if (num%2 == 0) {
        alert("O numero: " + num + " é par");
    } 

}

function exc13 () {
    
    var preço = parseInt(prompt("Digite o preço do produto"));
    var cod = parseInt(prompt("Digite o código de origem de 1 a 30"));
    
    if (cod < 1 || cod > 30) {
        
        alert("Codigo de origem fora do padrão");    
        
    } 

    if (cod == 1) {
        alert("Codigo de origem do Sul");    
    }

    if (cod == 2) {
        alert("Codigo de origem do Norte");    
    }

    if (cod == 3) {
        alert("Codigo de origem do Leste");    
    }

    if (cod == 4) {
        alert("Codigo de origem do Oeste");    
    }

    if (cod == 5 || cod == 6) {
        alert("Codigo de origem do Nordeste");    
    }

    if (cod >= 7 && cod <= 9) {
        alert("Codigo de origem do Sudeste");    
    }

    if (cod >= 10 && cod <= 20) {
        alert("Codigo de origem do Centro-oeste");    
    }

    if (cod >= 21 && cod <= 30) {
        alert("Codigo de origem indefinido");    
    }

}

function exc14 () {
    var notas = [];
    var mes = ["Março","Abril","Maio","Junho"];

    for (let index = 0; index < mes.length; index++) {

        notas.push(parseInt(prompt("Digite a nota do mês de " + mes[index])));
    }

    var soma = 0;

    for (let index = 0; index < notas.length; index++) {
        soma = soma + notas[index];
    }

    var media = soma/notas.length;
    
    if (media >= 7) {
        document.write("Nota: " + media + " é acima da média, você está aprovado");    
    } else if (media < 7 && media >= 5) {
        document.write("Nota: " + media + " é abaixo da média, mas você ainda tem chance, está de recuperação");
    } else {
        document.write("Nota: " + media + " é abaixo da média, você está reprovado");
    }
        

}

function exc15 () {
    var cargo = prompt("Qual seu cargo: Produção; Diretoria ou Administrativo");
    var salario = parseInt(prompt("Digite seu saalrio anual"));   

    if (cargo == "Produção") {
        salario = salario + salario * 0.065;
    } else if (cargo == "Diretoria") {
        salario = salario + salario * 0.12;
    } else if (cargo == "Administrativo") {
        salario = salario + salario * 0.075;
    }

    alert("Seu salario aumentou! Agora está em: " + salario + " anual");
}

function exc16 () {
    var num = parseInt(prompt("Digite numero de usuarios do programa"));   
    
    if (num % 2 == 0) {
        alert("O numero de usuarios é: " + num);
    } else {
        alert("Digite apenas numeros pares");
    }

}

function exc17 () {
    
    var idade = parseInt(prompt("Digite o código de origem de 1 a 30"));
    
    if (idade == 0 && idade <= 2) {
        alert("É um Recém-Nascido");    
      
    } else if (idade >= 3 && idade <= 11) {
        alert("É um Criança");    
      
    } else if (idade >= 12 && idade <= 19) {
        alert("É um Adolescente");    
      
    } else if (idade >= 20 && idade <= 55) {
        alert("É um Adulto");    
      
    } else if (idade > 55 ) {
        alert("É um Idoso");    
      
    } 

}

// Exc 19

function exc19 () {
    
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

// Exc 20

function exc20 () {
        
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

// Exc 21


function exc21 () {
    
    var tabuada = prompt("Escolha o numero para tabuada: ")
    document.write("Exc 23: tabuada de " + tabuada + "<br>");


    for (var index = 0; index < 11; index++) {
        var element = index * parseInt(tabuada);
        document.write(index + " * " + tabuada + " = " + element + "<br>");
    }
}

// Exc 22

function exc22 () {
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

// Exc 23

function exc23 () {

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
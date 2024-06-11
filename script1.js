const botao = document.getElementById("btnClique")

botao.addEventListener("click", fnAntecessor)

function fnAntecessor(){

        var x = Number(window.prompt('Digite um número?'));
        var antecessor = Number(x--);
        window.alert(`Seu antecessor é ${x}`);
}

const dobro = document.getElementById("btnCliqueD")
dobro.addEventListener("click", fnDobro)

function fnDobro(){
    var num = prompt('indique um número!');
    const dobro = (num*2);
    alert('O dobro do número é:'+dobro);
}
const viveu = document.getElementById("btnCliqueM")
viveu.addEventListener("click", fnHora)

function fnHora(){
    var idade = prompt (' Quantos anos você tem?');
    var hora = (idade*8760);
    alert('você viveu ' + hora +' horas');
}
const viajou = document.getElementById("btnCliqueV")
viajou.addEventListener("click", fnViajou)

function fnViajou(){
    var horas = prompt('quantas horas voce viajou?');
    var dia = (horas/24);
    alert('voce viajou ' + dia +' dias');
}
const nota = document.getElementById("btnCliqueA")
nota.addEventListener("click", fnMedia)

function fnMedia(){
    var nota1 = Number(prompt('Indique uma nota!'));
    var nota2 = Number(prompt('Indique uma segunda nota!'));
    const media = (nota1+nota2)/2;
    alert('A média das notas é: ' + media);
}

const comissao = document.getElementById("btnCliqueC")
comissao.addEventListener("click", fnComissao)
function fnComissao(){
    var valorConta=Number(prompt("Quanto deu a conta"));
    var desconto = valorConta*0.1;
    alert("A comissão do garçom deu R$ "+ desconto +"reais");
}

const dias = document.getElementById("btnCliqueS")
dias.addEventListener("click", fndias)
function fndias(){

var anos = Number(prompt('informe sua idade em anos:'));
var meses = Number(prompt('informe sua idade em meses:'));
var dias = Number(prompt('informe sua idade em dias:'));
var calculo = Number((anos * 365)+(meses * 30) + (dias));
alert(" sua idade em dias é:"  +calculo+ "");

}

const retangulo = document.getElementById("btnCliqueX")
retangulo.addEventListener("click", fnretangulo)
function fnretangulo(){
    var x = Number(window.prompt('Digite a base do retângulo:'));
        var y = Number(window.prompt('Digite a altura do retângulo:'));
        var calculo = Number(x * y);
        window.alert(`A área desse retângulo é: ${calculo}`);
}
const eleitores = document.getElementById("btnCliqueQ")
eleitores.addEventListener("click", fneleitores)
function fneleitores(){
        var eleitores = Number(window.prompt('Digite o número total de eleitores:'));
        var brancos = Number(window.prompt('Digite o número de votos brancos:'));
        var nulos = Number(window.prompt('Digite o número de votos nulos:'));
        var validos = Number(window.prompt('Digite o número de votos válidos:'));
        var perc_validos = Number(100*(validos/eleitores));
        var perc_nulos = Number(100*(nulos/eleitores));
        var perc_brancos = Number(100*(brancos/eleitores));
        window.alert(`O percentual de votos válidos em relação ao total de eleitores é: ${perc_validos}`);
        window.alert(`O percentual de votos nulos em relação ao total de eleitores é: ${perc_nulos}`);
        window.alert(`O percentual de votos brancos em relação ao total de eleitores é: ${perc_brancos}`);
}
const imc = document.getElementById("btnCliqueW")
imc.addEventListener("click", fnimc)
function fnimc(){
    var altura = (Number(prompt('Qual sua altura?(cm)'))/100);
var peso = Number(prompt('Qual seu peso?(kg)'));
var imc = peso / altura **2;
if (imc < 20.7){
    alert('Você está abaixo do peso!')
}else if (imc < 26.4){
    alert('Seu peso está ideal!')
}else if (imc < 27.8){
    alert('Seu peso está ideal!')
}else if (imc < 31.1){
    alert('Seu peso está ideal!')
}else if (imc > 31.2){
    alert('Seu peso está ideal!')
}
}
const salario = document.getElementById("btnCliqueE")
salario.addEventListener("click", fnsalario)
function fnsalario(){
    var salario = Number(window.prompt('Qual é seu salario?'));
        var perc_reaj = Number(window.prompt('Qual é o percentual de reajuste?'));
        var s = Number((perc_reaj/100)*salario);
        window.alert(`Seu novo salário é ${s.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
}
const carro = document.getElementById("btnCliqueU")
carro.addEventListener("click", fncarro)
function fncarro(){
    var valor1 = Number(prompt("digite o valor do carro"));
    var dest = 0.20;
    var dest2= 0.45;
    var calculo1 = valor1 + dest;
    var calculo2 = valor1 + dest2;
    var calculo3 = calculo1 + calculo2 + valor1;
    alert("o valor final do seu carro foi " +calculo3);
}
const revenda = document.getElementById("btnCliqueZ")
revenda.addEventListener("click", fnrevenda)
function fnrevenda(){
    let salarioFixo = Number(prompt("Digite o salário fixo: "));
  let comissao = Number(prompt("Digite o valor da comissão: "));
  let carro = Number(prompt("Digite quantos carros foram vendidos: "));
  let vendas = Number(prompt("Digite o total de vendas: "));

  let calcCom = carro * comissao;
  let calcV = vendas * 0.05 + salarioFixo;
  let CalcF = calcCom + calcV;
  alert("Salário Final é de: " + CalcF);
}

const impar = document.getElementById("btnCliqueÇ")
impar.addEventListener("click", fnimpar)
function fnimpar(){

    var num = document.getElementById("btnCliqueÇ").value;
    var int_num = Number(prompt("digite um numero: "));

    if (int_num%2 == 0)
    {
    alert("ESTE NÚMERO É PAR");
    }else{
    alert("ESTE NÚMERO É ÍMPAR");
    }
}
const numeros = document.getElementById("btnCliqueL")
numeros.addEventListener("click", fnnumeros)
function fnnumeros(){

        var resultado = parseInt(document.getElementById("btnCliqueL"));
        var numero = Number(prompt("Digite um numero"))
         

        if(numero > 100){

        alert(numero)
        } else {
           alert("0")
        }
        
    }
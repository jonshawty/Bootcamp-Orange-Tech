/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
    1- preço do etanol;
    2- preço da gasolina;
    3- o tipo do combustivel que está no seu carro;
    4- gasto medio de combustivel do carro por KM;
    5- distância em km da viagem

Imprima no console o valor que será gasto para realizar esta viagem
*/

const etanol = 3;
const gasolina = 5;
const combustivelUsado = "Etanol"; 
const gastoPorKm = 10;
const distanciaKM = 100;
const consumoPorKm = distanciaKM / gastoPorKm;
let valorGasto = 0;

if(combustivelUsado === "Etanol")
{
    valorGasto = consumoPorKm * etanol
    console.log('O valor gasto em etanol é de:' + valorGasto);
}else{
    valorGasto = consumoPorKm * gasolina
    console.log('O valor gasto em gasolina é de:' + valorGasto);
}




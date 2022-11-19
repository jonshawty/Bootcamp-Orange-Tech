//Faça um programa para calcular o valor de uma viagem.

//Você terá 3 variáveis. Sendo elas:
//1- preço do combustivel;
//2 - Gasto médio de combustivel do carro por KM;
//3 - Distância em KM da viagem;

const precoCombustivel = 5.12;
const kmPorLitros = 9;
const distanciaKM = 1003;

const litrosConsumidos = distanciaKM / kmPorLitros;
console.log(litrosConsumidos * precoCombustivel.toFixed(2)); //multiplicação direta não funciona o Tofixed

//ou

const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));
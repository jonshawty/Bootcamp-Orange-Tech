/*
2- Faça um algoritmo que calcule o IMC.

formula IMC =  peso / (altura * altura)

IMC em adultos Condição:

Abaixo de 18.5 - Abaixo do peso;
Entre 18.5 e 25 - Peso normal;
Entre 25 e 30 -  Acima do Peso;
Entre 30 e 40 - Obeso;
Acima de 40 - Obesidade grave. */

const peso = 71;
const altura = 1.67;

const IMC = peso / (altura * altura);

console.log(IMC.toFixed(2));

if(IMC < 18.5)
{
    console.log('Abaixo do peso');
}
else if(IMC >= 18.5 && IMC < 25)
{
    console.log('Peso normal');
}
else if(IMC >= 25 && IMC < 30)
{
    console.log('Acima do Peso');
}
else if(IMC >= 30 && IMC < 40)
{
    console.log('Obeso');
}
else
{
    console.log('Obesidade grave');
}

const {gets, print} = require('./funcoes-auxiliares');

const numerosSorteados = [];
/*
let maiorNumero = 0;

for (let i = 0; i <5; i++) {
   const numerosSorteado = gets();
   numerosSorteados.push(numerosSorteado);
    
}

for (let i = 0; i <numerosSorteados.length; i++) {
    if(numerosSorteados[i] > maiorNumero)
        {
            maiorNumero = numerosSorteados[i];
        }
}

print(maiorNumero);
*/

//simplificando o código

let maiorValorEncontrado = 0 
for (let i = 0; i <5; i++) 
{
    const numerosSorteado = gets();
    if(numerosSorteado > maiorValorEncontrado)
    {
        maiorValorEncontrado =  numerosSorteado;
    }
 }

 print(maiorValorEncontrado);
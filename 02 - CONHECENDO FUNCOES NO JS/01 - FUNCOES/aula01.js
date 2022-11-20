function SayMyName (name){
    console.log('Your name is ' + name);
}

SayMyName('pika');


function quadrado(valor)
{
    return valor * valor;
}

console.log(quadrado(10));

function incrementarJuros(valor, percentualJuros)
{
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100,10));
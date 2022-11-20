/* organizando código do imc */


function calcularIMC(peso, altura)
{
    return peso / (altura * altura);
}

function classificarIMC(IMC)
{
    if(IMC < 18.5)
    {
        return('Abaixo do peso');
    }
    else if(IMC >= 18.5 && IMC < 25)
    {
        return('Peso normal');
    }
    else if(IMC >= 25 && IMC < 30)
    {
        return('Acima do Peso');
    }
    else if(IMC >= 30 && IMC < 40)
    {
        return('Obeso');
    }
    else
    {
        return('Obesidade grave');
    }
}

function main()
{
    const peso = 65;
    const altura = 1.67;
    
    const IMC = calcularIMC(peso, altura);
    console.log(classificarIMC(IMC));
}

main();
/*
2- Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = PESO / ALTURA * ALTURA)
Instacie uma pessoa chamada josé que tenha 70kg de peso e 1.75 de algura e peça a josé para dizer seu IMC;
*/ 
class pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura)
    {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    } 

    calculaIMC()
    {
        return (this.peso / (this.altura * this.altura)).toFixed(2);
    }

    classificarIMC()
    {
        const IMC = this.calculaIMC();
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
}

const jose = new pessoa('josé', 65 , 1.75);
console.log(jose);
console.log('IMC: ' + jose.calculaIMC());
console.log(jose.classificarIMC());
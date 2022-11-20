/*
1- Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por Kilômetro rodado.
Crie um método que dado a quantidade de KM e o preço do combustivel nos dê o valor gasto
em reais para realizar este percurso.
*/


class carro{
    marca;
    cor;
    KmporLitro;

    constructor (marca, cor, KmporLitro) {
        this.marca = marca;
        this.cor = cor;
        this.KmporLitro = KmporLitro;
    }

    calculaValorGasto(distanciaEmKM, valorCombustivel){
        
        return (distanciaEmKM * this.KmporLitro * valorCombustivel).toFixed(2);
    }


}

const gol = new carro('volks', 'preto', 1/12);
console.log(gol);
console.log(gol.calculaValorGasto(180, 5.16))

const supra = new carro('Toyota', 'branco', 1/4);
console.log(supra);
console.log(supra.calculaValorGasto(180, 5.16))
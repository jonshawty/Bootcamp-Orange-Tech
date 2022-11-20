/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
ultilize os codigos da tabela a seguir para ler qual a condição do pagamento escolhida para efeturar o calculo adequado;

Código Condição de pagamento;
- À vísta Débito recebe 10% de desconto;
- À vísta no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal da etiqueta sem juros;
- Acima de duas vezes o preço normal da etiqueta mais juros de 10% */

const precoEtiqueta = 10;
const metodoPagamento = 'duas'; 



if(metodoPagamento == 'debito')
{
    const debito = precoEtiqueta - precoEtiqueta * (10/100);
    console.log('preço final com desconto de 10% é de ' + debito + 'R$');
}
else if(metodoPagamento == 'dinheiro')
{
    const dinheiro = precoEtiqueta - precoEtiqueta * (20/100);
    console.log('preço final com desconto de 20% é de ' + dinheiropix + 'R$');
}
else if(metodoPagamento == 'pix')
{
    const pix = precoEtiqueta - precoEtiqueta * (15/100);
    console.log('preço final com desconto de 20% é de ' + pix + 'R$');
}
else if(metodoPagamento == 'duas')
{
    const ateDuas = precoEtiqueta;
    console.log('preço final dividido em 2x é de ' + ateDuas + 'R$');
}
else if(metodoPagamento == 'maisVezes')
{
    const acimaDeDuas = precoEtiqueta + precoEtiqueta * (10/100);
    console.log('preço final com juros de 10% é de ' + acimaDeDuas + 'R$');
}
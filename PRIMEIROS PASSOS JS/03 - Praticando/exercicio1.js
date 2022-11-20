/*
1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima sua média e a sua classificação conforme a tabela a baixo.

média = (nota1 + nota2 + nota3) / 3;

Classificação:
Média menor que 5, reprovação;
Média entre 5 e 7, recuperação;
Média acima de 7, passou de semestre;*/

const nota1 = 9;
const nota2 = 7;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;

if(media < 5)
{
    console.log('Aluno com a média ' +media.toFixed(2)+ ' foi reprovado');
}else if (media >= 5 && media <= 7)
{
    console.log('Aluno com a média ' +media.toFixed(2)+ ' está de recuperação');
}else
{
    console.log('Aluno com a média ' +media.toFixed(2)+ ' passou para o proximo semestre');
}

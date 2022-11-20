// const jonata = {
//     nome: 'Jonata Horsth',
//     idade: 21
// };

// jonata.altura = 1.67;

// delete  jonata.nome;

// console.log(jonata.nome);
// console.log(jonata.idade);

// console.log(jonata);

class pessoa {
     nome;
     idade;

     constructor(nome, idade)
     {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
     }

     descrever() {
        
       console.log(`Meu nome é  ${this.nome}; ${this.idade}`);
     }
   
}

const jonata = new pessoa('jonata', 25);
console.log(jonata.descrever());

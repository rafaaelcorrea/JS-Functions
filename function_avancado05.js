// IIFE - FUNÇÕES IMEDIATAS ( “IMMEDIATLEY-INVOKED FUNCTION EXPRESSION”).
/* Devemos usa-las quando queremos encapsular uma parte do código. Desejamos isso quando não queremos "sujar" o escopo global, evitar o confilito com variáveis que possuem os mesmos nome e funções.

Tudo oq ue for declarado dentro de uma IIFE, só pode ser acessado internamente, ou seja, nenhuam ação do escopo global pode acessar os dados da mesma.*/

// Sintaxe padrão :
//Nota: sempre devemos começar e encerrar a sintaxe de uma IIFE com o () .

/*(function(){

})
();*/

// Exemplo:
/* Escopo global */
const sobreNome ='Lemos';

/*Escopo da IIFE:*/
(function (idade, peso, altura) {

  const sobreNome= 'Corrêa';
  function criaNome(nome) {
    return `${nome} ${sobreNome}`;
  }

  function falaNome() {
    console.log(criaNome('Rafael'));
  }

  falaNome();
  console.log(idade,peso,altura)
})
(36,80,1.73);

//FACTORY FUNCTIONS:
// É apenas uma função que retorna um objeto. 
//Dessa forma, encapsulando o objeto dentro da função a manutenção do código será facil. Também tornamos os registros  de dados mais dinâmicos desse objeto, ou seja , podemos inserir vários dados dentro desse objeto chamando apenas a  função a qual ele se encontra inserido,porém em cada chamada  apenas  mudanmos os argumentos com os dados que queremos.

// 1º Exemplo: 
function criaPessoa(nome,sNome){ // criação da função e seus parâmetros

    return {  // Função retornando um objeto

        // Propriedades desse objeto. (nomeamos como valor dessa propriedades os parâmetros dessa função.  Quando a prop. e o parâmetro  possuem os mesmos nomes, podemos declarar o nome da propriedade dessa forma )
        nome, 
        sNome,
        //Propriedade que retorna uma outra função como o seu valor:
        falaDadosPessoais: function(assunto) { 
            return `${nome}  está falando sobre ${assunto}.`;
        }
    };
}

const pessoa1 = criaPessoa('Rafael', 'Corrêa');
console.log(pessoa1.falaDadosPessoais('JS'));
 
//2º Exemplo: 

function criarCelular(marca,modelo,bateria) {

  return {
        marca,
        modelo,
        bateria,
        contato: () => {
          return `Ligue para a nossa Central de Atendimento - 0800-55-777'`;
        }

    };

  }
const celular1 = criarCelular('Nokia','E-30','Lithium-3000');
console.log(celular1);

//FUNÇÕES CONSTRUTORAS - CONSTUCTIONS FUNCTIONS ://
// São tipo um "molde" que serve para gerar novos objetos.
// Diferença entre CONSTRUCTIONS FUNCTIONS entre FACTORY FUNCTIONS: é que na Factory você cria um objeto direto no return e na Contructions , instanciamos a mesma com o new em sua chamada. 
// Por questões de boas práticas, os nomes dessas funções devem começar letra maiúscula,ou seja, nos estilo Pascal Case. ( exemplo: UmDosTres, CriarCaixa).

// Exempçlo:

function MontadoraDeCarro(preco,modelo,ano,) {
  
  this.preco = preco, 
  this.modelo = modelo,
  this.ano = ano,
  this.ligarAlarme = () => {
      console.log("[ON] | [OFF]");
    }
  }

  const carro1 = new MontadoraDeCarro(60000,'X7','2022');
  console.log(carro1);

//FUNÇÃO RECURSIVA:
// É apenas uma função que chama ela própria de volta.
// A mesma é um tipo de laço de repetição , porém com um fim determninado como é feito em qualquer laço.

function contaNumero(num) {
  if(num >=10) {return};
  num++;
  console.log(num);
  contaNumero(num);
}

contaNumero(5);
//FUNÇÕES GERADORAS:
/* Servem para entregar os valores internos da função por parte, não tudo de uma vez.
São conhecidas como Lazy Evaluation (Avaliação preguiçosa). Dependendo do que formos fazer, isso pode ser bom para o código ganhar performance. 
Exemplo:
Na sintaxe, devemos sempre colocar depos da palavra function, o esterístico (*):
*/
function* funcaoGeradora(){
  // Yield é similar a um return
  yield 'valor1';
  yield 'valor2';
  yield 'valor3';

}

const g1 = funcaoGeradora();

/* Invés de fazermos vários console.logs (abaixo), podemos fazer um for que irá iterar a função geradora:
console.log(g1.next().value);
console.log(g1.next().value); // (Enquanto houver valor dentro da função, o método next() segue mostrando os mesmos )
console.log(g1.next().value);
console.log(g1.next().value);*/

for (let iterador of g1){
  console.log(iterador);
}

// 2º Exemplo:
//Delegando o conteúdo de uma função geradora para uma outra função geradora.

function* geradora1() {
  yield 'valor01';
  yield 'valor02';
  yield 'valor03';

}

function* geradora2() {
  yield* geradora1(); // Nesse yeld, colocamos o * nele, pois estamos retornando no mesmo  primeira a função geradora .
  // Agora. após o yeld que retorna a outra função, temos abaixo a continuidade dos valores dos yelds restantes. 
  yield 'valor04';
  yield 'valor05';
  yield 'valor06';
  yield 'valor07'; 
}

const g2 = geradora2();
for (let passador of g2){
  console.log(passador);
}

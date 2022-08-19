//Revisão em Objetos:

// Notações de ponto x notações de colchetes
// Formas diferentes de acessar o conteúdo do objeto

const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Corrêa',

}

const propriedade = 'nome';
// Notação de ponto:
console.log(pessoa.nome);

// Notação de colchetes:
console.log(pessoa[propriedade]);

// Essas duas podem ser utilizadas. Isso vai depender do que formos fazer no momento. Em contra-partida, se pudermos escolher,  então usamos o ponteramento que fica muito mais intuitivo. 

//========================

// Objeto literal x usando o construtor:
//  Objeto Literal:
const carro = {
    marca: 'VW',
    modelo: 'T-Cross',

}

// Usando o construtor de objetos :
const carro02 = new Object();

carro02.marca = 'BMW';
carro02.modelo = 'Zx';

console.log(carro02);

//========================

// Deletando uma propriedade :
delete carro02.marca;

console.log(carro02);

//========================

// Propriedades que tem como valor uma função:

const produtos = {

    nome: 'Caneta',
    marca: 'Bic',
    precoFornecedor: 0.75,
    calcPrecoVenda: precoFornecedor => {
          return precoFornecedor * 3 } , // <- Uma arrow functions como valor da função. 

}

console.log( produtos.calcPrecoVenda(produtos.precoFornecedor));

// Função construtora:

 function Produto (nome, marca, precoFornecedor ) {
    
    this.nome = nome;
    this.marca = marca;
    this.precoFornecedor = precoFornecedor;
    this.calcFinal = (precoFornecedor) => {return precoFornecedor * 3};

    Object.freeze(this); // Não deixa fazer nenhum tipo de modificação no objeto

 }
 const prod01 = new Produto('Alicate','Mondial', 3.00 );
 //prod01.calcFinal(precoFornecedor);

 delete prod01.nome; // Esse comando não pega por causa do Object Freeze

console.log(prod01);
//console.log(prod01.nome , prod01.marca , prod01.precoFornecedor , prod01.calcFinal(prod01.precoFornecedor));

//=================================

// Object.defineProperty():
// Com esse recurso, podemos configurar uma  qualquer propriedade  do nosso objeto.
// Obs.: se quisermos, também podemos criar as propriedades com esse recurso.
// Exemplo:

function ManipulaCss (ativaEstilo , propriedade ) {
    
    this.ativaEstilo = ativaEstilo,
    this.propriedade = propriedade ,

    Object.defineProperty(this, 'valor' , {
        enumerable : true,// mostra a chave 
        value: 'red', // valor 
        writable: true, // pode alterar 
        configurable: true, // cofigurável 

    })

}

const objCss =  new ManipulaCss('style','background-color');

console.log(objCss);

// Object.defineProperties():
// Com esse recurso, podemos configurar várias propriedades do nosso objeto
// Obs.: se quisermos, também podemos criar as propriedades com esse recurso.
// Exemplo:

function ManipulaHtml(nomeElemento , nomePropriedade, valorPropriedade) {

    this.nomeElemento = nomeElemento;

    Object.defineProperties(this, {

                nomePropriedade: {
                    enumerable : true,// mostra a chave 
                    value: nomePropriedade, // valor 
                    writable: true, // pode alterar 
                    configurable: true, // cofigurável 
                },

                valorPropriedade: {
                    enumerable : true,// mostra a chave 
                    value: valorPropriedade, // valor 
                    writable: true, // pode alterar 
                    configurable: true, // cofigurável 
                },

            });

}


const objHtml = new ManipulaHtml('div','class', 'container');

console.log(objHtml)

//===============================


// Getters and Setters:
// Get  pega o valor do momento e mostra. O Set seta/atribui o valor ou alguma característica.
// Protege os dados da propriedade , evitando que um tipo de dado inadequado seja colocado em tal propriedade.

function Produto ( nome , marca , valor ) {
    
    this.nome =  nome,
    this.marca = marca,

    Object.defineProperty(this, 'valor' , {

        enumerable : true,
        configurable: true, 

        get: () => { return valor; },
        set: (valorInputado) => {

           if (isNaN(valorInputado)){
             console.log(`Por favor, digite um valor númerico.`);
            }
            
            return console.log(valorInputado);

        }
})

}

// Alguns métodos de objetos:
// Copiando um objeto e colocando os dados do mesmo emoutro objeto (Usando o spread operator):

const listaNome = { nome: 'Carlos', nome02: 'Joana' };
const listaConvidados = {...listaNome };

console.log(listaNome);
console.log(listaConvidados);

//Vendo a descrição de uma propriedade:

const frutas = {frt01: 'maça', frt02: 'laranja' }

console.log(Object.getOwnPropertyDescriptor( frutas , 'frt01'));
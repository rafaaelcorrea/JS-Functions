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

// Vendo a descrição de uma propriedade - Object.getOwnPropertyDescriptor():

const frutas = {frt01: 'maça', frt02: 'laranja' }

console.log(Object.getOwnPropertyDescriptor( frutas , 'frt01'));

// Obtendo somente o nome das propriedades de um objeto  - Keys():
//Obs.: retorna um array com esses valores
const comanda = { mesa1:'Arroz' , mesa2:'Feijão', mesa3:'Pestico'};
console.log(Object.keys(comanda));

// Obtendo somente os valores das propriedades de um objeto - values():
// Retorna um array com esses valores
const pedido = { pd01:'alho' , pd02:'couve', pd03:'suco'};
console.log(Object.values(pedido));

// Método que pega cada  propriedade e o respectivo seu valor e armazena dentro de um array . - Entries() :
//Exemplo:

const loja = { bairro01:'P. Minguel' , bairro02:'Realengo', bairro03:'Bangu'};

for (let i of Object.entries(loja) ) {

    console.log(i);
}
//console.log(Object.entries(loja));

// Object Freeze- trava o objeto
// Não deixa realizar nenhum tipo de alteracao no objeto:
//Exemplo:

const prod = { nome:'Meia' , marca:'Adidas' , valor: 30}

Object.freeze(prod);

prod.nome='Sapato'; // Alteração impeddia pelo o freeze

console.log(prod.nome);

console.log(Object.getOwnPropertyDescriptor( frutas , 'frt01'));

/* Prototypes:

O JS é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição: protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções. 

Todos os objetos tem uma referência interna para um protótipo (_proto_) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS tentar encontrar este membro
de um objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.   


*/

/* Exemplificando prototype com função construtora:

Boa prática: defina propriedades dentro da função construtora e métodos sempre dentro do  prototype dessa construtora, pois dentro desses métodos se encontram lógicas/execuções e não dados como contém nas propriedades.
 
O prototype de um construtor define uma estrutura de membros (propriedades, métodos e etc ) que são compartilhados pelas instâncias desse construtor.
*/

/*Usando uma função Construtora - "Modela/gera os atributos". ( CLasse ): */
 
const Criapessoa = function (nome,sobrenome,dataNasc) {

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.dataNasc  = dataNasc; 
    //this.nomeCompleto = () => this.nome + '' + this.sobrenome;  <-- Não é uma boa prática colocar método dentro de uma função construtora 

}

// Instancia dos objetos
const p1 = new Criapessoa('Rafael','Lemos','27/06/1986' );

const p2 = new Criapessoa('Fernando','Lemos','13/04/1997'); 

// inserindo propriedades que são funções/métodos dentro do prototype da função construtora :
Criapessoa.prototype.nomeCompleto = () => { return "Nome completo" + this.nome + this.sobrenome ;}

Criapessoa.prototype.geraCpf = () => {

    let num1 , num2, num3, num4 ;

    num1 = Math.round(Math.random() * (999-100) + 100);
    num2 = Math.round(Math.random() * (999-100) + 100);
    num3 = Math.round(Math.random() * (999-100) + 100);
    num4 = Math.round(Math.random() * (99-1) + 1);
    
    return `CPF: ${num1}.${num2}.${num3}-${num4}` ;
   
     
}

// getPrototypeOf - Objetos literais como o do exemplo abaixo, herda um prototype do objeto padrão, o Object. 
const pessoas = {

    nome:'Carlos',
    sobrenome:'Corrêa'
}

// Como acessar prototypes
//Exemplo:
const moto = new Object();
carro.moto = 'ligaleve';
Object.getPrototypeOf(moto);

// setPrototypeOf -  Reaproveitando protoype de um objeto em um outro objeto:

const Produto01 =  ( nome, preco ) => {
    
    this.nome =  nome ;
    this.preco = preco ;

}

Produto01.prototype.percentAumento = function (percentual)  {
    
        return this.preco = this.preco + ( this.preco  *( percentual / 100 ));

    }

const prod1 = new Produto01( 'Samsung',1500);

prod1.percentAumento(50);

console.log(prod01);


const produto02 = {

    nome: 'Iphone',
    preco: 120,

};

Object.setPrototypeOf(produto02,  Produto01.prototype );

console.log(produto02.percentAumento(50));

 // Herança:
// São características de um objeto que são passada para um outro. 

function Item(nome,preco) {
    
    this.nome = nome;
    this.preco = preco;
}

Item.prototype.aumento = (quantia) =>{
    return this.preco += quantia;
 };

 Item.prototype.desconto = (quantia) => {
    return this.preco -= quantia;
 };

 
 function Item02 (nome, preco, cor) {
    Item.call(this, nome , preco) ; // com o méotodo call() Item02 herda as propriedades de Item
    this.cor = cor; // Propriedade específica dessa função construora. 
}

// Cria um objeto vazio  e dentro do mesmo esta configurado o prototype de Item. 
// Dessa forma, Item02 poderá usar o método do Item. 
Item02.prototype = Object.create(Item.prototype);

const item02 = new Item02 ('Camisa',26,'vermelha');

console.log(item02.aumento(50));
console.log(item02);

// Polimorfismo:


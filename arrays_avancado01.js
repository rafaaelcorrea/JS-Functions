/*  ARRAY (TÉCNICAS AVANÇADAS)
=============================== */

//DECLARANDO  UM ARRAY COMO UM CONSTRUTOR:
//Essa técnica também funciona em objetos etc.

const carrinhoCompras = new Array('pão','ovos','sapato', 'meia');

// CONVERTENDO UM ARRAY EM UAM STRING:
//Método Join(''). Ele converte o array para string.
const nome = ['Rafael', 'Lemos', 'Corrêa'];
const nome2 = nome.join('  '); //Devemos usar um espaço entre as aspas, para o resultado sair mais espaçado. Também se quisermos, podemos colocar qualquer carcactere que sairá tal no resultado. 
console.log(nome2);
 

// USANDO MAIS O MÉTODO SPLICE
//Deletando dados do array e mostrando quais dados foram deletados

const nomes = ['Rafael', 'Julia', 'Carlos'];
const neomesRemovidos = nomes.splice(0,1);
console.log(nomes,neomesRemovidos);


// USANDO O MÉTODO MAP - MAP():
// Ele cria um novo array apartir de um já existente. Nesse novo array podemos selecionar o que desejamos levar para dentro do mesmo. 
//Exemplo:

// Um Array que contém um objeto como valor de cada índice. 
const produtos = [
    { id: 1, nome:'Detergente',valor: 2.00, categoria: 'limpeza'},
    { id: 2, nome:'Pão',valor: 1.00, categoria: 'Alimentos'},
    { id: 3, nome:'Sabão em pó',valor: 5.00, categoria: 'limpeza'},
    { id: 4, nome:'Óleo de Soja',valor: 7.00, categoria: 'Alimentos'},
    { id: 5, nome:'Presunto',valor: 6.00, categoria: 'Alimentos'},
]

const nomeProduto = produtos.map(produto => produto.nome); // Aqui dentro do método map, possui uma  arrow functions , que faz o papel de uma função callback que pega o valor da propriedade do obejto que contém dentro do array precedente.

console.log(nomeProduto);

//  Alterando os dados que coletamos do array de origem no novo array:
const  numeros = [1,2,3,4,5];
const duplicandoNumeros = numeros.map( indice => indice * 2  );
console.log(duplicandoNumeros);

// 1.1) Somando os valores das propriedades "valor" com Map:
let somaValores02= 0;
const buscaDinamica = produtos.map(parametroObj => somaValores02 += parametroObj.valor ); // Aqui dentro do método map, possui uma  arrow functions , que faz o papel de uma função callback que pega o valor da propriedade do obejto que contém dentro do array precedente.
console.log(buscaDinamica[4]);

// 1.2) Somando os valores das propriedades "valor" sem Map: 
const novoArray = [];
 let somaValores = 0;
for (let i =0; i < produtos.length ; i++ ) {
    novoArray.push(somaValores += produtos[i].valor );
}

console.log(novoArray[4])

//=================================

// 2.1) Pegando os dados das propriedades nome e categoria , e juntando-os como se fossem uma só propriedade/mesclagem, usando o join.
// Com map ( complemento com o join ):
const buscaDinamica02 = produtos.map( function(paramteroObj02) {
    return [paramteroObj02.nome , paramteroObj02.categoria].join(" - ");
} ) ;
console.log(buscaDinamica02);

//2.2) A mesma coisa do exercício acima, só que sem Map ( complemento com o join ):
const novoArray02 = [];
for ( let iterador02 = 0 ; iterador02 < produtos.length ; iterador02++  ) {   

    novoArray02.push( [ produtos[iterador02].nome , produtos[iterador02].categoria ].join("-") );
}
console.log(novoArray02);

//==============================

// 3.1) Concatenando propriedades id e nome com Map ( sem mesclagem de propriedades)  :
const buscaDinamica03 = produtos.map( parametroObj03 => parametroObj03.id);
const buscaDinamica04 = produtos.map(parametroObj04 => parametroObj04.nome );

console.log(buscaDinamica03.concat(buscaDinamica04));

//3.2)
const novoArray03 = [];
const novoArray04 = [];
let iterador03 = 0;

while ( iterador03 < produtos.length ){

    iterador03++;

    novoArray03.push([ produtos[iterador03].id, produtos[iterador03].nome ]);
}

console.log(novoArray03);


/*for ( let iterador03 = 0 ;iterador03 < produtos.length ; iterador03++ ){


}
*/

/* 3º Exemplo - Alterando os dados que coletamos do array de origem no novo array:
const  numeros = [1,2,3,4,5];
const duplicandoNumeros = numeros.map( indice => indice * 2  );
console.log(duplicandoNumeros);
*/





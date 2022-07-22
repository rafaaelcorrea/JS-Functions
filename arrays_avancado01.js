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

// 2º Exemplo - Alterando os dados que coletamos do array de origem no novo array:
const  numeros = [1,2,3,4,5];
const duplicandoNumeros = numeros.map( indice => indice * 2  );
console.log(duplicandoNumeros);





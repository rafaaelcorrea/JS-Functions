const carrinho = [

    { id: '#789', nome:'Celular',valor: 4.000, categoria: 'Eletrônicos' },
    { id: '#150', nome:'Videogame',valor: 6.00000 , categoria: 'Eletrônicos' },
    { id: '#80', nome:'Sapato',valor: 5.00, categoria: 'Calçados'} ,
    { id: '#52', nome:'Biscoito',valor: 7.00, categoria: 'Alimentos' },
    { id: '#20', nome:'Carro',valor: 60.00000, categoria: 'Automóveis' },
];

// Usando o método filter(). 
// Ele filtra os valores do array . 

//Exemplo:
// 1.1) Fitra  com Filter somente onde a propriedade categoria, que esta cadastrada como "Eletrônicos" ou "Alimentos".
const  filtro = carrinho.filter( objOrigem => {

    return objOrigem.categoria === 'Eletrônicos' || objOrigem.categoria ==='Alimentos' ;
});

 console.log(filtro);

//1.2) Fazendo a mesma coisa, só que com um laço de repetição clássico:
const novoArray = [];
const obj = {};

for (let i = 0; i  < carrinho.length; i++ ) {

    if ( carrinho[i].categoria === 'Alimentos') {
        
        obj.cat = carrinho[i].categoria === 'Alimentos';
        novoArray.push(obj);   

    }
}

console.log( novoArray);
// 2.1 ) Filtrando com Filter os produtos que possuem o valor meno que R$ 60.000 :

const filtro02 = carrinho.filter(objX => objX.valor < 60.00000);

console.log(filtro02);

//3.1)  Filtrando com Filter os nomes dos produtos que terminam com a letra "o":

const filtro3 = carrinho.filter( (objeto) =>{ 
    
    return objeto.nome.toLowerCase().endsWith('o');

});
console.log(filtro3);

//4.1 Filtrando com o Filter, os valores que são pares:

const filtro4 = carrinho.filter(objsS => {
    
    if (objsS.valor % 2 === 0){ // Condicional que traz os valores que o resto da divisão por 2  que dão zero, ou seja, que são pares.
 
        return objsS.valor;
    }
})

console.log(filtro4);

//===================================


// Usando o  Reduce 
// O Reduce consegue reduzir o array para apenas um único elemento.

//1º exemplo:
// Somando todos os valores da propriedade valor e mostra o resultado final eum único elemento:

const useReduce = carrinho.reduce( (acumulador, objY) => {

    acumulador+= objY.valor; // A cada iteração no array, o acumulador  pega o valor do mesmo e vai somando com o que ele já tem naquele exato momento.
    return acumulador;
    
}, 0 );

console.log(useReduce);

// 2.1) Se os valores forem pares, iremos realizar a soma e deixar o resultado em único elemento :

const useReduce02 = carrinho.reduce((acumulador02 , objJ ) => {

    if ( objJ.valor % 2 === 0) {

        acumulador02 += objJ.valor ;
    }

    return acumulador02;
},0);

console.log(useReduce02);

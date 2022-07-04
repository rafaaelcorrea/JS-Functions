/// PARÂMETROS DE FUNÇÃO ///
 
/* No JS NÃO APRESENTA ERRO se ao chamarmos a função e colocarmos um argumento e
não tiver um parâmetro esperando pelo o mesmo nesta função. Exemplo:*/
function sampleFunction( ){ // <- Sem parâmetro
    console.log("Oláa!");
}
sampleFunction('Valor'); // <- Com argumento

/// USANDO A TÉCNICA ARGUMENTS ///
/*Só funciona com função clássica que usa o functions. Com Arrows Functions n]ao funciona*/ 
/*Exemplo*/

function umaFuncao() {
    console.log(arguments[7]); // Mostra o valor do índice que queremos do argumento
}
umaFuncao('valor',7,8,5,15,25,35,55); //  Os valores passados nesse argumento saem também como se fossem indices de vetores .exemplo: 'valor' = 0 , 7 = 1 , 8 = 2 , 5 = 3, 15 = 4 ...

/* Fazendo Cálculo com os arguments */
function umaFuncao2(){
    let total = 0 ;
    for (let argumento of arguments) {
        total+=argumento;
        console.log(total);
    }
}
umaFuncao2(22,33,44,55,66,77,88,99,);

/// FAZENDO CÁLCULO USANDO PARÂMETROS:///

function calculo( a= 3 , b = 3 , c = 4){ //Caso na chamada da função esteja faltando algum valor de argumento, o valor reserva declarado nesses parâmetros serão assumidos automaticamente. 

    console.log( a + b + c) ;
} calculo(14,17); // função chamada com um  dos valores dos argumentos faltando, o que automaticamente irá  acionar o uso de um dos valores reservas declarados nos parâmetros.

/// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO USANDO OBJETOS NA FUNÇÃO ///
 
function umaFuncao3 ({nome,sobrenome, idade}){ // Parâmetro configurado como objeto que receberá o objeto do argumento. Obs.:Os nomes das propriedades desse objeto tem que estar igual as das propriedades do outro objeto que estará no argumento da chamada da função.
    console.log(nome,sobrenome,idade);
}
umaFuncao3({nome:'Rafael', sobrenome:'Corrêa',idade:36}); // Objeto sendo enviado como valor de argumento

///ATRIBUIÇÃO VIA DESESTRUTURAÇÃO USANDO ARRAYS ///

function umaFuncao4([valor1,valor2,valor3]){ // Parâmetro configurado como  array, que receberá os valores do array do argumento. 
    console.log(valor1,valor2,valor3);
}
umaFuncao4(['Rafael','Corrêa',36]); // Array sendo enviado como valor do argumento

// REALIZANDO CONTAS COM FUNÇÃO :

function conta(operador,acumulador, ...numeros) {//Colocando os parâmetros. Aqui , como um dos parâmetros utilizamos o rest operator "..." . O mesmo deve ser sempre o último parâmetro, pois se fugir dessa posição, ocorrerá erro. 
    for (let numero of numeros){ //For of of que passará cada valor do parâmetro "numeros"
        //Dentro desse For of , temos alguns cenários de Ifs que serão executados dependendo do sinal de operação aritimética que colocarmos nos argumentos da chamada da função. 
        if (operador==='+'){ acumulador += numero };
        if (operador==='-'){ acumulador -= numero };
        if (operador==='/'){ acumulador /= numero };
        if (operador==='*'){ acumulador *= numero };

    }
    console.log(acumulador);
}

conta( '*',1,20,30,40,50);// Os argumentos. Aqui, cada valor que colocarmos os parâmateros assumirão estes como seus valores. EXEMPLO: operador ='*' , acumulador = 1, ...numeros = 20,30,40,50    
// RETORNO DE FUNÇÃO ( RETURN):
// O RETURN RETORNAR UM VALOR E TERMINA A FUNÇÃO.

/* Sacada: Diferença entre return X console.log();*/
/*O return ele executa o que esta nele e termina função. 
Já o console.log() , apenas mostra o que queremos no console do navegador.
*/

function soma(a,b){

    return a + b; /* executa a soma e encerra função */

}

console.log(soma(5,2)); /* O console.log() apenas mostra a função */

/// UMA FUNÇÃO QUE RETORNA OUTRA FUNÇÃO -(CLOSURE) ///
/**/

function criaMuliplicador(multiplicador){
    // Escopo da "função pai"
    // o parâmetro multiplicador é deste escopo!

    return function(numeroDoUsuario){
        //Escopo da "função filho"
        return numeroDoUsuario * multiplicador; // <-- acessando o parâmetro da função pai.
    }
}
// Adicionando a mesma função a trÊs variáveis e colocando os argumentos em cada chamada, cujos os valores serão transmitidos para o parâmetro ( multiplicador)
const duplica = criaMuliplicador(2);
const triplica = criaMuliplicador(3);
const quadriplica = criaMuliplicador(4);

// Chamadada das variáveis acima como função. Nelas também adicionamos os argumentos , que cujo valores serã transmitidos para função anônima , que esta internamente na função criaMultiplicidador.
console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(6));

// Outro e exemplo de Closure:

function makeTable(nameTable) {

        return function(){
            
            return console.log(`The new table has created with name: ${nameTable}`); //nameTable;
        }
}

let myTable = makeTable("u_sys_user"); // Atribuimos a essa variável myTable a função makeTable, com isto, esta variável se torna  uma função que chama outra função. Esse processo é um Closure (Fazendo uma analogia , é como se fosse uma "boneca russa".).

myTable();


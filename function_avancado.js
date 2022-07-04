///DECLARAÇÃO DE FUNÇÃO HOISTING///

/* # no JS podemos chamar uma função antes mesma de declara-la, pois isso é permitido por causa do hoisting que roda 
 no motor do JS.*/

/*
boasVindas();

function boasVindas() {

    console.log("Olá!");
}
*/

///FUNÇÃO FIRST-CLASS OBJECTS (OBJETO DE  PRIMEIRA CLASSE )///

/* # Toda função no JS é considerada um "First-class Objects (Objeto de primeira classe),ou seja, 
é quando tratamos a função como um valor de uma variável, como um dado.*/ 

/* Segue exemplo abaixo de uma  Function expressios. Atribuimos uma função a uma variável e pegamos esta variável e chamamos ela como argumento na chamada de uma outra função. */
const souUmdado = function(){
    console.log("Sou um dado.");
}

function mostrarDados(recebeFuncao){
/*no parâmetro recebeFuncao será atribuido ao mesmo uma função externa*/
  recebeFuncao();
}

mostrarDados(souUmdado); /*chamamos essa função e colocamos como parâmetro a função externa que esta "como um dado/uma variável".*/

///FAZENDO UMA FIRST-CLASS OBJECT COMO UMA ARROW FUNCTION///

const funcaoArrow = () => {
    console.log("Sou uma arrow function");
}

funcaoArrow();


///USANDO UMA FUNÇÃO COMO UM VALOR DE UMA PROPRIEDADE DE UM OBJETO///

const obj = {

    falar: function(){
        console.log("Estou falando")
    }
}

obj.falar();
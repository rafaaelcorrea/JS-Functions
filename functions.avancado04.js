//::ESCOPO LÉXICO:::
//Léxico: siginifica uma expressão ou variável e etc.
//Escopo: local/área  onde se encontra algo. 

// Variável definida em escopo global :
const fullName = "Rafael Corrêa";

// Função que tem closures e chama a variável exposta acima  (escopo global):

 /* Raciocínio de como a variável é acessada:
 
(1º passo: Primeiramente o algoritmo  irá checar se a variável esta definida no escopo da função writename. Como não esta,ele  vai procurar no próximo escopo.

2° passo: Agora, o algoritmo  irá checar se a variável esta definida no escopo da função sayname. Como não esta,ele  vai procurar no próximo escopo.   

3º passo: O algoritmo  irá checar se a variável esta definida no escopo da função pai, a profile. Como não esta,ele  vai procurar no próximo escopo.

4º passo: O algoritmo  irá checar se a variável esta definida no escopo global do código. Como a variável estar nesse escopo, ele pega essa variável e retorna ela na função writename.)
*/

function profile() {
  function sayName() {
    function writeName() {
    return  console.log(fullName);
    }
    return writeName();
  }
  return sayName();
}

let callProfile = profile();

//FUNÇÕES DE CALLBACK//
// É quando passamos função como argumento na chamada de uma função extrerna. Exemplo:

const mensagem = function() {  
  console.log("Essa mensagem é exibida depois de 3 segundos");
}

setTimeout(mensagem, 3000);


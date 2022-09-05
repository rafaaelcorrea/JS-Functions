function funcMatriz(){

    let nomeProd = document.querySelector('.nomeProd');
    let marca = document.querySelector('.marca');
    let valor = document.querySelector('.valor');
    let fornecedor = document.querySelector('.fornecedor');
    let deletaInputs = document.querySelectorAll('input');
    const btn = document.querySelector('.button');
    const arrProd = [];


    class ObjProd {

            constructor( nomeProd,marca,valor, fornecedor, ) {
            this.nomeProd = nomeProd;
            this.marca = marca;
            this.valor = valor;
            this.fornecedor = fornecedor;
    }

        pegarInputs(input) {
            arrProd.push(input);
        }

        limpaDados(){
            arrProd.length = 0;
        }

}

 function addProd() {
    const prodDados = new ObjProd(nomeProd.value,marca.value,valor.value,fornecedor.value);
    prodDados.pegarInputs(prodDados);
    limpaInputs();
}

    function limpaInputs() { return deletaInputs.value = '';};

    btn.addEventListener('click', () => {  return addProd(); });


    /*
    document.addEventListener('click', evento => {
        const elementoHTML =  evento.target;

        if(elementoHTML.classList.contains('button') ) {
            return addProd();
        }

});
*/

console.log(arrProd); 
console.log(ObjProd);
console.log(prodDados);
console.log(`Tamanho do array:${arrProd.length}`);
}

funcMatriz();


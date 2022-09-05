function funcMatriz(){

    let nomeProd = document.querySelector('.nomeProd');
    let marca = document.querySelector('.marca');
    let valor = document.querySelector('.valor');
    let fornecedor = document.querySelector('.fornecedor');
    let deletaInputs = document.querySelectorAll('input');
    const btn = document.querySelector('.button');
    btn.addEventListener('click', () => {  return addProd(); });
    const arrProd = [];


    class ObjProd {

            constructor( nomeProd,marca,valor, fornecedor, ) {
            this.nomeProd = nomeProd;
            this.marca = marca;
            this.valor = valor;
            this.fornecedor = fornecedor;
    }


}

 function limpaInputs() { 
     console.log("chamou!")
     return deletaInputs.value = '';};
    
 function addProd() {
    const prodDados = new ObjProd(nomeProd.value,marca.value,valor.value,fornecedor.value);
    arrProd.push(prodDados);
    limpaInputs();
    console.log(`Tamanho do array:${arrProd.length}`);
    
}

 
    /*
    document.addEventListener('click', evento => {
        const elementoHTML =  evento.target;

        if(elementoHTML.classList.contains('button') ) {
            return addProd();
        }

});
*/

console.log(`Tamanho do array:${arrProd.length}`);
}

funcMatriz();


//Polimorfismo: 
//Conceito básico: é sobrescrever métodos, ou seja, é fazer com que eles executem algo diferentemente do proposito original
//dele.

// "Superclass" = classe base para todas as outras subclasses:
function Conta(agencia, conta, saldo) {
    
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};


Conta.prototype.sacarValor = (valor) => {

    if (this.saldo < valor) return `Saldo insuficiente: ${this.mostrarSaldo()}`;

     this.saldo -= valor;
     this.mostrarSaldo();
};

Conta.prototype.depositarValor = (valor) => {
   this.saldo += valor;
   this.mostrarSaldo();
};

Conta.prototype.mostrarSaldo = () => {
    
    return `Ag.: ${this.agencia} / Conta:  ${this.conta} / Saldo: ${this.saldo.toFixed(2)}`;
}

//******************

//1º Subclasse:
function ContaCorrente(agencia,conta,saldo,limite) {
    Conta.call(this, agencia,conta,saldo ) // Herdando as propriedades da Superclasse Conta
    this.limit = limite; // propiedade que é dessa própria subclasse
}

//Sobreescrevendo o método sacarValor que é da Superclasse Conta:

ContaCorrente.prototype = Object.create(Conta.prototype);// Aqui de fato, puxamos a o método da Superclasse Conta
ContaCorrente.prototype.constructor = ContaCorrente; // retornando o construtor da Subclasse ContaCorrente 

// Método sobreescrito:
ContaCorrente.prototype.sacarValor = (valor) => {

    if (this.valor > ( this.saldo + this.limite) ) return `Saldo insuficiente: ${this.saldo}`;

     this.saldo -= valor;
     this.mostrarSaldo();
};

// Instanciando /criando um objeto na Subclasse:
const clienteCC = new ContaCorrente('6159','12214-9',1500);

clienteCC.sacarValor(500);


//*****************

//2º Subclasse:

function ContaPoupanca(agencia,conta,saldo) {
    Conta.call(this, agencia,conta,saldo ) // Herdando as propriedades da Superclasse Conta
}

// Nessa subclasse não vamos sobreescre-vela, pois vamos usala do jeito original da Superclasse:

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

// Estanciando/criando um objeto na subclasse02
const clientePoup = new ContaPoupanca('6155','12214-8', 2000);

clientePoup.sacarValor();

// POO - CLasses:
// Classe em JS é a mesma coisa da função construtora( Inclusivee, é melhor que funcão construtora):
// Na Classe, não preciasamos explicitar que qualquer método esteja no prototype, pois podemos criar o método dentro da classe eo
// será transferido automaticamente para dentro de seu prototype padrão ( o Objejct).

//Sintaxe padrão de uma classe - Exemplo:

class Carro  {

    // O constuctor "simula" uma função construtora. Configuração das propriedades da classe:
    constructor ( roda,porta, parabrisa ) {
        this.roda = roda;
        this.porta = porta;
        this.parabrisa = parabrisa;
    }

    // Os métodos da classe  (eles podem ser inseridos foraco constructor.) :
 
    acionarRoda() {
        let ligarCarro = false;
        let pisarAceleraodor = false;
        if(!ligarCarro && !pisarAceleraodor) { return `Ativando as rodas ${this.roda}`;}
        return `Veículo parado.`;
    }

    acionarPorta() {
        let sensorPorta = false;
        if(!sensorPorta) {return `ativando a ${this.porta}`;}
        return `Porta Off. `;
    }

    acionarParabrisa() {
        let agua = false;
        if (!agua) {return `acionando ${this.parabrisa}. Parabrisa On.`;}
        return `Parabrisa Off.`;
    }
}

const car1 = new Carro('Ligaleve', 'PortaX' , 'Para-brisaX');

// Protegendo a propriedade com o método Symbol e usando o Getters e Setters:

//1º vamos proteger a propriedade "velocidade" para que ninguém possa altera-la.
//Para isso, vamos usar o método Symbol().

const _velocidade = Symbol('velocidade'); // Tornando  a propriedade privada;
class Moto {

    constructor( nome) {
        this.nome =nome;
        this[_velocidade] = 0; // propriedade protegida.
    }

acelerar(){
    if(this[_velocidade] >= 100) {return `Limite máximo de de [_velocidade] atingido`};
    this[_velocidade]++ ;

}

freiar() {
    if (this[_velocidade] = 0) {return `Veículo já se encontrado parado`}; 
    this[_velocidade]--;   
}


}

const moto1 = new Moto('Kawazaki');
moto1.velocidade = 2000; // Não deixar alterar a variável velocidade original, e sim acaba criando uma outra propriedade. 
//Herança com classe
 //Usando o extends e o super();
 
 class DispostivoEletronico {

    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
         if( this.ligado ) {return `${this.nome} ligado!`};
        this.ligado = true; 
        };


    desligar(){ 
        if(!this.ligado) {return `${this.nome} desligado!`};
        this.ligado = false;
    };
  

}

// Criamos uma subclasse (classe filha), que também herdará dados da classe pai (Dispositivo eletrônico):

class Smartphone extends DispostivoEletronico { // Extends : herdando toda a classe dispositivoEletronico
    constructor(nome, cor, modelo){
        super(nome); //Super() - é um método que chama o construtor da classe pai (dispositivoEletrônico) e executa o mesmo.
        //( como o construtor da classe pai só tinha um parâmetro chamadado "nome", então colocamos apenas o mesmo. )
        
        // Atributos/propriedades que criamos para essa subclasse (classe filha):
        this.cor = cor;
        this.modelo = modelo
    }
}

const smart1 = new Smartphone('Samsumg','Branco','Galaxy A22');
console.log(smart1);

// Criamos mais uma subclasse( classe filha) , que também herdará dados da classe pai (Dispositivo eletrônico):

class Tablelt extends DispostivoEletronico {
    constructor(nome, wifi) {
        super(nome);

        //Atributos/propriedades que criamos para essa subclasse (classe filha):
        this.wifi = wifi;
    }
    
    
    ligar(){
        console.log('Tablet ligado.');
    }

    falaMensagem() {
        console.log('Bem vindo ao dispositivo.')
    }
    
}


const tablet1 = new Tablelt('Ipad',' Wifi disponível');

console.log(tablet1);
tablet1.ligar();
tablet1.ligar();
tablet1.falaMensagem();

// Métodos estáticos nas classes :
// Para acessar esse tipo de método, não é preciso acessa-lo através de uma instância como é faito em um método comum, e sim
// devemos acessa-lo diretamente pela a classe.
// Geralmente, são usados como funções utilitárias, como funções para criar ou clonar objetos.
//Exemplo:

class ControleRemoto {
    constructor(nomeDispositivo) {
        this.nomeDispositivo = nomeDispositivo;
        this.volume = 0;
        }

        aumentarVolume(){
            this.volume += 1;
        }

        diminuirVolume(){
            this.volume -=1 ;
        }

        //Método estático
        static trocaPilha(){
            return `Pilhas trocadas com sucesso.`;
        }
}

const controle1 = new ControleRemoto('TV Samsumg');

for (let i = 0 ; i = 3 ; i++){
    controle1.aumentarVolume();
}

controle1.trocaPilha(); // << Forma INCORRETA de se chamar um método estático.
console.log(ControleRemoto.trocaPilha()); // << Forma CORRETA  para se chamar um método estácico
console.log(controle1);

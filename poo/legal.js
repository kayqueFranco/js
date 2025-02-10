/***
 * POO
 * Abistração, Herança e Polimosfismo
 * @author  Kayque Franco
 */

//classe modelo (Aniciar sempre com letra maiuscula)
class Carro {
    //atributos
    constructor(textura,resistencia){
        this.textura = textura
        this.resistencia = resistencia
    }
    //ações
    criarBloco () {
        console.log("-------------------------------------------------------")
        console.log("                     ")
        console.log("        _______      ")
        console.log("       //  ||\ \     ")
        console.log(" _____//___||_\ \___ ")
        console.log(" )  _          _    |")
        console.log(" |_/ \________/ \___|")
        console.log("___\_/________\_/____")
        console.log(`ano de${this.textura}`)
        console.log(`cor:${this.resistencia}`)

    }
    
    ligar(){
        console.log(`o carro esta ${this.textura} Ligado `)
    }
    desligar() {
        console.log(`o  carro esta ${this.textura} Desligado`)
    }
    acelerando() {
        console.log("vummmmmmmmmmmm")
    }


}


// classe modelo enxda com herança de bloco
class Enxada extends Carro {
    constructor(textura,resistencia,conquista){
        super(textura,resistencia)//super -> classe pai
        this.conquista =conquista
    }
    //acões
    criarEnxada() {
        console.log("-----------------------------------------")
        console.log("-_-")
        console.log("/")
        console.log(`Enxada ${this.textura}`)
        console.log(`Enxada ${this.resistencia}`)
    }

    arar() {
        console.log(";._._._. Terra arada!")
        if(this.conquista === true) {
            console.log("☀ Conquista obtida!")
        }
    }

    //polimorfismo (obrigatorio manter o nome de método da classe modelo(pai))
    minerar (){
        console.log("✞ Dano atribuído!")
    }

}

// Intanciando (criando) um objeto
const carro1 = new Carro ("Fusca", 1)
carro1.ligar()
carro1.acelerando()
carro1.desligar

const carro2 = new Carro ("Ferrari",10)
carro2.ligar()
carro2.acelerando()
carro2.desligar()


//const bloco3 = new Aviao ("Pedra",5)
//bloco3.criarBloco()
//bloco3.minerar()
//console.log(typeof(bloco3))


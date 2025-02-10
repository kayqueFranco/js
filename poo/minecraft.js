/***
 * POO
 * Abistração, Herança e Polimosfismo
 * @author  Kayque Franco
 */

//classe modelo (Aniciar sempre com letra maiuscula)
class Bloco {
    //atributos
    constructor(textura,resistencia){
        this.textura = textura
        this.resistencia = resistencia
    }
    //ações
    criarBloco () {
        console.log("-------------------------------------------------------")
        console.log("┌─┐")
        console.log("└─┘")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistência:${this.resistencia}`)

    }
    
    contruir(){
        console.log(`Bloco de ${this.textura} colocado`)
    }
    
    minerar(){
        console.log("□ □ □ □ Recursos obtidos!")
    }


}


// classe modelo enxda com herança de bloco
class Enxada extends Bloco {
    constructor(ano,cor,invergadura){
        super(ano,cor)//super -> classe pai
        this.invergadura = invergadura
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

/*---------------MUNDO-----------*/
console.clear()
console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____ ")
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _|")
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | |  ")
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|  ")

// Intanciando (criando) um objeto
const bloco1 = new Bloco ("terra", 1)
bloco1.criarBloco()

const bloco2 = new Bloco ("madeira",2)
bloco2.criarBloco()
bloco2.contruir()

const bloco3 = new Bloco ("Pedra",5)
bloco3.criarBloco()
bloco3.minerar()
console.log(typeof(bloco3))

const enxada1 = new Enxada("madeira",2,false)
enxada1.criarEnxada()
enxada1.arar()

const enxada2 = new Enxada("ferro",10,true)
enxada2.criarEnxada()
enxada2.arar()


const enxada3 = new Enxada("diamante",20,false)
enxada3.criarEnxada()
enxada3.arar()
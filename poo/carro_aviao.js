/**
 * Desafio
 * 
 * @author Kayque Franco
 */


class Carro {
    constructor(ano,cor) {
        this.ano = ano
        this.cor = cor
    }
    //ações
    criarCarro(){
        console.log("-------------------------------------")
        console.log("                     ")
        console.log("        _______      ")
        console.log("       //  ||\ \     ")
        console.log(" _____//___||_\ \___ ")
        console.log(" )  _          _    |")
        console.log(" |_/ \________/ \___|")
        console.log("___\_/________\_/____")
        console.log(`Ano de ${this.ano} `)
        console.log(`cor: ${this.cor}`)
    }
    ligar(){
        console.log(`o carro esta ${this.ano} Ligado `)
    }
    desligar() {
        console.log(`o  carro esta ${this.cor} Desligado`)
    }
    acelerando() {
        console.log("vummmmmmmmmmmm")
    }


}
class Aviao extends  Carro {
    constructor(ano,cor,invergadura){
        super(ano,cor)//super -> classe pai
        this.invergadura = invergadura
    }

    criarAviao(){
        console.log("----------------------------------------------------------------")
        console.log("                                                                 ")
        console.log("                            ___________                          ")
        console.log("                                 |                               ")
        console.log("                            _   _|_   _                          ")
        console.log("                           (_)-/   \-(_)                        ")
        console.log("    _                         /\___/\                         _  ")
        console.log("   (_)_______________________( ( . ) )_______________________(_) ")
        console.log("                              \_____/                            ")
    }

    acelerar() {
        console.log("Vummmmm")
    }

    Aterrizar() {
        console.log("o aviao aterrizou ")
    }
}




//objeto
const carro1 = new Carro ("fusca",1999)
carro1.criarCarro()
carro1.ligar()
carro1.acelerando()
carro1.desligar()


const carro2 = new Carro("Ferrari",2019)
carro2.criarCarro()
carro2.ligar()
carro2.acelerando()
carro2.desligar()


const aviao = new Aviao("AViao")
aviao.criarAviao()
aviao.acelerando()
aviao.Aterrizar()

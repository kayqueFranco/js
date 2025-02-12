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
        console.log("🚗")
        console.log(`carro:${this.ano} `)
        console.log(`ano: ${this.cor}`)
    }
    ligar(){
        console.log(`o carro esta  Ligado `)
    }
    desligar() {
        console.log(`o  carro esta  Desligado`)
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
        console.log("🛫")
        console.log(`Aviao ${this.ano}`)
        console.log(`invergadura ${this.invergadura}`)
     
    }

    acelerar() {
        console.log("uommmmmmm")
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


const aviao = new Aviao("delta",2020,"30")
aviao.criarAviao()
aviao.acelerar()
aviao.Aterrizar()

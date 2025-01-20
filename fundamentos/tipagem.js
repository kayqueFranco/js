/**
 * Tpagem Dinâmica - JS
 */

//declaração de variaveis 
let nome, idade, peso, altura, vip, imc, fcm


//entrada de dados 
nome = "Kayque"
idade = 16 
peso  = 82
altura = 1.74
vip = true
 
// a linha abaixo verifica o tipo da variável
//console.log (typeof(vip))

console.clear()

//procedimento
// imc (índice de massa corporal |fcm (frequência cardiaca maxima ))
imc = peso / (altura * altura)
fcm = 2008 - (0.7 * idade )


//saída 
console.log ("Ficha do aluno")
console.log ("______________________")
console.log (`Nome: ${nome}`)
console.log (`Idade: ${idade}`)
console.log (`Peso: ${peso}`)
console.log (`Altura: ${altura}`)
console.log (`Vip: ${vip}`)
console.log (`IMC: ${imc.toFixed(2)}`)
console.log (`FCM: ${fcm} bpm`)
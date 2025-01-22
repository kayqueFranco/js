/**
 * Estudo das funções 
 */

//Fnção simples (literal)
function hello(){
    console.log ("Hello function")
}
console.log(typeof(hello))
hello ()

//Funcção atribuida
const hello2 = function() {
    console.log ("Hello function assigned")
}
console.log(typeof(hello2))
hello2()
//Arrow fuction (simplificação da função atribuida)
//fuction ------------- =>
const hello3 = () =>{
    console.log ("Hello arrow function")
}

console.log(typeof(hello3))
hello3()

// Funções com passagem de parâmeros e retro
// Fução simples (literal)
function somars (num1,num2) {
    return (console.log(num1+num2))
}

somars(2,3)

// Função atribuida
const somarA = function (num1,num2) {
    return(console.log(num1+num2))
}
somarA(4,5)

// Arrow function 
const somarAF = (num1,num2) => {
    return(console.log(num1+num2))
}
somarAF(5,7)

 // Arrow function simplificada (retorno é implicito)
 const somarAFS = (num1,num2) => console.log(num1+num2)
somarAFS(2,2)
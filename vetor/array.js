/**
 * Estudo array(vetor)
 * @author Kayque Franco 
 */


console.clear()
let alunos = []
console.log(typeof(alunos))
let alunosEM1 = ["vitor", "Tania" , "Pedro" , "Maria " , "Viviane"]
console.log(typeof(alunosEM1))
// ".length " obtem um tamanho da array
console.log(alunosEM1.length)
// Exibindo os dado de um array
console.log(alunosEM1)
// Exibindo um aluno do array
console.log(alunosEM1[2])
//exibindo os dados do array em uma tabela
console.table(alunosEM1)
//adicionando um elemento ao array
alunosEM1.push("Luiza")
console.table(alunosEM1)
// Modificar um elemneto do array
alunosEM1 [0] = "Victor"
console.table(alunosEM1)
// Excluir um elemento do array
delete alunosEM1 [2] 
console.table(alunosEM1)
//Percorrendo um array 
let notas = [3,8,5,2]
// uso do laço "for " para percorrer um array
for (let i = 0; i<notas.length; i++) {
    console.log(notas[i])
}

// forEach (simplificação do laço for para uso em array)
notas.forEach((n) => {
    console.log(n)
})

// map (mapeamento da estrutura de dados para cálculos ou conversões)
// Exemplo 1: Adicinor 1 ponto as notas
let notasAtualizadas = notas.map((na) => {
    return na + 1 
    
})

console.log(notas)
console.log(notasAtualizadas)

// Exemplo 2 : converção de um sistema de notas 
/*
    NA - Não atendeu( nota <5)
    PA - Parcialmente atendido(nota entre 5 e 7)
    A  - Atendeu (nota >7)
*/

let notasConvertidas = notas.map((nc) =>{
    if(nc <5){
        return "NA"
    }
    else if (nc >7){
        return "A"
    }
    else {
        return"PA"
    }
})

console.log(notas)
console.log(notasConvertidas)
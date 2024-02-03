const alunos = [
    {'nome': 'Matheus', 'nota': 10}, {'nome': 'João', 'nota': 8}, {'nome': 'Maria', 'nota': 9},
    {'nome': 'Pedro', 'nota': 6}, {'nome': 'Debora', 'nota':4}, {'nome': 'Sofia', 'nota': 3},
    {'nome': 'Mariana', 'nota': 1}, {'nome': 'Estefani', 'nota': 2}, {'nome': 'Ludmila', 'nota': 5},
    {'nome': 'Sabrina', 'nota': 7}, {'nome': 'Jessica', 'nota': 4}, {'nome': 'Geovana', 'nota': 6}
]
const alunosSelecionados = alunos.filter((e)=>{
    if(e.nota >= 6){
        return e
    }
})

console.log(alunosSelecionados)
import { mudarcor } from './cores.js'

let botao = document.getElementById('botao')
botao.addEventListener('click', ()=>{
    return document.body.style.background = mudarcor()
})
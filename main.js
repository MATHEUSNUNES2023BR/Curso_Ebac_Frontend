$(document).ready(function(){ 
    $('#Listadetarefas form').submit((evt)=>{
        evt.preventDefault()
        const texto = $('form input').val()
        const li = $(`<li> ${texto} </li>`)
        li.appendTo('ul')
        $('form input').val('')
    })
    // Selecionar tag ul e dentro dela especificamente seleciona a tag dinâmica li
    $('ul').on('click', 'li', (e)=>{
        //Seleciona o elemento
        const elemento = e.target
        // Verifica se o elemento já está com algum text-decoration
        if(elemento.style.textDecoration == ""){
            elemento.style = 'text-decoration:line-through'
        }
        else{
            elemento.style.textDecoration = ""
        }
    })
 
})
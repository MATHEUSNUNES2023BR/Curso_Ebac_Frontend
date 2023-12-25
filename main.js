const campo_a = document.querySelector('.campo-a');
const campo_b = document.querySelector('.campo-b');
const form = document.getElementById('form');
const message_error = document.querySelector('.message-error');
const message_sucess = document.querySelector('.message-sucess');

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    const resultado = campo_a.value < campo_b.value ? true : false;
    if(resultado){
        message_sucess.style.display = 'block'
    }else{
        message_error.style.display = 'block'
    }
})

form.addEventListener('click', function(){
    message_error.style.display = 'none'
    message_sucess.style.display = 'none'
})
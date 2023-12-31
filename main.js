$(document).ready(function(){
    $('#telefone').mask('(00) 0 0000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')
    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
        },
        // Mensagem personalizada
        messages: {
            nome: 'Porfavor, ensira o seu nome',
            email:'Porfavor, ensira um endereço valido',
            telefone:'Porfavor, ensira o seu telefone',
            cpf: 'Porfavor, ensira o seu cpf',
            endereco: 'Porfavor, ensira o seu endereço',
            cep: 'Porfavor, ensira o seu CEP'
        }, 
        submitHandler: function (form) {
            // Add your custom logic here
            alert('"Usuário cadastrado com sucesso!"');
            form.submit(); // Submit the form after displaying the alert
        }          
            
    })
    
}) 
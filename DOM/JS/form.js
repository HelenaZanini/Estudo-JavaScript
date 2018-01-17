var dadosCliente = {
    endereco : {},
    contato : {}
};

function validarFormulario(){
    
    event.preventDefault();
    
    console.log( validarEndereco() );
    console.log( validarContato() );

    if(validarEndereco() && validarContato())
        console.log('validação está ok.. pode prosseguir');
    else 
        console.log('validação não passou.. preencher todos os campos');
}

function validarEndereco(){
    //gerar objeto endereco baseado nos dados do formulario
    objEndereco = {
        pais        : document.getElementById('selection_country').value,
        estado      : document.getElementById('state').value,
        cidade      : document.getElementById('selection_city').value,
        cep         : document.getElementById('zip').value,
        endereco1   : document.getElementById('ad1').value,
        endereco2   : document.getElementById('ad2').value,
    };

    if( objEndereco.pais == '0' ) {
        return false;
    } else if (objEndereco.cidade == '0'){
        return false;
    } else if( objEndereco.estado.trim().length == 0 ){
        return false;
    } else if( objEndereco.cep.trim().length == 0 ){
        return false;
    } else if ( objEndereco.endereco1.trim().length == 0  ){
        return false;
    } else if ( objEndereco.endereco2.trim().length == 0  ){
        return false;
    } else {//validação ok
        //grava o objeto endereço no objeto dadosCliente
        dadosCliente.endereco = objEndereco;
        //retorno da função
        return true;
    }

}

function validarContato(){
    //gerar objeto contato baseado nos dados do formulario
    objContato = {
        Nome        : document.getElementById('name').value,
        Sobrenome      : document.getElementById('lastname').value,
        Email      : document.getElementById('email').value,
        Telefone         : document.getElementById('phone').value,
    };

    
    if( objContato.Nome.trim().length == 0 ) {
        return false;
    } else if( objContato.Sobrenome.trim().length == 0 ){
        return false;
    } else if( objContato.Email.trim().length == 0 ){
        return false;
    } else if ( objContato.Telefone.trim().length == 0  ){
        return false;
    } else {//validação ok
        //grava o objeto endereço no objeto dadosCliente
        dadosCliente.contato = objContato;
        //retorno da função
        return true;
    }
}


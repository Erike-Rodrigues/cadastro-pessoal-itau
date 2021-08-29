function mascara_cpf(){
    let mascara = document.getElementById("cpf")
    if(cpf.value.length == 3 || cpf.value.length == 7){
        cpf.value += "."

    } else if(cpf.value.length == 11) {
        cpf.value += "-"
    }
}

function validar() {
    let nome = document.getElementById("nome")
    let cpf = document.getElementById("cpf")
    let endereco = document.getElementById("endereco")
    let numero = document.getElementById("numero")
    let celular = document.getElementById("celular")

    let user = nome.value

    if (nome.value == "") {
        alert("Nome não informado");
        nome.focus();
        return;
    }

    if (cpf.value == "") {
        alert("Olá, " + user + ". Favor preencher todos os Campos corretamente! Digite seu CPF");
        cpf.focus();
        return;
    }


    if (endereco.value == "") {
        alert("Endereço não informado");
        endereco.focus();
        return;
    }

    if (numero.value == "") {
        alert("N° da Residencia não informado");
        numero.focus();
        return;
    }

    if (celular.value == "") {
        alert("telefone não informado");
        celular.focus();
        return;
    }
    else {
        alert("Parabéns " + user + " seus dados foram enviados com sucesso!")
    }

}

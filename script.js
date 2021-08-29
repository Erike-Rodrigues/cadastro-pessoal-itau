function validar() {
    let nome = document.getElementById("nome")
    let cpf = document.getElementById("cpf")
    let rg = document.getElementById("rg")
    let endereco = document.getElementById("endereco")
    let numero = document.getElementById("numero")
    let celular = document.getElementById("celular")

    let user = nome.value

    if (nome.value == "") {
        alert("Nome não informado");
        nome.focus();
        return;
    }

    if (cpf.length == "") {
        alert("Olá, " + user + ". Favor preencher todos os Campos corretamente! Digite seu CPF");
        cpf.focus();
        return;
    }

    if (rg.value == "") {
        alert("RG não informado");
        rg.focus();
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

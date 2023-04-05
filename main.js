document.addEventListener("click", showcolor );

document.getElementById( "botao" ).addEventListener("click" , exibenome );

function showcolor()
{
    document.body.style.backgroundColor = "red";
}

function exibenome()
{
    let usuario = document.getElementById( "nome" ).value;
    document.getElementById( "mensagem" ).innerHTML = "Meu nome é: " + usuario;
    document.getElementById( "nome" ).value = "";
}

document.getElementById( "somar" ).addEventListener( "click" , exibenumero1numero2 );

function exibenumero1numero2()
{
    let soma = document.getElementById( "numero1 numero2" ).value
    document.getElementById( "somar" ).innerHTML = "numero1 + numero2" + somar
}

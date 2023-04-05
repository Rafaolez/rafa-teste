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

document.getElementById( "somar3" ).addEventListener("click" , somar)

function somar()
{
    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value
    document.getElementById( "somar1" ).innerHTML = parseFloat(numero1) + parseFloat(numero2);
}

document.getElementById( "ddividir" ).addEventListener("click" , dividir)

function dividir()
{
    let numero1 = document.getElementById("div1").value
    let numero2 = document.getElementById("div2").value
    document.getElementById( "dividir" ).innerHTML = parseFloat(div1) / parseFloat(div2);
}



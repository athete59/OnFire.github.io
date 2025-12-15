

function calcular()
{
let alt = document.getElementById("altura").value;
let kg = document.getElementById("peso").value;

let resp;
resp= parseFloat(kg)/parseFloat(alt*alt);

document.getElementById("resultado").innerText="O Seu imc é " + resp.toFixed(2);
}





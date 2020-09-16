function sumar()
{
//Recibir los datos
let numeroU = parseInt(document.getElementById("nUno").value);
let numeroD = parseInt(document.getElementById("nDos").value);

//Procesar los datos
let resultado =  parseInt(numeroU + numeroD);

//Entregar los resultados
document.getElementById("resulOperacion").innerHTML = resultado;
}
function multiplicar()
{
//Recibir los datos
let numeroU = parseInt(document.getElementById("nUno").value);
let numeroD = parseInt(document.getElementById("nDos").value);

//Procesar los datos
let resultado =  parseInt(numeroU * numeroD);

//Entregar los resultados
document.getElementById("resulOperacion").innerHTML = resultado;
}


function Calcular_Area_Triangulo()
{
//Recibir los datos
let BBase = parseInt(document.getElementById("Base").value);
let AAltura = parseInt(document.getElementById("Altura").value);

//Procesar los datos
let resultado =  parseInt(BBase * AAltura) / 2;

//Entregar los resultados
document.getElementById("resulOperacionT").innerHTML = resultado;
}

function Calcular_Area_Circulo()
{
var pi = 3.141595654
let Radio = parseInt(document.getElementById("radio").value);
let resultado = parseFloat(pi * Radio * Radio)
document.getElementById("resulOperacionC").innerHTML = resultado;
}
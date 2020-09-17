function mostrarMensaje()
{
    let edad = parseInt(document.getElementById('edad').value);
    // if(edad >= 18)
    // {
    //     mensaje = "Sos mayor de edad"
    // }
    
let mensaje = (edad >= 18) ? "Sos mayor de edad" : "Sos menor de edad";
alert(mensaje);
// document.write(mensaje);
}
function mostrarMensajeDos()
{
    let edadP = parseInt(document.getElementById("edadP").value);
    let estatura = parseFloat(document.getElementById("estatura").value);
    let peso = parseInt(document.getElementById("peso").value);

    const parametroEdad = 80;
    const parametroEstatura = 1.40;
    const parametroPeso = 70;
    let mensajeDecision = "";
    //If anidado
    if  (edadP <= parametroEdad)
    {
        if (estatura >= parametroEstatura) 
        {
            if (peso == parametroPeso) 
            {
                mensajeDecision = "Apto para realizar el deporte";
            } 
            else 
            {
                mensajeDecision = "No apto. Peso no valido";
            }
        }
         else 
        {
            mensajeDecision = "No apto. Estatura no valida";
        }
    }
    else
    {
        mensajeDecision = "No apto. edad no permitida";
    }

    //If con operador logico AND(&&)
    if  (edadP <= parametroEdad && estatura >= parametroEstatura && peso == parametroPeso)
    {
        mensajeDecision = "Apto para realizar el deporte";
    }
    else
    {
        mensajeDecision = "No apto para realizar el deporte";
    }

        // If con operador logico OR(||)
        if  (edadP <= parametroEdad || estatura >= parametroEstatura || peso == parametroPeso)
        {
            mensajeDecision = "Apto para realizar el deporte";
        }
        else
        {
            mensajeDecision = "No apto para realizar el deporte";
        }
}

function mostrarMensajeTres()
{
let productName = document.getElementById("productName").value;
let price = 0;

const PRODUCT_ONE = "A";
const PRODUCT_TWO = "B";
const PRODUCT_THREE = "C";
const MESSAGE = "product invalid";

// if(productName.toUpperCase() == PRODUCT_ONE)
// {
// price = 2000
// }
// else
// {
// if (productName.toUpperCase() == PRODUCT_TWO) 
// {
//     price = 2200
// }
// else
// {
// if (productName.toUpperCase() == PRODUCT_THREE) 
// {
//     price = 1800
// }
// else
// {
//     alert(MESSAGE.toUpperCase());
// }
// }
// }
//     alert(price);
switch (productName.toUpperCase()) {
    case "PRODUCT_ONE":
        price = 20000
        break;
        case "PRODUCT_TWO":
            price = 22000
            break;
            case "PRODUCT_THREE":
                price = 18000
                break;
    default:
        alert(MESSAGE.toUpperCase())
        break;
}
    alert(Intl.NumberFromat().format(price));
}

// function prenderApagar(interruptor)
let prenderApagar  = interruptor =>{
let pic
// if (interruptor == 0) 
// {
//  alert("OFF")   
// }
// else
// {
// alert("ON")
// }
let mensaje = (interruptor == 0) ? "OFF" : "ON"
alert(mensaje)
}

function Hotel()
{
    let CPersonas = document.getElementById("CPersonas").value;
    let DHospedacion = document.getElementById("DHospedacion").value;
    const INDIVIDUAL = 2500;
    const DOBLE = 4600;
    const FAMILIAR = 5200;
    const RESULTADO = 0;
    // switch (CPersonas) 
    // {
    //     case 1:
    //         RESULTADO = DHospedacion * INDIVIDUAL;
    //         break;
    //         case 2:
    //             RESULTADO = DHospedacion * DOBLE;
    //             break;
    //             case 4:
    //                 RESULTADO = DHospedacion * FAMILIAR;
    //                 break;
    //     default:
    //         break;
    // }
    if(CPersonas = 1)
{
    RESULTADO = DHospedacion * INDIVIDUAL;
}
else
{
if (CPersonas = 2) 
{
    price = 2200
}
else
{
if (CPersonas > 2) 
{
    RESULTADO = DHospedacion * FAMILIAR;
}
else
{
    alert(MESSAGE.toUpperCase());
}
}
}
}
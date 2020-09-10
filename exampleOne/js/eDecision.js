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
    // if  (edadP <= parametroEdad)
    // {
    //     if (estatura >= parametroEstatura) 
    //     {
    //         if (peso == parametroPeso) 
    //         {
    //             mensajeDecision = "Apto para realizar el deporte";
    //         } 
    //         else 
    //         {
    //             mensajeDecision = "No apto. Peso no valido";
    //         }
    //     }
    //      else 
    //     {
    //         mensajeDecision = "No apto. Estatura no valida";
    //     }
    // }
    // else
    // {
    //     mensajeDecision = "No apto. edad no permitida";
    // }

    //If con operador logico AND(&&)
    if  (edadP <= parametroEdad && estatura >= parametroEstatura && peso == parametroPeso)
    {
        mensajeDecision = "Apto para realizar el deporte";
    }
    else
    {
        mensajeDecision = "No apto para realizar el deporte";
    }

        //If con operador logico OR(||)
        if  (edadP <= parametroEdad || estatura >= parametroEstatura || peso == parametroPeso)
        {
            mensajeDecision = "Apto para realizar el deporte";
        }
        else
        {
            mensajeDecision = "No apto para realizar el deporte";
        }
    alert(mensajeDecision);
}
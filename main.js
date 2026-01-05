// hacer una app que calcule el impuesto si ganas menos de 1000 debes imprimir "Debes pagar 5%"
// si ganas mas debes imprimir "Debes pagar el 10%  " , el ingreso esta defindio en una variable




// PSEUDOCODIGO
// definir la variable ingreso
let ingreso = 500
// comparar el inreso para ver si es menor a mil
// let mensaje = ''
// if( ingreso < 1000){
//     mensaje = "Debes pagar el 5%"
// }else{
//     mensaje = "Debes pagar el 10%"
// }

let mensaje = ingreso < 1000 ?  "Debes pagar el 5%" :  "Debes pagar el 10%"

console.log(mensaje)



// Ternary operator
// (condicion) ? que hago si true : que hago si false

// if(condicion){
//     que hago si es true
// }else{
//  que hago si es false
// }


document.getElementById('content').insertAdjacentHTML(
    "beforeend",
    `<b>${mensaje}</b>` 

)
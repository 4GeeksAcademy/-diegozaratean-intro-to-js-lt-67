


// let name = 'Diego'
// console.log('Andes de la funcion ' +name)
// function saludarAlumno(name){
//     console.log('Dentro de la funcion ' +name)
//     console.log('Hola ' + name)
// }
// console.log('Despues de la funcion ' +name)
// saludarAlumno('Rodolfo')



// saludarAlumno('Morena')
// saludarAlumno('Juan')

// function transportar(origen,destino){
//     console.log('Saliendo de ' + origen)
//     console.log('moviendome')
//     console.log('Llegando a ' + destino)
// }


// transportar("Casa","Gym")
// transportar("Gym","oficina")
// transportar("oficina","Casa")

// transportar()
// transportar()


// hacer una fucnion que sume dos numeros
// function sumar(numa,numb){
//     return numa+numb
// }

// console.log(sumar(3,4))

// hacer una funcion adminitido en el bar si es menor de edad "Debes esperar" si es mayor "Si puedes entrar"
// function admitido(edad){
//     if(edad >= 18){
//         return "Si puedes entrar"
//     }else{
//         return "Debes esperar"

//     }
// }

// console.log(admitido(2))


function calcularImpuesto(ganancia, tax){
    return ganancia *(tax/100)
}



document.getElementById('tax').innerHTML = calcularImpuesto(10000,30)
// console.log(calcularImpuesto(10000,5))
// console.log(calcularImpuesto(10000,20))

















// Crear una funcion de calculadora
// function sumar(numa,numb){
//    return numa + numb
// }

//  console.log(sumar(2,2)) // 4
//  console.log(sumar(11,13)) // 24
//  console.log(sumar(5,0)) // 5
//  console.log(sumar(6,4)) // 10


// console.log("ANTES se ejecuto window onload")
// window.onload = function (){
//     console.log("DENTRO se ejecuto window onload")
// }
// console.log("DESPUES se ejecuto window onload")


// Funcion declarativa
saludoDeclarativo()
function saludoDeclarativo(){
    console.log('saludoDeclarativo')
}

// Funcion de Expresión
const saludoExpresion = function(){
    console.log('saludoExpresion')
}
saludoExpresion()

// Funcion flecha arrow
const saludoArrow = ()=>{
    console.log('saludoArrow')
    // this
}
saludoArrow()


///// REFACTORING //////////////////////////////////////////////////////////


//// PSEUDOCODIGO
// desarrollar un generador de excusas para Quien,Accion ,Cuando y Que
// 1. Modificar html desde js
// 2. Elegir un elemento aleatorio del array Quien 
// 3. Elegir un elemento aleatorio del array Accion
// 4. Elegir un elemento aleatorio del array Cuando
// 5. Elegir un elemento aleatorio del array Que
// 6. Aramar una frase con los elementos aleatoris
// 7. agregar estilos
// 8. traer un elemento de hmtl a js
// 9. modificar el contenido d eun un elemento hmtl desde js
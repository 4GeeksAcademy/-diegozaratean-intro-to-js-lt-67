
const persona = {
    nombre: 'Mikel',
    apellido: 'Sombragris',
    edad: 47,
    skills: ['js','react','python'],
    programar:  function (){
        console.log('estoy programando')
        return 'ya termine'
    },
    comer: function(){
        console.log('estoy comiendo')
    }
}

const arrayEjemplo = ['Mikel','Sombragris']
















// Objeto perro , nombre , raza , ladrar "wow"
const perro = {
    nombre: 'Stich',
    raza: 'Shitzu',
    ladrar: function(){
        console.log('Wow')
    }
}





// Agregar una funcion que cambie el texto(nuevo texto) y el color(rojo) del titulo cuando le doy click a un boton
// DONE: agregar un boton 
// DONE: cuando le doy click al boton hacer algo
// DONE: crear funcion 
function cambiarTitulo(){
    // DONE: impirmir funcion
    console.log('cambiarTitulo')
    // cambiar texto del titulo a (nuevo texto) 
    document.querySelector('#title').innerHTML = 'Nuevo texto' 
    // DONE: cambiar color del titulo a (rojo) 
    document.querySelector('#title').style.color = 'red'
}



window.changeTitle = function(){
    console.log('changeTitle')
}

changeTitle()
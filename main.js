
const persona = {
    nombre: 'Mikel',
    apellido: 'Sombragris',
    edad: 47,
    "Lugar de nacimiento": "Neverwinter",
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



// window.changeTitle = function(){
//     console.log('changeTitle')
// }

// changeTitle()



// Hacer una app que cambie de forma aleatoria el texto y el color del titulo cuando le doy click al boton cambiar titulo


// PSEUDOCODIGO
// DONE: agregar funcion changeTitle
function changeTitle(){
    const colores = ['yellow','green','red','aqua','purple']
    const nombres = ['Mario','Luigi','Peach','Toad','Yoshi', 'Star']
    const colorAleatorio = colores[Math.floor(Math.random() * 5)]
    const nombreAleatorio = nombres[ Math.floor( Math.random() * nombres.length  ) ]
    document.getElementById('title').innerHTML = nombreAleatorio
    document.getElementById('title').style.color = colorAleatorio
}


















// un programa que cuando le doy click a un boton lance dos dados
// PSEUDOCODIGO
// DONE: crear un botn
// DONE:crear una funcion
function lanzarDados(){
    let dado1 = Math.floor( Math.random() * 6) + 1
    let dado2 = Math.ceil( Math.random() * 6) 
    document.getElementById('dado1').innerText = dado1
    document.querySelector('#dado2').textContent = dado2
}
lanzarDados()
// DONE: hacer que caudno le docy lcik al boton se llame la funcin
const botonDados = document.getElementById('botonDados')
botonDados.addEventListener(
    "click",
    ()=>lanzarDados()
)

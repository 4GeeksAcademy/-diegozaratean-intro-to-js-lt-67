
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

// for(Inicialización;Condición;Actualización){}

/// i = 20   20 >= 15   ===> 20
/// i = 20   20 >= 15   ===> 20
/// i = 20   20 >= 15   ===> 20
/// i = 20   20 >= 15   ===> 20
/// i = 16   16 >= 15   ===> 16
/// i = 15   15 >= 15   ===> 15
/// i = 14   14 >= 15   ===> 
/// i = 2   2 <= 5   ===> 2
/// i = 3   3 <= 5   ===> 3
/// i = 4   4 <= 5   ===> 4
/// i = 5   5 <= 5   ===> 5
/// i = 6   6 <= 5   ===> 


/// i++ ====> i = i + 1
/// i-- ====> i = i - 1    

for( i = 20; i >= 15; i--){
    console.log(i)
}








// i = 30 30<=50 ===> 30
// i = 31 31 <= 50 ===> 31





console.log("OPC A")
for(i=30; i <= 50 ; i++){
    if(i % 5 == 0){
        console.log(i)
        // console.log('IMPRIMIR')

    }
}
// i = i +5 ====> i+=5
console.log("OPC B")
for(i=30; i<=50; i+=5){
    console.log(i)
}




//.   elm         1         2            3          4 
let nombres = ['goku','walter white','messi','neymar','guanbana','lulo']
// pos.           0         1           2           3
// 4

console.log(nombres)
nombres.push('Crash')
console.log(nombres)

const alumnos = ['daniegl','leonardo', 'humberto']
console.log(alumnos)
alumnos.push('rodolfo')
console.log(alumnos)


const frutas = ['kiwi','Uchuva','Piña','Naranja','guanbana','lulo']

console.log(frutas)

console.log(frutas[2])

frutas.push('manzana')
console.log(frutas)

frutas.unshift('banana')
console.log(frutas)

frutas.pop()
console.log(frutas)

frutas.shift()
console.log(frutas)

frutas.splice(2,1)
console.log(frutas)

frutas.splice(2,0,'fresa')
console.log(frutas)


frutas.splice(2,1,'pera')
console.log(frutas)


console.log('QUEMADO')
console.log(frutas[0] + 's')
console.log(frutas[1] + 's')
console.log(frutas[2] + 's')
console.log(frutas[3] + 's')


console.log('DINAMICO')
console.log(frutas)
for(let i = frutas.length - 1 ; i  >= 0 ;i--){
    // console.log(i)
    console.log(frutas[i] + 's')
}


// Array
// Mario
// Luigi
// Bowser
// Toad
// Peach
// elemento          1.     2          3.     4.    5
let personajes = ['Mario','Luigi','Bowser','Toad','Peach','star']
// Index,Pos.       0       1           2       3      4.  5.         6


console.log(personajes)


console.log("Manual")
console.log(personajes[0])
console.log(personajes[1])
console.log(personajes[2])
console.log(personajes[3])
console.log(personajes[4])


console.log("con un loop")
for(i=0; i < personajes.length ;i++){
console.log(personajes[i])
}

for(i=personajes.length-1; i >= 0; i--){
    console.log(personajes[i])
}


let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// i = i +3. =====> i+=3
for(i=0;i < numbers.length;i+=3){
    console.log("El valor d ei es: "+i)
    console.log("El valor de numbers es",numbers[i])
}

let personajesBuenos = []
for(i=0; i < personajes.length; i++){
    if(personajes[i] !== 'Bowser'){
        personajesBuenos.push(personajes[i]) 
    }
}
console.log(personajes)
console.log(personajesBuenos)

// let goodCharacters = personajes.filter( (personaje)=> personaje !== 'Bowser' )
console.log(personajes.filter( (personaje)=> personaje !== 'Bowser' ))
console.log(personajes)















console.log(numbers)
console.log(numbers.filter( (number)=> number != 7 ))
console.log(numbers.filter( (number)=> number > 7 ))
console.log(numbers.filter( (number)=> number < 15 ))
console.log(numbers.filter( (number)=> number%3 == 0 ))


let newNumbrs = []

for(i=0; i < numbers.length;i++){
    console.log(numbers[i] * 4)
    newNumbrs.push(numbers[i] * 4)
}

console.log(numbers)
console.log(newNumbrs)


let mapNumbers = numbers.map( (number)=> number * 4 )
console.log(mapNumbers)
















console.log(personajes.map( (marioparty)=> marioparty + 's' ))

personajes.forEach((nombre)=>{
    console.log(nombre)
})

console.log("Do while")
let j = 20
do{
    console.log(j)
    j++
} while (j < 10)
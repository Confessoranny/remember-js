// Make an array of numbers that are doubles of the first array
numbers = [1, 2, 3, 4, 5]
const double = value => value*2 //func q diz o que vai ser feito
console.log(numbers.map(double)) //func de atribuicao = func de callback

// Take an array of numbers and make them strings
names = ['anny', 'carol', 'izanderson', 'fatima', 'claudio']
const letter = (l, i) => l[0] //l é cada value de cada indicie do array
const newName = names.map(letter) // ao passar 1 parm to map, map sabe que é l de letter
console.log(newName)

// Capitalize each of an array of names
texts = ['game of thrones', 'doctor house', 'the flash']
const capitalize = first => first.charAt(0).toUpperCase(0) + first.slice(1)
console.log(texts.map(capitalize))

// Make an array of strings of the names
itens = [
    {
        id: 0,
        name: 'teclado',
    },
    {
        id: 1,
        name: 'monitor',
    },
    {
        id: 2,
        name: 'mouse',
    },
    {
        id: 3,
        name: 'fones'
    },
    {
        id: 4,
        name: 'planner'
    },
]

const myStrings = item => item.name // execução, onde acontece o return da func
console.log(itens.map(myStrings)) // atribuição, onde passamos o return da func acima

// Make an array of strings of the names saying whether or not they can go to The Matrix
actors = [
    {
        actor: 'Angelina Jolie',
        age: 50,
    },
    {
        actor: 'Bread Pitt',
        age: 51,
    },
    {
        actor: 'Kayne West',
        age: 40,
    },
    {
        actor: 'Eric Jones',
        age: 20
    }
]

const isMatrixActor = a => {
    if (a.age <= 40) {
        console.log(`${a.actor} can go to The Matrix`)
    } // execuçãp e retorno
}
const isPossible = actors.map(isMatrixActor) // atribuição do retorno

// Make an array of the names in h1s, and the ages in h2s
universities = [
    {
        university: 'Universidade Federal do Rio Grande do Norte',
        year: 1958,
    },
    {
        university: 'Universidade Federal de Santa Catarina',
        year: 1960,
    },
    {
        university: 'Universidade Federal da Paraíba',
        year: 1955,
    },
    {
        university: 'Universidade Federal do Ceará',
        year: 1954,
    }
]

const h1 = uni =>  uni.university
const res = universities.map(h1)
console.log(`<h1>${res}</h1>`)

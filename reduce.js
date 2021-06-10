// Turn an array of numbers into a total of all the numbers
numbers = [1, 2, 3, 4, 5, 6]
const total = (acc, el) => acc + el
console.log(numbers.reduce(total))

// Age medias with reduce()
infos = [
    {
        name: "Tainã",
        age: 27,
        vote: true
    },
    {
        name: "Franklin",
        age: 25,
        vote: true
    },
    {
        name: "Pedro",
        age: 26,
        vote: false
    },
    {
        name: "Erik",
        age: 27,
        vote: false
    },
    {
        name: "Caleb",
        age: 15,
        vote: true
    },
    {
        name: "Isaias",
        age: 55,
        vote: true
    }
]

// const size = infos.filter(obj => obj.age > 25).length

// const sumAges = (obj) => obj.age

// const add = (acc, el) => acc + el

// const sumTotalAges = infos.map(sumAges).reduce(add) 
// sumTotal is the simplified array made by map() and summed with reduce func
// reduce only works in a single array

// console.log(sumTotalAges/size)

const media = infos.filter(obj => obj.age > 25).map(obj => obj.age).reduce((acc, el) => {
    const newAge = acc.age + el
    const newQuant = acc.quant + 1
    return {
        age: newAge,
        quant: newQuant,
        media: newAge/newQuant,
    }
}, {age: 0, quant: 0, media: 0})

console.log(media)


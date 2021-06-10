// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
numbers = [1, 3, 5, 7, 9, 10, 12, 14]
// const newArray = n => console.log(numbers.filter(n >= 5))
const newArray = n => n >= 5
console.log(numbers.filter(newArray))

// Given an array of numbers, return a new array that only includes the even numbers.
numbers = [2, 4, 7, 9, 10, 13, 15]
const pares = value => value%2 == 0
console.log(numbers.filter(pares))

// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
strings = ['anny', 'fatima', 'claudio', 'gracinha', 'bebel']
const fiveLength = l => l.length < 5
console.log(strings.filter(fiveLength))

// Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
people = [
    {
        name: 'Anny Confessor',
        member: true 
    },
    {
        name: 'Izanderson Florencio',
        member: true,
    },
    {
        name: 'Otaviano Costa',
        member: false,
    },
    {
        name: 'Fabiana Santos',
        member: false,
    }
]

const olistMembers = m => {
     if (m.member == true) {
        console.log(`${m.name} é um membro da Olist`)
    }
}

console.log(people.filter(olistMembers))

// Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
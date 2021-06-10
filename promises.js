/*  promises are callback function basiclly, but it's called in a different way
promise is an object. It's an object that you add callbacks and not pass callbacks to it.
an important feature from promises is that we can pass a lot of thens repetivelly, one after another. 
With normal fuctions we should passa functions inside anothers functions, with more code lines */

// the resolve func inside the promise give us the value that will be use in 'then function'
// the promise inside the function that return another function

function Interval(min, max) {
    const a = min + 1
    const b = max + 1

    // what is used 
    return new Promise(resolve => {
        const random = Math.random() + a + b
        resolve(random)  
    })
}

Interval(1, 2).then(num => num*10).then(console.log)

// Promise Challenge
/* Usar o metodo readmeFile(), passando o caminho e uma func callback
Dentro da promise teremos encapsulada a chamada da func readmeFile()
O resultado da promise vai ser o conteudo do arquivo
Quando o user chamar o metodo then(), vai receber um valor. Esse valor vai ser o conteudo do arquivo
*/

// o meu objetivo é ler o arquivo através de um diretório

infos = [
    {
        name: "Bel",
        age: 17
    },
    {
        name: "Izanderson Florencio",
        age: 26
    },
    {
        name: "Thaise",
        age: 14
    },
    {
        name: "Thaila",
        age: 29
    },
    {
        name: "Naiara",
        age: 25
    },
    {
        name: "Felipe",
        age: 10
    },
    {
        name: "Dyana",
        age: 27
    },
    {
        name: "Guigui",
        age: 7
    }
]

function calculaMaior() {
    const maioresDeIdade = value => {
        if (value.age >= 18) {
            console.log(`${value.name} é maior de idade, ${value.age}`)

            return value.age
        }

        return "menor que 10"
    }
    console.log(infos.map(maioresDeIdade))

    const myPromise = new Promise(resolve => { 
        resolve(infos)
    })

    myPromise.then(valor => console.log(maioresDeIdade(valor)))
}

calculaMaior()


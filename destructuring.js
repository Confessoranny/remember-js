const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]

const numeros = [...numerosPares, ...numerosImpares]

// console.log(numeros)

var a
var b
[a, b, ...rest] = [1, 2, 3, 4, 5]
// console.log(a, b, rest)

const [c = { name: 'Izan' }] = [{ name: 'Anny' }]
// console.log(c)

var d = {
  user: 'Caroliny',
  vegana: true
}
var {user, vegana} = d
// console.log(user)
// console.log(vegana)

const ruas = [
   first = {
    endereco: 'Rua Alvorada das Minas',
    numero: 4998,
    habitantes: 3
  },
  second = {
    endereco: 'Avenida Comunidade em Ação',
    numero: 321,
    habitantes: 2
  }
]

const ruaTirth = [...ruas, tirth = {
  endereco: 'Rua Andrelândia',
  numero: 5060
}]

const {endereco, numero} = ruas
console.log(first.endereco, first.numero)

const { habitantes } = ruas
console.log(first.habitantes)

const ImprimirDados = ({endereco, numero}) => {
  // const {endereco, numero} = h
  console.log(second.endereco, second.numero)
}

ImprimirDados(ruas)












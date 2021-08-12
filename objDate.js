const Data = new Date()

function formatedDate (date) {
  return date < 10 ? `0${date}` : `${date}`
}

console.log(Data.toString())
console.log(formatedDate(Data.getMonth()), formatedDate(Data.getDay()), formatedDate(Data.getFullYear()))

console.log(Date.parse('Jan 31 1994'))

// get the day with getDay and change it
const myDate = new Date()
const myDay = myDate.getDay()

function getWeekDay(value) {
 let weekDay
 
    switch (value) {
    case 0:
      weekDay = "Domingo"
      return weekDay
    case 1:
      weekDay = "Segunda-feira"
      return weekDay
    case 2:
      weekDay = "Terça-feira"
      return weekDay
    case 3:
      weekDay = "Quarta-feira"
      return weekDay
    case 4:
      weekDay = "Quinta-feira"
      return weekDay
    case 5:
      weekDay = "Sexta-feira"
      return weekDay
    case 6:
      weekDay = "Sábado"
      return weekDay
  }
}

// const weekDayText = getWeekDay(myDay)
console.log(myDay, getWeekDay(myDay))
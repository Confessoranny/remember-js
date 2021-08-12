const Data = new Date()

function formatedDate (date) {
  return date < 10 ? `0${date}` : `${date}`
}

console.log(Data.toString())
console.log(formatedDate(Data.getMonth()), formatedDate(Data.getDay()), formatedDate(Data.getFullYear()))
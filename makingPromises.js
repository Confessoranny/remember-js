// Use Promise.resolve(value) to create a promise that will resolve with the value 3.
// Use Promise.reject(error) to create a promise that will reject with the string "Boo!"

// const somethingHappens = false

// const myPromise = new Promise((resolve, rejected) => {
//     if (somethingHappens == true) {
//         resolve(3)
//         console.log(loading)
//     }
//     else {
//         rejected("Boo!")
//     }
// })

// console.log(myPromise)

/* This is a common use of the Promise constructor. If you want to simulate waiting for a value, 
a common technique is to create a function like the following. It simply accepts a value, and a delayInMs, 
then returns a promise that will resolve with that value after that delay. */

function following(delayInMs) {
    return new Promise((resolve) => {
        setTimeout(function teste() {
            console.log("teste")
            resolve()
        }, delayInMs)
    }).then(console.log("resolveu", delayInMs)).catch(console.error())
}

following(1000)


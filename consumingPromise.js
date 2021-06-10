// This is a simple exercise in just waiting for a promise to be done before performing an action. The promise will resolve after a certain number of milliseconds
/* In this exercise, we will use then and catch for their most basic use: to consume the result of a successful async process, or to handle the error of a failed async process. 
We will be given a promise, a consumer, and a handler. Set it up so that, if the promise resolves, the consumer will be called with the result, 
and if the promise rejects, the handler will be called with the error. */

function fn(valor, valorMin) {
    return new Promise((resolve, reject) => {
        try {
            if (valor >= valorMin) {
                setTimeout(function time() {
                    console.log("Sucesso")
                    resolve(valor)
                }, 1000)
            }
            else {
                reject(`Ocorreu um erro, ${valor} < ${valorMin}`)
            }
        }
        catch(e) {
            throw console.log(e)
        }
    })
}

fn(100, 10).then(v => console.log(`The value is: ${v}`))

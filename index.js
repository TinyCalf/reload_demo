let A = require('./A')

let a = new A()

a.a = 0

setInterval(() => {
    a = a.reload()
    console.log(a.a)
    a.a++;
    a.func("hello")
    a.b.func("hello")
}, 1000)


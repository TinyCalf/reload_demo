const AbstructReloadable = require("./AbstructReloadable")
const B = require("./B")

class A extends AbstructReloadable {
    constructor() {
        super(__filename);
        this.a = 0
        this.b = new B();
    }

    func(str) {
        console.log("i am function:", str);
    }
}

let support = Class => {
    var c = new Class({});
    Object.getOwnPropertyNames(Object.getPrototypeOf(c))
        .forEach(name => {
            if (name == "constructor") return;
            Object.defineProperty(
                Class.prototype,
                name,
                { enumerable: true }
            );
        });

}

support(A)

module.exports = A
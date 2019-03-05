const AbstructReloadable = require("./AbstructReloadable")
class A extends AbstructReloadable {
    constructor() {
        super(__filename);
        this.a = 0
        this.b = 1
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
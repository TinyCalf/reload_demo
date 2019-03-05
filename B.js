const AbstructReloadable = require("./AbstructReloadable")
class B extends AbstructReloadable {
    constructor() {
        super(__filename);
        this.a = 0
        this.b = 1
    }

    func(str) {
        console.log("I am function in B:", str);
    }

}

module.exports = B
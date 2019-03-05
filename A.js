const AbstructReloadable = require("./AbstructReloadable")
module.exports = class A extends AbstructReloadable {
    constructor() {
        super(__filename);
        this.a = 0
        this.b = 1
    }

    func(str) {
        console.log("i am function:", str);
    }

}
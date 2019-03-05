module.exports = class AbstructReloadable {
    constructor(filename) {
        this.filename = filename;
    }

    reload() {
        delete require.cache[require.resolve(this.filename)]
        let SelfClass = require(this.filename)
        let newInstance = new SelfClass()
        for (var s in this) {
            if (this[s] instanceof Function)
                continue;
            newInstance[s] = this[s]
        }
        return newInstance
    }
}
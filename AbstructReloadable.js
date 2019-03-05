module.exports = class AbstructReloadable {
    constructor(filename) {
        this._filename = filename;
    }

    reload() {
        delete require.cache[require.resolve(this._filename)];
        let SelfClass = require(this._filename);
        let newInstance = new SelfClass();
        for (var s in this) {
            if (this[s] instanceof Function)
                continue;
            if (this[s] instanceof AbstructReloadable) {
                newInstance[s] = this[s].reload();
            } else {
                newInstance[s] = this[s];
            }
        }
        return newInstance;
    }

    // require(as, path) {
    //     this._requirementsPaths.push(path);
    //     this[as] = require(path);
    // }
}
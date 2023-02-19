"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Trigger {
    constructor() {
        this.set = new Set();
    }
    add(callback) {
        if (!callback)
            return DO_NOTHING;
        this.set.add(callback);
        return () => this.set.delete(callback);
    }
    fire(params) {
        this.set.forEach(callback => {
            try {
                if (callback)
                    callback(...params);
            }
            catch (error) {
                console.warn('Error while firing a callback: ', error);
            }
        });
    }
}
exports.default = Trigger;
function DO_NOTHING() {
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Serializable = /** @class */ (function () {
    function Serializable() {
    }
    Serializable.prototype.fillFromJSON = function (json) {
        if (!json || json.length == 0)
            return null;
        var jsonObj = JSON.parse(json);
        for (var propName in jsonObj) {
            if (this.hasOwnProperty(propName)) {
                this[propName] = jsonObj[propName];
            }
        }
        return this;
    };
    return Serializable;
}());
exports.Serializable = Serializable;
//# sourceMappingURL=serializable.js.map
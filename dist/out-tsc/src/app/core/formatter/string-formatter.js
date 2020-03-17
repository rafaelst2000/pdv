"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringFormatter = /** @class */ (function () {
    function StringFormatter() {
    }
    StringFormatter.normalizeString = function (texto) {
        return texto.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
    };
    return StringFormatter;
}());
exports.StringFormatter = StringFormatter;
//# sourceMappingURL=string-formatter.js.map
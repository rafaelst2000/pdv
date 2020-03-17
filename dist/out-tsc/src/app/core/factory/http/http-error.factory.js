"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var HttpErrorFactory = /** @class */ (function () {
    function HttpErrorFactory() {
    }
    HttpErrorFactory.create = function (mensagem, httpStatus) {
        if (httpStatus === void 0) { httpStatus = 400; }
        return new http_1.HttpErrorResponse({
            error: {
                body: [{ message: mensagem }]
            },
            status: httpStatus
        });
    };
    return HttpErrorFactory;
}());
exports.HttpErrorFactory = HttpErrorFactory;
//# sourceMappingURL=http-error.factory.js.map
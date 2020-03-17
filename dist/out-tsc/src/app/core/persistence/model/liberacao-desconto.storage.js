"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var serializable_1 = require("./serializable");
var persistence_enum_1 = require("./persistence.enum");
var LiberacaoDescontoStorage = /** @class */ (function (_super) {
    __extends(LiberacaoDescontoStorage, _super);
    function LiberacaoDescontoStorage(codigoUsuarioLiberacao) {
        var _this = _super.call(this) || this;
        _this.codigoUsuarioLiberacao = codigoUsuarioLiberacao;
        return _this;
    }
    LiberacaoDescontoStorage.prototype.persistenceKey = function () {
        return persistence_enum_1.PersistenceEnum.LIBERACAO_DESCONTO;
    };
    return LiberacaoDescontoStorage;
}(serializable_1.Serializable));
exports.LiberacaoDescontoStorage = LiberacaoDescontoStorage;
//# sourceMappingURL=liberacao-desconto.storage.js.map
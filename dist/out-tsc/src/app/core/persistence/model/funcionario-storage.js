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
var persistence_enum_1 = require("./persistence.enum");
var serializable_1 = require("./serializable");
var FuncionarioStorage = /** @class */ (function (_super) {
    __extends(FuncionarioStorage, _super);
    function FuncionarioStorage(usuario, nome, codUsuario, codFuncionario, codAloRecurso) {
        var _this = _super.call(this) || this;
        _this.usuario = usuario;
        _this.nome = nome;
        _this.codUsuario = codUsuario;
        _this.codFuncionario = codFuncionario;
        _this.codAloRecurso = codAloRecurso;
        return _this;
    }
    FuncionarioStorage.prototype.persistenceKey = function () {
        return persistence_enum_1.PersistenceEnum.FUNCIONARIO;
    };
    return FuncionarioStorage;
}(serializable_1.Serializable));
exports.FuncionarioStorage = FuncionarioStorage;
//# sourceMappingURL=funcionario-storage.js.map
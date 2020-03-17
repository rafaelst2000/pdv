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
var FilialStorage = /** @class */ (function (_super) {
    __extends(FilialStorage, _super);
    function FilialStorage(codigo, cnpj, filialPanvelGo, endereco, gravaVendaNaoEfetivada, conferenciaPreVendaOmni, conferenciaVendaOmni, checkoutOmni) {
        var _this = _super.call(this) || this;
        _this.codigo = codigo;
        _this.cnpj = cnpj;
        _this.filialPanvelGo = filialPanvelGo;
        _this.endereco = endereco;
        _this.gravaVendaNaoEfetivada = gravaVendaNaoEfetivada;
        _this.conferenciaPreVendaOmni = conferenciaPreVendaOmni;
        _this.conferenciaVendaOmni = conferenciaVendaOmni;
        _this.checkoutOmni = checkoutOmni;
        return _this;
    }
    FilialStorage.prototype.persistenceKey = function () {
        return persistence_enum_1.PersistenceEnum.FILIAL;
    };
    return FilialStorage;
}(serializable_1.Serializable));
exports.FilialStorage = FilialStorage;
//# sourceMappingURL=filial-storage.js.map
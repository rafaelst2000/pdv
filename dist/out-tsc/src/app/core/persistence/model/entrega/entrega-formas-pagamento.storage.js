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
var serializable_1 = require("../serializable");
var persistence_enum_1 = require("../persistence.enum");
var EntregaFormasPagamentoStorage = /** @class */ (function (_super) {
    __extends(EntregaFormasPagamentoStorage, _super);
    function EntregaFormasPagamentoStorage(cpfTerceiro, enderecoEntrega, filialEntrega, formaEntrega, horarioRota, itensCesta, previsaoEntrega, taxaEntrega, reservaLocker, telefone, tipoEntrega) {
        var _this = _super.call(this) || this;
        _this.cpfTerceiro = cpfTerceiro;
        _this.enderecoEntrega = enderecoEntrega;
        _this.filialEntrega = filialEntrega;
        _this.formaEntrega = formaEntrega;
        _this.horarioRota = horarioRota;
        _this.itensCesta = itensCesta;
        _this.previsaoEntrega = previsaoEntrega;
        _this.taxaEntrega = taxaEntrega;
        _this.reservaLocker = reservaLocker;
        _this.telefone = telefone;
        _this.tipoEntrega = tipoEntrega;
        return _this;
    }
    EntregaFormasPagamentoStorage.prototype.persistenceKey = function () {
        return persistence_enum_1.PersistenceEnum.ENTREGA_FORMAS_PAGAMENTO;
    };
    return EntregaFormasPagamentoStorage;
}(serializable_1.Serializable));
exports.EntregaFormasPagamentoStorage = EntregaFormasPagamentoStorage;
//# sourceMappingURL=entrega-formas-pagamento.storage.js.map
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
var EntregaStorage = /** @class */ (function (_super) {
    __extends(EntregaStorage, _super);
    function EntregaStorage(codigoFormaEntrega, codigoTipoEntrega, cpfRetiradaBalcao, codigoRota, dataHoraEntrega, dataHoraSaidaRota, codigoTaxa, tipoTaxa, valorTaxa, codigoLiberadorTaxa, convenioPagaTaxa, idLocker, numeroPortaLocker, numeroReservaLocker, senhaReservaLocker, nomeLocker) {
        var _this = _super.call(this) || this;
        _this.codigoFormaEntrega = codigoFormaEntrega;
        _this.codigoTipoEntrega = codigoTipoEntrega;
        _this.cpfRetiradaBalcao = cpfRetiradaBalcao;
        _this.codigoRota = codigoRota;
        _this.dataHoraEntrega = dataHoraEntrega;
        _this.dataHoraSaidaRota = dataHoraSaidaRota;
        _this.codigoTaxa = codigoTaxa;
        _this.tipoTaxa = tipoTaxa;
        _this.valorTaxa = valorTaxa;
        _this.codigoLiberadorTaxa = codigoLiberadorTaxa;
        _this.convenioPagaTaxa = convenioPagaTaxa;
        _this.idLocker = idLocker;
        _this.numeroPortaLocker = numeroPortaLocker;
        _this.numeroReservaLocker = numeroReservaLocker;
        _this.senhaReservaLocker = senhaReservaLocker;
        _this.nomeLocker = nomeLocker;
        return _this;
    }
    EntregaStorage.prototype.persistenceKey = function () {
        return persistence_enum_1.PersistenceEnum.ENTREGA_FORMAS_PAGAMENTO;
    };
    return EntregaStorage;
}(serializable_1.Serializable));
exports.EntregaStorage = EntregaStorage;
//# sourceMappingURL=entrega.storage.js.map
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
var persistence_enum_1 = require("../persistence.enum");
var serializable_1 = require("../serializable");
var PbmFuncionalStorage = /** @class */ (function (_super) {
    __extends(PbmFuncionalStorage, _super);
    function PbmFuncionalStorage(aprovada, dataPreAutorizacao, codigoPreAutorizacao, codigoConvenio, ean, precoPor, quantidadeVenda, medicamento, precoPanvel, solicitado, porcentagemAutorizado, precoFinal, autorizado, bpm, receita, itensRejeitados, itensAprovados, totalAutorizado) {
        var _this = _super.call(this) || this;
        _this.aprovada = aprovada;
        _this.dataPreAutorizacao = dataPreAutorizacao;
        _this.codigoPreAutorizacao = codigoPreAutorizacao;
        _this.codigoConvenio = codigoConvenio;
        _this.ean = ean;
        _this.precoPor = precoPor;
        _this.quantidadeVenda = quantidadeVenda;
        _this.medicamento = medicamento;
        _this.precoPanvel = precoPanvel;
        _this.solicitado = solicitado;
        _this.porcentagemAutorizado = porcentagemAutorizado;
        _this.precoFinal = precoFinal;
        _this.autorizado = autorizado;
        _this.bpm = bpm;
        _this.receita = receita;
        _this.itensRejeitados = itensRejeitados;
        _this.itensAprovados = itensAprovados;
        _this.totalAutorizado = totalAutorizado;
        return _this;
    }
    PbmFuncionalStorage.prototype.persistenceKey = function () {
        return persistence_enum_1.PersistenceEnum.PBM_FUNCIONAL;
    };
    return PbmFuncionalStorage;
}(serializable_1.Serializable));
exports.PbmFuncionalStorage = PbmFuncionalStorage;
//# sourceMappingURL=pbm-funcional.storage.js.map
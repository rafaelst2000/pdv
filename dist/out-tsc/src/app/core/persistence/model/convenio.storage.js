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
var ConvenioStorage = /** @class */ (function (_super) {
    __extends(ConvenioStorage, _super);
    function ConvenioStorage(modoConvenio, codigoConvenio, descricaoConvenio, numeroCartao, permiteCombinarConvenio, tipoPagamento, saldo, aplicarDescontos, nomeAssociado, codigoAssociado, matriculaAssociado, identificacaoConvenio, filialConvenio, permiteCombinarFidelidade, codigoConvenioDesconto, saldoFidelidade, fidelidadeBloqueado, totalPontos, trocaSacolaPontos, codigoDependente, nomeDependente, permiteMultiplasFormas, permiteCombinarConvenioPbm, utilizaCartao, utilizaSenha, cpf, pagamentoTaxaEntrega, empresaCartao, consultaApiEntidade, consultaApiAutorizacao) {
        if (aplicarDescontos === void 0) { aplicarDescontos = false; }
        var _this = _super.call(this) || this;
        _this.modoConvenio = modoConvenio;
        _this.codigoConvenio = codigoConvenio;
        _this.descricaoConvenio = descricaoConvenio;
        _this.numeroCartao = numeroCartao;
        _this.permiteCombinarConvenio = permiteCombinarConvenio;
        _this.tipoPagamento = tipoPagamento;
        _this.saldo = saldo;
        _this.aplicarDescontos = aplicarDescontos;
        _this.nomeAssociado = nomeAssociado;
        _this.codigoAssociado = codigoAssociado;
        _this.matriculaAssociado = matriculaAssociado;
        _this.identificacaoConvenio = identificacaoConvenio;
        _this.filialConvenio = filialConvenio;
        _this.permiteCombinarFidelidade = permiteCombinarFidelidade;
        _this.codigoConvenioDesconto = codigoConvenioDesconto;
        _this.saldoFidelidade = saldoFidelidade;
        _this.fidelidadeBloqueado = fidelidadeBloqueado;
        _this.totalPontos = totalPontos;
        _this.trocaSacolaPontos = trocaSacolaPontos;
        _this.codigoDependente = codigoDependente;
        _this.nomeDependente = nomeDependente;
        _this.permiteMultiplasFormas = permiteMultiplasFormas;
        _this.permiteCombinarConvenioPbm = permiteCombinarConvenioPbm;
        _this.utilizaCartao = utilizaCartao;
        _this.utilizaSenha = utilizaSenha;
        _this.cpf = cpf;
        _this.pagamentoTaxaEntrega = pagamentoTaxaEntrega;
        _this.empresaCartao = empresaCartao;
        _this.consultaApiEntidade = consultaApiEntidade;
        _this.consultaApiAutorizacao = consultaApiAutorizacao;
        return _this;
    }
    ConvenioStorage.prototype.persistenceKey = function () {
        return persistence_enum_1.PersistenceEnum.CONVENIOS;
    };
    return ConvenioStorage;
}(serializable_1.Serializable));
exports.ConvenioStorage = ConvenioStorage;
//# sourceMappingURL=convenio.storage.js.map
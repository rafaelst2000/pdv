"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RegraFiscal = /** @class */ (function () {
    function RegraFiscal(sequenciaRegra, codigoLegenda, codigoCfop, codigoSituacaoTributaria, aliquotaIcms, mensagemFiscal, percentualIsencao, somaIsencaoComPromocao) {
        this.sequenciaRegra = sequenciaRegra;
        this.codigoLegenda = codigoLegenda;
        this.codigoCfop = codigoCfop;
        this.codigoSituacaoTributaria = codigoSituacaoTributaria;
        this.aliquotaIcms = aliquotaIcms;
        this.mensagemFiscal = mensagemFiscal;
        this.percentualIsencao = percentualIsencao;
        this.somaIsencaoComPromocao = somaIsencaoComPromocao;
    }
    return RegraFiscal;
}());
exports.RegraFiscal = RegraFiscal;
//# sourceMappingURL=regra-fiscal.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AutorizacaoPbmItemCesta = /** @class */ (function () {
    function AutorizacaoPbmItemCesta(codigoAdminConvenios, tipoPrograma, nsuAutorizacao, identificadorTransacao, cpfBeneficiario, cpfAtendimento, percentualDesconto, valorDesconto, valorConvenio, cartaoBeneficiario, precoAquisicaoUnitario) {
        this.codigoAdminConvenios = codigoAdminConvenios;
        this.tipoPrograma = tipoPrograma;
        this.nsuAutorizacao = nsuAutorizacao;
        this.identificadorTransacao = identificadorTransacao;
        this.cpfBeneficiario = cpfBeneficiario;
        this.cpfAtendimento = cpfAtendimento;
        this.percentualDesconto = percentualDesconto;
        this.valorDesconto = valorDesconto;
        this.valorConvenio = valorConvenio;
        this.cartaoBeneficiario = cartaoBeneficiario;
        this.precoAquisicaoUnitario = precoAquisicaoUnitario;
    }
    AutorizacaoPbmItemCesta.equals = function (autorizacaoA, autorizacaoB) {
        return autorizacaoA.nsuAutorizacao === autorizacaoB.nsuAutorizacao
            && autorizacaoA.identificadorTransacao === autorizacaoB.identificadorTransacao;
    };
    return AutorizacaoPbmItemCesta;
}());
exports.AutorizacaoPbmItemCesta = AutorizacaoPbmItemCesta;
//# sourceMappingURL=autorizacao-pbm-item-cesta.js.map
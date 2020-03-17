"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PreAutorizacaoPbmStorage = /** @class */ (function () {
    function PreAutorizacaoPbmStorage(aprovada, origem, opcaoOperador, usuario, numeroPreAutorizacao, identificadorTransacao, cnpjOrigem, cpf, cpfAtendimento, cartao, itens, administradora, codigoAdminConvenio) {
        this.aprovada = aprovada;
        this.origem = origem;
        this.opcaoOperador = opcaoOperador;
        this.usuario = usuario;
        this.numeroPreAutorizacao = numeroPreAutorizacao;
        this.identificadorTransacao = identificadorTransacao;
        this.cnpjOrigem = cnpjOrigem;
        this.cpf = cpf;
        this.cpfAtendimento = cpfAtendimento;
        this.cartao = cartao;
        this.itens = itens;
        this.administradora = administradora;
        this.codigoAdminConvenio = codigoAdminConvenio;
    }
    return PreAutorizacaoPbmStorage;
}());
exports.PreAutorizacaoPbmStorage = PreAutorizacaoPbmStorage;
//# sourceMappingURL=pre-autorizacao-pbm.storage.js.map
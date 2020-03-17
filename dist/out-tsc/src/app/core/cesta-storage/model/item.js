"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item = /** @class */ (function () {
    function Item(contempladoConvenio, produto, quantidade, receita, associado, codigoLiberador, categoriaItem, identificadorUnico, pbmAutorizada, naoPossuiEstoque, quantidadeEntregar, controle, conferido, vendaAntecipada, planoBeneficioMedico, autorizacoesPbms, itemPreVenda, vendaFormula) {
        if (contempladoConvenio === void 0) { contempladoConvenio = 'N'; }
        if (conferido === void 0) { conferido = false; }
        if (itemPreVenda === void 0) { itemPreVenda = false; }
        this.contempladoConvenio = contempladoConvenio;
        this.produto = produto;
        this.quantidade = quantidade;
        this.receita = receita;
        this.associado = associado;
        this.codigoLiberador = codigoLiberador;
        this.categoriaItem = categoriaItem;
        this.identificadorUnico = identificadorUnico;
        this.pbmAutorizada = pbmAutorizada;
        this.naoPossuiEstoque = naoPossuiEstoque;
        this.quantidadeEntregar = quantidadeEntregar;
        this.controle = controle;
        this.conferido = conferido;
        this.vendaAntecipada = vendaAntecipada;
        this.planoBeneficioMedico = planoBeneficioMedico;
        this.autorizacoesPbms = autorizacoesPbms;
        this.itemPreVenda = itemPreVenda;
        this.vendaFormula = vendaFormula;
    }
    return Item;
}());
exports.Item = Item;
//# sourceMappingURL=item.js.map
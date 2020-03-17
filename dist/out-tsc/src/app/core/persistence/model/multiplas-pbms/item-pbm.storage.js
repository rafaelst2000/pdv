"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItemPbmStorage = /** @class */ (function () {
    function ItemPbmStorage(codigoCanalVenda, codigoFilial, codigoItem, codigoBarras, nomenclaturaVarejo, quantidadeTotal, quantidadeAutorizada, precoBruto, precoLiquido, porcetagemAutorizado, pbmAplicada, pbmAutorizada, itens, status, valorDesconto) {
        this.codigoCanalVenda = codigoCanalVenda;
        this.codigoFilial = codigoFilial;
        this.codigoItem = codigoItem;
        this.codigoBarras = codigoBarras;
        this.nomenclaturaVarejo = nomenclaturaVarejo;
        this.quantidadeTotal = quantidadeTotal;
        this.quantidadeAutorizada = quantidadeAutorizada;
        this.precoBruto = precoBruto;
        this.precoLiquido = precoLiquido;
        this.porcetagemAutorizado = porcetagemAutorizado;
        this.pbmAplicada = pbmAplicada;
        this.pbmAutorizada = pbmAutorizada;
        this.itens = itens;
        this.status = status;
        this.valorDesconto = valorDesconto;
        this.selecionado = false;
    }
    return ItemPbmStorage;
}());
exports.ItemPbmStorage = ItemPbmStorage;
//# sourceMappingURL=item-pbm.storage.js.map
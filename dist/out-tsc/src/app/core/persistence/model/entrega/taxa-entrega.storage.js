"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persistence_enum_1 = require("../persistence.enum");
var TaxaEntregaStorage = /** @class */ (function () {
    function TaxaEntregaStorage(codigo, liberacaoTaxaFrete, quantidade, tipoItemPedido, valorTaxa) {
        this.codigo = codigo;
        this.liberacaoTaxaFrete = liberacaoTaxaFrete;
        this.quantidade = quantidade;
        this.tipoItemPedido = tipoItemPedido;
        this.valorTaxa = valorTaxa;
    }
    TaxaEntregaStorage.prototype.persistenceKey = function () {
        return persistence_enum_1.PersistenceEnum.TAXA_ENTREGA;
    };
    return TaxaEntregaStorage;
}());
exports.TaxaEntregaStorage = TaxaEntregaStorage;
//# sourceMappingURL=taxa-entrega.storage.js.map
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
var ItemLiberacaoDescontoStorage = /** @class */ (function (_super) {
    __extends(ItemLiberacaoDescontoStorage, _super);
    function ItemLiberacaoDescontoStorage(codigo, alcada, bloquearAlteracao, desconto, identificadorUnico, itemCesta, percentualDesconto) {
        var _this = _super.call(this) || this;
        _this.codigo = codigo;
        _this.alcada = alcada;
        _this.bloquearAlteracao = bloquearAlteracao;
        _this.desconto = desconto;
        _this.identificadorUnico = identificadorUnico;
        _this.itemCesta = itemCesta;
        _this.percentualDesconto = percentualDesconto;
        return _this;
    }
    ItemLiberacaoDescontoStorage.prototype.persistenceKey = function () {
        return persistence_enum_1.PersistenceEnum.ITENS_LIBERACAO_DESCONTO;
    };
    return ItemLiberacaoDescontoStorage;
}(serializable_1.Serializable));
exports.ItemLiberacaoDescontoStorage = ItemLiberacaoDescontoStorage;
//# sourceMappingURL=itens-liberacao-desconto.storage.js.map
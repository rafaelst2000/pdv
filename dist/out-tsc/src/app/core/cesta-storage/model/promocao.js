"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promocao = /** @class */ (function () {
    function Promocao(codigoFilialPromotora, codigoPromocao, percentualDesconto, tipoPromocao, dataInicio, dataFinal, perfil) {
        this.codigoFilialPromotora = codigoFilialPromotora;
        this.codigoPromocao = codigoPromocao;
        this.percentualDesconto = percentualDesconto;
        this.tipoPromocao = tipoPromocao;
        this.dataInicio = dataInicio;
        this.dataFinal = dataFinal;
        this.perfil = perfil;
    }
    return Promocao;
}());
exports.Promocao = Promocao;
//# sourceMappingURL=promocao.js.map
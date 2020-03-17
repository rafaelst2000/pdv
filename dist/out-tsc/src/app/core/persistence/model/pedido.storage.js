"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PedidoStorage = /** @class */ (function () {
    function PedidoStorage(tipoPedido, origemPedido, pedidoUrgente, podePontuar, valorTotalPedido, codigoSituacaoPedido, imprimeNfe, conveniosUtilizados, codigoFilial, codigoFilialCobranca, utilizaPanvelGo, codigoRecurso, usuario, itens, cliente, enderecoEntrega, enderecoCobranca, formaPagamentoDinheiro, formaPagamentoCaixa, formaPagamentoConvenio, formaPagamentoPbm, entrega) {
        this.tipoPedido = tipoPedido;
        this.origemPedido = origemPedido;
        this.pedidoUrgente = pedidoUrgente;
        this.podePontuar = podePontuar;
        this.valorTotalPedido = valorTotalPedido;
        this.codigoSituacaoPedido = codigoSituacaoPedido;
        this.imprimeNfe = imprimeNfe;
        this.conveniosUtilizados = conveniosUtilizados;
        this.codigoFilial = codigoFilial;
        this.codigoFilialCobranca = codigoFilialCobranca;
        this.utilizaPanvelGo = utilizaPanvelGo;
        this.codigoRecurso = codigoRecurso;
        this.usuario = usuario;
        this.itens = itens;
        this.cliente = cliente;
        this.enderecoEntrega = enderecoEntrega;
        this.enderecoCobranca = enderecoCobranca;
        this.formaPagamentoDinheiro = formaPagamentoDinheiro;
        this.formaPagamentoCaixa = formaPagamentoCaixa;
        this.formaPagamentoConvenio = formaPagamentoConvenio;
        this.formaPagamentoPbm = formaPagamentoPbm;
        this.entrega = entrega;
    }
    return PedidoStorage;
}());
exports.PedidoStorage = PedidoStorage;
//# sourceMappingURL=pedido.storage.js.map
export class PedidoStorage {

    constructor(
        public tipoPedido?: number,
        public origemPedido?: string,
        public pedidoUrgente?: string,
        public podePontuar?: boolean,
        public valorTotalPedido?: number,
        public codigoSituacaoPedido?: number,
        public imprimeNfe?: string,
        public conveniosUtilizados?:Array<any>[],
        public codigoFilial?: number,
        public codigoFilialCobranca?: number,
        public utilizaPanvelGo?: boolean,
        public codigoRecurso?: number,
        public usuario?: number,
        public itens?: any[],
        public cliente?: any,
        public enderecoEntrega?: any,
        public enderecoCobranca?: any,
        public formaPagamentoDinheiro?: any,
        public formaPagamentoCaixa?: any,        
        public formaPagamentoConvenio?: any,
        public formaPagamentoPbm?:any,
        public entrega?: any,
    ){}
}

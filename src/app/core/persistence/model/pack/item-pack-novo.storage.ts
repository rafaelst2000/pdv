export class ItemPackNovoStorage {

    constructor(
        public codigoItem?: number,
        public nomeItem?: string,
        public precoBase?: number,
        public percentualDesconto?: number,
        public codigoFilial?: number,
        public sequenciaItem?: number,
        public precoPromo?: number,
        public codigoPack?: number,
        public numeroPack?: number,
        public valorAporteFornecedor?: number,
        public valorAporteTrade?: number,
        public valorAporteExtra?: number,
        public isPbmConvenio?: boolean
        ) { }

}
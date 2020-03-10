
export class ItemPreAutorizadoStorage {
    constructor (
        public ean?: number,
        public quantidadePreAutorizada?: number,
        public precoLiquidoPbm?: number,
        public percentualDeDesconto?: number,
        public valorSubsidiado?: number,
        public precoLiquidoPreAutorizado?: number,
        public percDescontoPreAutorizado?: number,
        public statusPreAutorizacao?: boolean,
        public valorConvenioPreAutorizado?: number,
        public valorDescontoPreAutorizado?: number
    ) {}
}
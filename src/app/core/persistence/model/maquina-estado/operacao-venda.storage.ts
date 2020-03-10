export class OperacaoVendaStorage {
    constructor(
        public numeroCupom?: number,
        public codigoFilial?: number,
        public documentoSaida?: number,
        public imprimeNfe?: string,
    ) {}
}
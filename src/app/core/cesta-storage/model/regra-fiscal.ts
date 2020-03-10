export class RegraFiscal {
    constructor(
        public sequenciaRegra: number,
        public codigoLegenda: number,
        public codigoCfop: number,
        public codigoSituacaoTributaria: number,
        public aliquotaIcms: number,
        public mensagemFiscal: string,
        public percentualIsencao: number,
        public somaIsencaoComPromocao: boolean
    ) {

    }
}
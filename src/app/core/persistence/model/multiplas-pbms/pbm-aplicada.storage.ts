export class PbmAplicadaStorage {

    constructor (
        public codigoAdminConvenios?: number,
        public tipoPrograma?: string,
        public nsuAutorizacao?: string,
        public identificadorTransacao?: string,
        public cpfBeneficiario?: number,
        public cpfAtendimento?: number,
        public percentualDesconto?: number,
        public valorDesconto?: number,
        public valorConvenio?: number,
        public cartaoBeneficiario?: string,
        public precoAquisicaoUnitario?: number
    ) { }

}
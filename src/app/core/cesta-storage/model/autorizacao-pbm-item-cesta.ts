export class AutorizacaoPbmItemCesta {
    constructor(
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
    ) {}

    public static equals(autorizacaoA: AutorizacaoPbmItemCesta, autorizacaoB: AutorizacaoPbmItemCesta) {
        return autorizacaoA.nsuAutorizacao === autorizacaoB.nsuAutorizacao
            && autorizacaoA.identificadorTransacao === autorizacaoB.identificadorTransacao;
    }
}
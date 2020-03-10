export class ConvenioModel {
    constructor(
        public modoConvenio: number,
        public filialConvenio: number,
        public codigoConvenio: number,
        public descricaoConvenio: string,
        public permiteCombinarConvenio: boolean,
        public tipoPagamento: string,
        public saldo: number,
        public aplicarDescontos: boolean,
        public nomeAssociado: string,
        public codigoAssociado: number,
        public matriculaAssociado: string,
        public cpf: string,
        public identificacaoConvenio: string,
        public permiteMultiplasFormas: boolean,
        public permiteCombinarConvenioPbm: boolean,
        public utilizaSenha: boolean,
        public pagamentoTaxaEntrega: string
    ){}
}
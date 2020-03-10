export class EnderecoEletronicoModel {
    constructor (
        public idEmail?: number,
        public codigoMeioComunicacao?: number,
        public email?: string,
        public preferencial?: string
    ) {}
}
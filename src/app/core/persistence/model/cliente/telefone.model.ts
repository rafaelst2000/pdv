export class TelefoneModel {
    constructor (
        public codigoMeioComunicacao?: number,
        public ddd?: string,
        public numero?: string,
        public tipoTelefone?: string,
        public preferencial?: string,
        public ramal?: string,
        public telefoneCompleto?: string
    ) {}
}
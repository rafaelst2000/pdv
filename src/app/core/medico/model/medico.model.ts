export class MedicoModel{
    constructor(
        public nome?: string,
        public codigoRegistro?: number,
        public codigoEntidadeComercial?: number,
        public tipo?: number,
        public tipoDescricao?: string,
        public uf?: string
    ){}
}
import { TipoEnderecoStorage } from './tipo-endereco.storage';

export class EnderecoModel {
    constructor (
        public tipoLogradouro?: string,
        public cep?: number,
        public logradouro?: string,
        public numero?: number,
        public complemento?: string,
        public bairro?: string,
        public cidade?: string,
        public uf?: string,
        public tiposEndereco?: any[],
        public sequencidaEnderecoEntidade?: number,
        public codigoEntidadeComercial?: number,
        public referencia?: string,
        public codigoLogradouro?: number,
        public codigoLocalidade?: number,
        public logradouroTextoBusca?: string
    ) {}
}
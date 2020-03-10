import { PersistenceEnum } from "../persistence.enum";

export class EnderecoEntregaStorage {
    constructor(
        public bairro?: string,
        public cep?: number,
        public cidade?: string,
        public codigoEntidadeComercial?: number,
        public codigoLocalidade?: number,
        public codigoLogradouro?: number,
        public logradouro?: string,
        public complemento?: string,
        public numero?: number,
        public sequenciaEnderecoEntidade?: number,
        public tipoLogradouro?: string,
        public tiposEndereco?: string[],
        public uf?: string,
        public referencia?: string,
        public numeroEndereco?: number
    ) {}

    public persistenceKey(): PersistenceEnum {
        return PersistenceEnum.ENDERECO_ENTREGA;
    }
}
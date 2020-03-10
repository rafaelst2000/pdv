import { Serializable } from "../serializable";
import { PersistenceEnum } from "../persistence.enum";

export class AutorizacaoEmpresaCartaoStorage extends Serializable {
    constructor(
        public id?: string,
        public codigoAutorizacao?: string,
        public statusAutorizacao?: string,
        public valorAutorizado?: number,
        public nomeEntidade?: string,
        public codigoAutorizacaoExterna?: string,
        public nomeAssociado?: string,
        public documentoAssociado?: number,
        public dataTransacao?: string,
        public pagamento?: any
    ) {
        super();
    }

    public persistenceKey(): PersistenceEnum {
        return PersistenceEnum.EMPRESA_CARTAO;
    }
}

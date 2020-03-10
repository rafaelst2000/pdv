import { Serializable } from './serializable';
import { PersistenceEnum } from './persistence.enum';

export class LiberacaoFreteStorage extends Serializable {
    constructor(
        public codigoLiberadorTaxa?: number,
        public codigoUsuario?: number,
        public nomeUsuario?: string
    ) {
        super();
    }

    public persistenceKey(): PersistenceEnum {
        return PersistenceEnum.LIBERACAO_FRETE;
    }
}
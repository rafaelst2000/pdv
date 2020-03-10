import { Serializable } from './serializable';
import { PersistenceEnum } from './persistence.enum';

export class LiberacaoDescontoStorage extends Serializable {
    constructor(
        public codigoUsuarioLiberacao?: number
    ) {
        super();
    }

    public persistenceKey(): PersistenceEnum {
        return PersistenceEnum.LIBERACAO_DESCONTO;
    }
}
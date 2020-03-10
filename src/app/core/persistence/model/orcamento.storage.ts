import { Serializable } from './serializable';
import { PersistenceEnum } from './persistence.enum';

export class OrcamentoStorage extends Serializable {

    constructor(
        public numeroOrcamento?: number
    ) {
        super();
    }

    persistenceKey(): PersistenceEnum {
        return PersistenceEnum.ORCAMENTO;
    }
}
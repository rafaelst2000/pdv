import { PersistenceEnum } from '../persistence.enum';
import { Serializable } from '../serializable';

export class PoliticasDescontoStorage extends Serializable {

    constructor(
        public codigoOferta?: number,
        public mascaraOferta?: string) {
        super();
    }

    public persistenceKey(): PersistenceEnum {
        return PersistenceEnum.POLITICAS;
    }

}
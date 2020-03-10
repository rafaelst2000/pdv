import { ItemPackNovoStorage } from './item-pack-novo.storage';
import { Serializable } from '../serializable';
import { PersistenceEnum } from '../persistence.enum';

export class PackNovoStorage extends Serializable {

    constructor(
        public codigoPack?: number,
        public descricaoPack?: string,
        public itensPack?: Array<ItemPackNovoStorage>) {
        super();
    }

    public persistenceKey(): PersistenceEnum {
        return PersistenceEnum.PACK;
    }

}
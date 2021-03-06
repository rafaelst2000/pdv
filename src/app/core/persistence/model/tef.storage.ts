import { TefRecargaStorage } from './tef-recarga.storage';
import { Serializable } from './serializable';
import { PersistenceEnum } from './persistence.enum';
import { CupomTefStorage } from './cupom-tef.storage';

export class TefStorage extends Serializable {

    constructor(
        public cupomSequence?: string,
        public cupomsTef?: CupomTefStorage[],
        public cuponsTefRecarga?: CupomTefStorage[],
        public tefRecarga?: TefRecargaStorage,
        public cupomFarmaciaPopular?: any
    ) {
        super();
        this.cupomsTef = cupomsTef || [];
    }

    persistenceKey(): PersistenceEnum {
        return PersistenceEnum.TEF;
    }
}
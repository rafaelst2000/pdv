import { AdminConvenioPbmStorage } from './admin-convenio-pbm.storage';
import { PersistenceEnum } from '../persistence.enum';
import { Serializable } from "../serializable";

export class MultiplasPbmsStorage extends Serializable {
    constructor(
        public adminConvenioPbm?: AdminConvenioPbmStorage[]
    ) {super(); }

    public persistenceKey(): PersistenceEnum {
        return PersistenceEnum.MULTIPLAS_PBMS;
    }

}


import { ProgramasPbmStorage } from './programas-pbm.storage';
import { PersistenceEnum } from '../persistence.enum';
import { Serializable } from '../serializable';

export class AdminConvenioPbmStorage extends Serializable {

    constructor (
        public codigoAdminConvenio?: number,
        public nomeAdminConvenio?: string,
        public programas?: ProgramasPbmStorage[]
    ) {
        super();
    }

    public persistenceKey(): PersistenceEnum {
        return PersistenceEnum.MULTIPLAS_PBMS;
    }

}
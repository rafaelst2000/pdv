import { Serializable } from "../serializable";
import { PersistenceEnum } from "../persistence.enum";

export class DocumentosConvenioStorage extends Serializable {
    constructor(
        public codigoTipoDocumento?: number,
        public valorDigitado?: string
    ) {
        super();
    }

    public persistenceKey(): PersistenceEnum {
        return PersistenceEnum.DOCUMENTOS_CONVENIO;
    }

}
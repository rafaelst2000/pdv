import { Serializable } from "../serializable";
import { PersistenceEnum } from "../persistence.enum";
import { ConvenioModel } from "./convenio.model";

export class CapturaConvenioStorage extends Serializable {
    constructor(
        public convenio?: ConvenioModel,
        public itens?: number[]
    ) {
        super();
    }

    public persistenceKey(): PersistenceEnum {
        return PersistenceEnum.CAPTURA_CONVENIO;
    }
}

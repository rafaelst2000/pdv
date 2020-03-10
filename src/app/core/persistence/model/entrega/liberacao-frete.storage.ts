import { PersistenceEnum } from "../persistence.enum";

export class LiberacaoFreteStorage {
    constructor(
        public codigoLiberadorTaxa?: number,
        public codigoUsuario?: number,
        public nomeUsuario?: string
    ) {}

    public persistenceKey(): PersistenceEnum {
        return PersistenceEnum.LIBERACAO_FRETE;
    }
}



import { EnderecoStorage } from './endereco.storage';
import { Serializable } from './serializable';
import { PersistenceEnum } from './persistence.enum';

export class FilialStorage extends Serializable {



    constructor(
        public codigo?: number,
        public cnpj?: string,
        public filialPanvelGo?: string,
        public endereco?: EnderecoStorage,
        public gravaVendaNaoEfetivada?: boolean,
        public conferenciaPreVendaOmni?: boolean,
        public conferenciaVendaOmni?: boolean,
        public checkoutOmni?: boolean
    ) {
        super();
    }

    public persistenceKey(): PersistenceEnum {
        return PersistenceEnum.FILIAL;
    }
}
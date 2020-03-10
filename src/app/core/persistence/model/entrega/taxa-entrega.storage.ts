import { PersistenceEnum } from "../persistence.enum";
import { LiberacaoTaxaFreteStorage } from "./model/liberacao-taxa-frete.storage";

export class TaxaEntregaStorage {
    constructor(
        public codigo?: number,
        public liberacaoTaxaFrete?: LiberacaoTaxaFreteStorage,
        public quantidade?: number,
        public tipoItemPedido?: string,
        public valorTaxa?: number,
    ) {}

    public persistenceKey(): PersistenceEnum {
        return PersistenceEnum.TAXA_ENTREGA;
    }
}


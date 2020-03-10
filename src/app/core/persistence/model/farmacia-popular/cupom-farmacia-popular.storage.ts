import { EnderecoCupomFarmaciaPopularStorage } from './endereco-cupom-farmacia-popular.storage';

export class CupomFarmaciaPopularStorage {
    constructor(
        public cupomCliente?: string,
        public cupomEstabelecimento?: string,
        public identificadorTransacao?: string,
        public endereco?: EnderecoCupomFarmaciaPopularStorage
    ) {}
}
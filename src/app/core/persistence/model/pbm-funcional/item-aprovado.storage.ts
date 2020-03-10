import { ItemStatusStorage } from "./item-status.storage";

export class ItemAprovadoStorage {
    constructor(
        public tipoPrograma?: string,
        public ean?: string,
        public descricao?: string,
        public precoPor?: number,
        public precoPbm?: number,
        public precoVenda?: number,
        public quantidadeAprovada?: number,
        public percentualDesconto?: number,
        public status?: ItemStatusStorage
    ) { }
}



import { ItemStatusStorage } from "./item-status.storage";

export class ItemRejeitadoStorage {
    constructor(
        public tipoPrograma?: string,
        public ean?: string,
        public descricao?: string,
        public precoPor?: number,
        public precoPbm?: number,
        public precoVenda?: number,
        public quantidadeAprovada?: number,
        public status?: ItemStatusStorage
    ) {}
}
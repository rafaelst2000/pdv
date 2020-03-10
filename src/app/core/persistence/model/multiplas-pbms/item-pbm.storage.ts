import { ItemStatusPbmStorage } from './item-status-pbm.storage';
import { PbmAplicadaStorage } from './pbm-aplicada.storage';
import { Item } from '../../../cesta-storage/model/item';

export class ItemPbmStorage {

    public selecionado?: boolean = false;

    constructor (
        public codigoCanalVenda?: number,
        public codigoFilial?: number,
        public codigoItem?: number,
        public codigoBarras?: string,
        public nomenclaturaVarejo?: string,
        public quantidadeTotal?: number,
        public quantidadeAutorizada?: number,
        public precoBruto?: number,
        public precoLiquido?: number,
        public porcetagemAutorizado?: number,
        public pbmAplicada?: PbmAplicadaStorage,
        public pbmAutorizada?: boolean,
        public itens?: Item[],
        public status?: ItemStatusPbmStorage,
        public valorDesconto?: number
    ) { }

}
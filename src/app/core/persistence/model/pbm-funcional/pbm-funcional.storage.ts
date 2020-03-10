import { ItemReceitaPbmStorage } from './item-receita.storage';
import { PersistenceEnum } from '../persistence.enum';
import { Serializable } from "../serializable";
import { ItemRejeitadoStorage } from './itens-rejeitado.storage';
import { ItemAprovadoStorage } from './item-aprovado.storage';

export class PbmFuncionalStorage extends Serializable {
    constructor(
        public aprovada?: boolean,
        public dataPreAutorizacao?: string,
        public codigoPreAutorizacao?: string,
        public codigoConvenio?: number,
        public ean?: string,
        public precoPor?: number,
        public quantidadeVenda?: number,
        public medicamento?: string,
        public precoPanvel?: number,
        public solicitado?: number,
        public porcentagemAutorizado?: number,
        public precoFinal?: number,
        public autorizado?: boolean,
        public bpm?: boolean,
        public receita?: ItemReceitaPbmStorage,
        public itensRejeitados?: ItemRejeitadoStorage[],
        public itensAprovados?: ItemAprovadoStorage[],
        public totalAutorizado?: number
    ) {super(); }

    public persistenceKey(): PersistenceEnum {
        return PersistenceEnum.PBM_FUNCIONAL;
    }

}


import { Periferico } from '../../../perifericos/model/periferico';
import { Serializable } from '../serializable';
import { PersistenceEnum } from '../persistence.enum';
import { OperadorStorage } from '../operador.storage';
import { ImpressoraStorage } from './impressora.storage';
import { SacolaPontosStorage } from './sacola-pontos.storage';

export class ConfiguracaoEstacaoStorage extends Serializable {

    constructor(
        public caixa?: number,
        public filial?: number,
        public hostName?: string,
        public operador?: OperadorStorage,
        public ipMaquina?: string,
        public tipoCaixa?: string,
        public periferico?: Periferico,
        public impressora?: ImpressoraStorage,
        public sacolaPontos?: SacolaPontosStorage,
        public tefHabilitado?: boolean,
        public horaMudancaTef?: string,
        public sequenciaCaixa?: number,
        public impressoraRede?: string,
        public solicitaAtendVenda?: boolean,
        public solicitaAtendPreVenda?: boolean,
        public codAtendente?: string) {
        super();
    }

    persistenceKey(): PersistenceEnum {
        return PersistenceEnum.ESTACAO;
    }

}
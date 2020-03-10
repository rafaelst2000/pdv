import { Serializable } from '../serializable';
import { PersistenceEnum } from '../persistence.enum';
import { OperacaoTefStorage } from './operacao-tef.storage';
import { OperacaoVendaStorage } from './operacao-venda.storage';
import { OperacaoConvenioStorage } from './operacao-convenio.storage';
import { OperacaoPedidoStorage } from './operacao-pedido.storage';
import { OperacaoEmpresaCartaoStorage } from './operacao-empresa-cartao.storage';

export class MaquinaEstadoStorage extends Serializable {
    constructor(
        public operacoesTef?: OperacaoTefStorage[],
        public operacoesVenda?: OperacaoVendaStorage[],
        public operacoesConvenio?: OperacaoConvenioStorage[],
        public operacoesPedido?: OperacaoPedidoStorage[],
        public cupons?: any[],
        public documentosSaida?: any,
        public EstadoMaquina?: any,
        public operacoesPbm?: any[],
        public operacoesEmpresaCartao?: OperacaoEmpresaCartaoStorage[]
    ) {
        super();
    }

    public persistenceKey(): PersistenceEnum {
        return PersistenceEnum.MAQUINA_ESTADO;
    }
}
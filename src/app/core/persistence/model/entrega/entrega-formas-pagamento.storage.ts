import { EnderecoStorage } from "../endereco.storage";
import { TaxaEntregaStorage } from "./taxa-entrega.storage";
import { HorarioRotaStorage } from "./model/horario-rota.storaga";
import { Serializable } from "../serializable";
import { PersistenceEnum } from "../persistence.enum";
import { RetiradaLockerStorage } from "./model/retirada-locker.storage";


export class EntregaFormasPagamentoStorage extends Serializable {
    constructor(
        public cpfTerceiro?: string,
        public enderecoEntrega?: EnderecoStorage,
        public filialEntrega?: number,
        public formaEntrega?: string,
        public horarioRota?: HorarioRotaStorage,
        public itensCesta?: Array<any>,
        public previsaoEntrega?: string,
        public taxaEntrega?: TaxaEntregaStorage,
        public reservaLocker?: RetiradaLockerStorage,
        public telefone?: any,
        public tipoEntrega?: string
    ) {
        super();
    }

    public persistenceKey(): PersistenceEnum {
        return PersistenceEnum.ENTREGA_FORMAS_PAGAMENTO;
    }
}

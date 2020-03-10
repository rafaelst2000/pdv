import { Serializable } from './serializable';
import { PersistenceEnum } from './persistence.enum';

export class EntregaStorage extends Serializable {
    constructor(
        public codigoFormaEntrega: string,
        public codigoTipoEntrega: number,
        public cpfRetiradaBalcao: boolean,
        public codigoRota: number,
        public dataHoraEntrega: Date,
        public dataHoraSaidaRota: Date,
        public codigoTaxa: number,
        public tipoTaxa: string,
        public valorTaxa: number,
        public codigoLiberadorTaxa: number,
        public convenioPagaTaxa: string,
        public idLocker: number,
        public numeroPortaLocker: number,
        public numeroReservaLocker: number,
        public senhaReservaLocker: string,
        public nomeLocker: string,
    ) {
        super();
    }

    persistenceKey(): PersistenceEnum {
        return PersistenceEnum.ENTREGA_FORMAS_PAGAMENTO;
    }
}
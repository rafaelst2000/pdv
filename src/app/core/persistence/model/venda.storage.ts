import { Serializable } from './serializable';
import { PersistenceEnum } from './persistence.enum';
import { EnderecoEntregaStorage } from './entrega/endereco-entrega.storage';

export class VendaStorage extends Serializable {

    constructor(
        public pedido?: any,
        public trocoAmigo?: any,
        public pedidoPreVenda?: any,
        public funcionarioIdentificado?: any,
        public clienteIdentificado?: any,
        public enderecoEntrega?: EnderecoEntregaStorage) {
        super();
    }

    public persistenceKey(): PersistenceEnum {
        return PersistenceEnum.VENDA;
    }

}
import { PersistenceEnum } from './persistence.enum';
import { Serializable } from "./serializable";

export class FuncionarioStorage extends Serializable {
    constructor(
        public usuario?: string,
        public nome?: string,
        public codUsuario?: number,
        public codFuncionario?: number,
        public codAloRecurso?: number
    ) {super(); }

    public persistenceKey(): PersistenceEnum {
        return PersistenceEnum.FUNCIONARIO;
    }

}


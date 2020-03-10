import { EnderecoEletronicoModel } from './endereco-eletronico.model';
import { TelefoneModel } from './telefone.model';
import { EnderecoModel } from './endereco.model';
import { Serializable } from '../serializable';
import { PersistenceEnum } from '../persistence.enum';
import { TelefonePanvelGoModel } from './telefone-panvel-go.model';

export class ClienteStorage extends Serializable {

    constructor(
        public id ?: number,
        public dtNascimento ?: string,
        public codigoEntidadeComercial ?: number,
        public nome ?: string,
        public nomeComercial?: string,
        public inscricaoEstadual?: string,
        public cpf ?: string,
        public telefones ?: TelefoneModel[],
        public celularPanvelGo ?: TelefonePanvelGoModel,
        public enderecos ?: EnderecoModel[],
        public enderecosEletronicos ?: EnderecoEletronicoModel[],
        public sexo ?: string,
        public fidelidadeBloqueado ?: boolean,
        public fidelidade ?: number,
        public valorResgate ?: string,
        public rg ?: string,
        public orgaoEmissorRg ?: string,
        public estadoCivil ?: string,
        public cnpj?: string,
        public receberNewsletter?: boolean,
        public atualizaCadastro?: boolean
    ) { super(); }

    public persistenceKey(): PersistenceEnum {
        return PersistenceEnum.CLIENTE;
    }
}
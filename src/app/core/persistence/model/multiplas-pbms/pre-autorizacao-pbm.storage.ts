import { ItemPreAutorizadoStorage } from './item-pre-autorizado.storage';

export class PreAutorizacaoPbmStorage {

    constructor (
        public aprovada?: boolean,
        public origem?: string,
        public opcaoOperador?: any,
        public usuario?: string,
        public numeroPreAutorizacao?: string,
        public identificadorTransacao?: string,
        public cnpjOrigem?: string,
        public cpf?: string,
        public cpfAtendimento?: string,
        public cartao?: any,
        public itens?: ItemPreAutorizadoStorage[],
        public administradora?: string,
        public codigoAdminConvenio?: number
    ) { }
    
}

import { ItemPbmStorage } from './item-pbm.storage';
 //import { ClienteIdentificado } from '../../../../pbm/identifica-cliente/model/cliente-identificado.model';
//import { FormaPagamentoPbmModel } from '../../../../pbm/model/forma-pagamento-pbm.model';
//import { OperadorModel } from '../../../../identifica-operador/model/operador.model';
//import { PreAutorizacaoPbmModel } from '../../../../pbm/model/pre-autorizacao-pbm.model';
//import { EnderecoModel } from '../../../perifericos/model/endereco-model'; */

export class ProgramasPbmStorage {

    constructor (
        public nomeAdminConvenio?: string,
        public codigoAdminConvenio?: number,
        public codigoProgramaPBMS?: number,
        public nomePrograma?: string,
        public sequenciaPrograma?: number,
        public ItensPbm?: ItemPbmStorage[],
     //   public preAutorizacao?: PreAutorizacaoPbmModel,
        public tipoProgramaPBMS?: string,
       // public cliente?: ClienteIdentificado,
      //  public operador?: OperadorModel,
      //  public formaPagamento?: FormaPagamentoPbmModel,
      //  public enderecoPaciente?: EnderecoModel,
        public confirmacaoAutorizacao?: any,
        public isAutorizadorWeb?: boolean
    ) { }

}



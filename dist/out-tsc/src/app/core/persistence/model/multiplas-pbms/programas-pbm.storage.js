"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { ClienteIdentificado } from '../../../../pbm/identifica-cliente/model/cliente-identificado.model';
//import { FormaPagamentoPbmModel } from '../../../../pbm/model/forma-pagamento-pbm.model';
//import { OperadorModel } from '../../../../identifica-operador/model/operador.model';
//import { PreAutorizacaoPbmModel } from '../../../../pbm/model/pre-autorizacao-pbm.model';
//import { EnderecoModel } from '../../../perifericos/model/endereco-model'; */
var ProgramasPbmStorage = /** @class */ (function () {
    function ProgramasPbmStorage(nomeAdminConvenio, codigoAdminConvenio, codigoProgramaPBMS, nomePrograma, sequenciaPrograma, ItensPbm, 
        //   public preAutorizacao?: PreAutorizacaoPbmModel,
        tipoProgramaPBMS, 
        // public cliente?: ClienteIdentificado,
        //  public operador?: OperadorModel,
        //  public formaPagamento?: FormaPagamentoPbmModel,
        //  public enderecoPaciente?: EnderecoModel,
        confirmacaoAutorizacao, isAutorizadorWeb) {
        this.nomeAdminConvenio = nomeAdminConvenio;
        this.codigoAdminConvenio = codigoAdminConvenio;
        this.codigoProgramaPBMS = codigoProgramaPBMS;
        this.nomePrograma = nomePrograma;
        this.sequenciaPrograma = sequenciaPrograma;
        this.ItensPbm = ItensPbm;
        this.tipoProgramaPBMS = tipoProgramaPBMS;
        this.confirmacaoAutorizacao = confirmacaoAutorizacao;
        this.isAutorizadorWeb = isAutorizadorWeb;
    }
    return ProgramasPbmStorage;
}());
exports.ProgramasPbmStorage = ProgramasPbmStorage;
//# sourceMappingURL=programas-pbm.storage.js.map
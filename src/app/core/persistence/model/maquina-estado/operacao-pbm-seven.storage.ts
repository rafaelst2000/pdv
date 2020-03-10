import { ConfirmaAutorizacaoTefSevenResponse } from '../../../../pbm/integration/seven/confirma-autorizacao-tef-seven.response';
import { ComprovanteConfirmaAutorizacaoTefResponse } from "../../../../pbm/integration/comprovante-confirma-autorizacao-tef.response";

export class OperacaoPbmSevenStorage{
    constructor(
        public numeroCupom?: string,
        public numeroCartao?: string,
        public nsuAutorizacao?: string,
        public dataTransacao?: string,
        public confirmaAutorizacao?: ConfirmaAutorizacaoTefSevenResponse 
    ){}
}
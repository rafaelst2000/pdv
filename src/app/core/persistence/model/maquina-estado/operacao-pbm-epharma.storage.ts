import { ConfirmaAutorizacaoTefEpharmaResponse } from '../../../../pbm/integration/epharma/confirma-autorizacao-tef-epharma.response';
import { ComprovanteConfirmaAutorizacaoTefResponse } from "../../../../pbm/integration/comprovante-confirma-autorizacao-tef.response";

export class OperacaoPbmEpharmaStorage {
    constructor(
        public tipoDocumentoFiscal?: number,
        public identificacaoTipoDocumento?: string,
        public nsuAutorizacao?: string,
        public dataTransacao?: string,
        public numeroCaixa?: number,
        public numeroCupom?: string,
        public confirmaAutorizacao?: ConfirmaAutorizacaoTefEpharmaResponse
    ) {}
}
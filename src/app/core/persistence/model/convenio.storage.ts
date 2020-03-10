import { Serializable } from './serializable';
import { PersistenceEnum } from './persistence.enum';

export class ConvenioStorage extends Serializable {
    constructor(public modoConvenio?: number,
                public codigoConvenio?: number,
                public descricaoConvenio?: string,
                public numeroCartao?: string,
                public permiteCombinarConvenio?: boolean,
                public tipoPagamento?: string,
                public saldo?: number,
                public aplicarDescontos: boolean = false,
                public nomeAssociado?: string,
                public codigoAssociado?: number,
                public matriculaAssociado?: string,
                public identificacaoConvenio?: string,
                public filialConvenio?: number,
                public permiteCombinarFidelidade?: boolean,
                public codigoConvenioDesconto?: number,
                public saldoFidelidade?: number,
                public fidelidadeBloqueado?: boolean,
                public totalPontos?: number,
                public trocaSacolaPontos?: boolean,
                public codigoDependente?: number,
                public nomeDependente?: string,
                public permiteMultiplasFormas?: boolean,
                public permiteCombinarConvenioPbm?: boolean,
                public utilizaCartao?: boolean,
                public utilizaSenha?: boolean,
                public cpf?: string,
                public pagamentoTaxaEntrega?: string,
                public empresaCartao?: boolean,
                public consultaApiEntidade?: boolean,
                public consultaApiAutorizacao?: boolean
            ) {

        super();
    }

    persistenceKey(): PersistenceEnum {
        return PersistenceEnum.CONVENIOS;
    }
}
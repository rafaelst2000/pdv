import { Associado } from './associado';

export class ConvenioCesta {
    constructor(public codigo?: number,
                public filial?: number,
                public percentualDesconto?: number,
                public descricaoAbreviada?: string,
                public associado?: Associado) {}
}